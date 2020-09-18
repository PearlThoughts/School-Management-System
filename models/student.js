const mongoose = require('mongoose');
const { Model, Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema({
    enrollNumber: Number,
    studentName: String,
    fatherName: String,
    grade: String,
    application: {
        type: Schema.Types.ObjectId,
        ref: 'Application'
    }
});
UserSchema.plugin(AutoIncrement, {
    inc_field: 'enrollNumber',
    start_seq: 1001,
    collection_name: 'Counter'
});

class Student extends Model { }

module.exports = mongoose.model(Student, UserSchema, 'Student');
