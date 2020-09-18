const studentService = require('../services/student');
const applicationService = require('../services/application');

/**
 * Create new application
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const application = await applicationService.create(req.body);
        res.json(application);
    } catch (error) {
        res.json({ status: false, message: error });
    }
};

/**
 * Get application from object id
 * @public
 */
exports.getApplication = async (req, res, next) => {
    try {
        const application = await applicationService.findOneWithStudent({
            _id: req.params.applicationId
        });
        if (application) {
            res.json(application);
        } else {
            res.json({ status: false, message: 'Application not found.' });
        }
    } catch (error) {
        res.json({ status: false, message: error });
    }
};

/**
 * Grant admission
 * @public
 */
exports.grantAdmission = async (req, res, next) => {
    try {
        const application = await applicationService.findOneWithStudent({
            _id: req.params.applicationId
        });
        if (application) {
            if (application.student) {
                res.json({ status: false, message: 'Already admission granted for this application.' });
            } else {
                const data = {
                    studentName: application.studentName,
                    fatherName: application.fatherName,
                    grade: application.grade,
                    application: application._id,
                };
                const student = await studentService.create(data);
                if (student) {
                    await applicationService.addEnrollNumber(application, student);
                    res.json({ status: true, message: 'Admission granted successfully.' });
                }
            }
        } else {
            res.json({ status: false, message: 'Application not found.' });
        }
    } catch (error) {
        res.json({ status: false, message: error });
    }
};
