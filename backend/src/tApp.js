const mongoose=require("mongoose");
mongoose.set('strictQuery',true);
// atlas connection string= mongodb+srv://pratik_k:aCJLmZTfr97NMLSW@cluster0.uwon6s0.mongodb.net/test
mongoose.connect("mongodb+srv://prajjwalsonaje:H1PbV5iLs9uYpH7P@cluster0.wmdix3a.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>console.log("connection successfull..."))
.catch((err)=>console.log(err));

const express=require("express");
const app=express();
const port= 5000;

//change
const path=require('path');
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname+"/../../public")));

// view engine
app.set("views",path.resolve(__dirname+"/../../views"))
app.set("view engine", "ejs")


const cors  = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.redirect('/api/main');
  });  

app.use('/api/quizBank/',require('../routes/quizBank'));
app.use('/api/resp/',require('../routes/resp'));
app.use('/api/student/',require('../routes/student'));
app.use('/api/teacher/',require('../routes/teacher'));
app.use('/api/main/',require('../routes/main'));


// const ip=require('../../public/Javascript/ipInfo').ip
app.listen(3000 || 'localhost',function() {
    console.log('Application worker ' + process.pid + ' started...');
  }
  );
