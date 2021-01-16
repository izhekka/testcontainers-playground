const { resolve } = require('path');

module.exports = {
  postgres: {
    image: 'postgres',
    tag: '9.6-alpine',
    ports: [5432],
    env: {
      POSTGRES_DB: 'postgres',
      POSTGRES_USER: 'postgres',
      POSTGRES_PASSWORD: 'postgres'
    },
    wait: {
      type: 'text',
      text: 'server started'
    },
    bindMounts: [
      {
        source: resolve(__dirname, './db/init.sql'),
        target: '/docker-entrypoint-initdb.d/1-init.sql',
        mode: 'ro'
      },
      {
        source: resolve(__dirname, './db/data.sql'),
        target: '/docker-entrypoint-initdb.d/2-data.sql',
        mode: 'ro'
      }
    ]
  }
};
