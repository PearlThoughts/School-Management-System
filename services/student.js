const Student = require('../models/student');

exports.findAll = async () => {
    return await Student.find({}, 'studentName fatherName grade')
        .populate('application', 'studentName fatherName grade');
};

exports.findOne = async (query) => {
    return await Student.findOne(query, 'studentName fatherName grade');
};

exports.create = async (student) => {
    return await Student.create(student);
};
