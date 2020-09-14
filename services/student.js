const Student = require('../models/student');

exports.findAll = async () => {
    return await Student.find();
};

exports.findOne = async (query) => {
    return await Student.findOne(query);
};

exports.create = async (student) => {
    return await Student.create(student);
};
