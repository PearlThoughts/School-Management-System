const mongoose = require('mongoose');
const { Model, Schema } = mongoose;

const ApplicationSchema = new Schema({
    enrollNumber: Number,
    studentName: String,
    fatherName: String,
    grade: String,
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }
});

class Application extends Model { }

module.exports = mongoose.model(Application, ApplicationSchema, 'Application');
