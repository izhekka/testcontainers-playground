/*
 * Copyright (C) 2017 Spanning Cloud Apps.  All rights reserved.
 */
'use strict';

const BPromise = require('bluebird');
const pgPromise = require('pg-promise');

const { getPostgreSQLConfig } = require('./DbConfig');

// Initialize pg-promise
const pgp = pgPromise({
  promiseLib: BPromise,
  // Log SQL queries
  query: evt => {
    console.debug(evt.query);
  }
});

let database
const getDatabase = () => {
  if (!database) {
    const dbConfig = getPostgreSQLConfig();
    const connectionString = `postgres://${dbConfig.user}:${dbConfig.pass}@${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`;
    database = pgp(connectionString);
  }

  return database;
}

const query = (sql, values) => {
  return getDatabase().query(sql, values);
}

/*
 * This module provides access to the database. The methods available are the ones provided by pg-promise.
 */
module.exports = {
  query
};
