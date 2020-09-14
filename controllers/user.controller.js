const studentService = require('../services/student');

/**
 * Get students list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
        const students = await studentService.findAll();
        res.json(students);
    } catch (error) {
        next(error);
    }
};

/**
 * Create new student
 * @public
 */
exports.create = async (req, res, next) => {
    try {
        const student = await studentService.create(req.body);
        res.json(student);
    } catch (error) {
        next(error);
    }
};

/**
 * Get student from enroll number
 * @public
 */
exports.getStudent = async (req, res, next) => {
    try {
        const enrollNumberRegExp = new RegExp(/^ST(?<enrollNumber>\d{4})$/);
        if (enrollNumberRegExp.exec(req.params.enrollNumber)) {
            const enrollNumber = enrollNumberRegExp.exec(req.params.enrollNumber).groups.enrollNumber;
            const student = await studentService.findOne({
                enrollNumber: enrollNumber
            });
            res.json(student);
        } else {
            res.json({ status: false, message: 'Invalid Data.' });
        }
    } catch (error) {
        next(error);
    }
};
