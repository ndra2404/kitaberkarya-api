<<<<<<< HEAD
'use strict';

const env = process.env.NODE_ENV || 'development';
const knexfile = require('../knexfile')[env];
const knex = require('knex')(knexfile);

=======
'use strict';

const env = process.env.NODE_ENV || 'development';
const knexfile = require('../knexfile')[env];
const knex = require('knex')(knexfile);

>>>>>>> bdcdd0c8278c31f258dfcbc8f87b4258f195b6c3
module.exports = knex;