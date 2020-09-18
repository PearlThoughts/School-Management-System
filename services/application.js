const Application = require('../models/application');

exports.findOneWithStudent = async (query) => {
    return await Application.findOne(query, 'studentName fatherName grade')
        .populate('student', 'studentName fatherName grade');
};

exports.addEnrollNumber = async ({ _id }, student) => {
    return await Application.findOneAndUpdate({
        _id: _id
    }, {
        enrollNumber: student.enrollNumber,
        student: student._id
    });
};

exports.create = async (application) => {
    return await Application.create(application);
};
