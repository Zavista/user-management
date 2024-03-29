const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");


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
    aif:{
        type: String,
        default: "N/A"
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    },
})

EmployeeSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
});

EmployeeSchema.virtual('createdFormatted').get(function () {
    return DateTime.fromJSDate(this.createdAt).toLocaleString(DateTime.DATE_MED);
});

EmployeeSchema.virtual('updatedFormatted').get(function () {
    return DateTime.fromJSDate(this.updatedAt).toLocaleString(DateTime.DATE_MED);
});


EmployeeSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Employee', EmployeeSchema);