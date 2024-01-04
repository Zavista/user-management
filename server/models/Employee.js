const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    tel:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    job:{
        type: String,
        required: true
    },
    eid:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
    },
    updatedAt:{
        type: Date,
    },
})

EmployeeSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

EmployeeSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Employee', EmployeeSchema);