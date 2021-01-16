/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

const sql = require('sql');

const Person = sql.define({
  name: 'person',
  columns: ['first_name', 'last_name']
});

module.exports = Person;
