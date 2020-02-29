//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://admin:admin@studentix-ttie3.mongodb.net/County?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
console.log("ee")
//Get the default connection
var db = mongoose.connection;
var Schema = mongoose.Schema;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var StudentSchema = mongoose.Schema({
    fName: String,
    lName: String,
    mName: String,
    username: String,
    password: String,
    studID: String,
    school:{ type: Schema.Types.ObjectId, ref: 'School' }
});

var TeacherSchema = mongoose.Schema({
    fName: String,
    lName: String,
    mName: String,
    username: String,
    password:String, 
    teachID: String,
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    pcourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});

var CourseSchema = mongoose.Schema({
    name: String,
    pd: String,
    courseID: String,
    school: { type: Schema.Types.ObjectId, ref: 'School' },
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

var SchoolSchema = mongoose.Schema({
    name: String,
    schoolID: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],

});
var Student  = mongoose.model('Student',StudentSchema);
var Teacher = mongoose.model('Teacher', TeacherSchema);
var Course = mongoose.model('Course', CourseSchema);
var School = mongoose.model('School', SchoolSchema);
console.log("eee");
//var blair = new School({name:"Montgomery Blair HighSchool", schoolID:"mbhs757", students:[], courses:[],teachers:[] });
//blair.save();

module.exports = {db:db, Student:Student, Teacher:Teacher, Course:Course, School:School}