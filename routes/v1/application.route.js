const express = require('express');
const router = express.Router();
const controller = require('../../controllers/application.controller');

router
    .route('/')
    /**
     * @api {post} v1/applications
     */
    .post(controller.create);

router
    .route('/:applicationId')
    /**
     * @api {get} v1/applications/<applicationId>
     */
    .get(controller.getApplication);

router
    .route('/grantadmission/:applicationId')
    /**
     * @api {patch} v1/applications/grantadmission/<applicationId>
     */
    .patch(controller.grantAdmission);

module.exports = router;
