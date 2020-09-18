const express = require('express');
const router = express.Router();
const studentRoutes = require('./student.route');
const applicationRoutes = require('./application.route');

/**
 * Student routes
 */
router.use('/students', studentRoutes);

/**
 * Application routes
 */
router.use('/applications', applicationRoutes);

module.exports = router;
