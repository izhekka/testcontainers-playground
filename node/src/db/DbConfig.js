/*
 * Copyright (C) 2021 Spanning Cloud Apps. All rights reserved.
 */

const config = require('config');

module.exports = {
  host: config.get('db').host,
  port: config.get('db').port,
  user: config.get('db').user,
  pass: config.get('db').pass,
  db: config.get('db').db
}
