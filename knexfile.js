// Update with your config settings.
'use strict';

module.exports = {
  local: {
    client: 'postgresql',
    connection: {host: '127.0.0.1', user: 'postgres', password: '', database: 'random_users'},
    pool: {
      min: 2,
      max: 10
    },
    debug: false
  }
};