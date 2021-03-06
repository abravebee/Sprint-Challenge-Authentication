const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { authenticate } = require('./middlewares');

const db = require('../database/dbConfig.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};


//== Register ==
function register(req, res) {
  const creds = req.body;

  const hash = bcrypt.hashSync(creds.password, 10);
  creds.password = hash;

  db('users')
    .insert(creds)
    .then(ids => {
      const id = ids[0];
      console.log(ids, ids[0])
      res
        .status(201)
        .json({ newUserId: id });
    })
    .catch(err => {
      res
        .status(500)
        .json(err);
    });
};

// == JSON Web Token Generation ==
const jwtKey = require('../_secrets/keys').jwtKey;

function generateToken(user) {
  const jwtPayload = {
    ...user,
    roles: ['admin'],
  };
  const jwtOptions = {
    expiresIn: '1m',
  };
  
  return jwt.sign(jwtPayload, jwtKey, jwtOptions);
}

// == Log In ==
function login(req, res) {
  // implement user login
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({
            welcome: user.username, token
          });
      } else {
        res
          .status(401)
          .json({ message: 'Nope.' })
      }
    })
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
