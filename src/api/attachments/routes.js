const express = require('express');
const middlewares = require('../../middlewares');

const router = express.Router();

const getAll = require('./controllers/getAll');
const getOne = require('./controllers/getOne');
const post = require('./controllers/post');
const deleteAttachments = require('./controllers/deleteAttachments');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', middlewares.authenticateJWT, post);
router.delete('/:id', middlewares.authenticateJWT, deleteAttachments);

module.exports = router;
