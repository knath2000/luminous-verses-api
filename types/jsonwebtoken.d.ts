declare module 'jsonwebtoken' {
  import jwt = require('jsonwebtoken');       // re-export the CJS namespace
  export = jwt;
}