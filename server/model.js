const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Pannaporn_data',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(result => console.log('Connect OK'))
.catch(err => console.log(err))

let studentSchema = new mongoose.Schema({
    stdId: String,
    stdName: String,
    stdGrade: Number

})
let Student = mongoose.model('Student',studentSchema)
module.exports = Student