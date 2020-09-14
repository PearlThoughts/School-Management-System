const express = require('express');
const router = express.Router();
const controller = require('../../controllers/user.controller');

router
    .route('/')
    /**
     * @api {get} v1/students
     */
    .get(controller.list)
    /**
     * @api {post} v1/students
     */
    .post(controller.create);

router
    .route('/:enrollNumber')
    /**
     * @api {get} v1/students/<enrollNumber>
     */
    .get(controller.getStudent);

module.exports = router;
