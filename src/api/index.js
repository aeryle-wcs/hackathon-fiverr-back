const express = require('express');

const emojis = require('./emojis');
const users = require('./users/routes');
const auth = require('./auth/routes');
const attachments = require('./attachments/routes');
const tags = require('./tags/routes');
const search = require('./search/routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/auth', auth);
router.use('/users', users);
router.use('/attachments', attachments);
router.use('/tags', tags);
router.use('/search', search);

module.exports = router;
