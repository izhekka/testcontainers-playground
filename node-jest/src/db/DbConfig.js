/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

const config = require('config');

const dbConfig = config.util.toObject(config.get('db'));

const getHost = () => {
  const testContainerHost = global.__TESTCONTAINERS_POSTGRES_IP__;
  return testContainerHost || dbConfig.host;
};

const getPort = () => {
  const testContainerPort = global.__TESTCONTAINERS_POSTGRES_PORT_5432__;
  return testContainerPort || dbConfig.port;
};

const connectionInfo = {
  host: getHost(),
  port: getPort()
};

module.exports = {
  getPostgreSQLConfig: () => Object.assign({}, dbConfig, connectionInfo)
}
