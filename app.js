const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const date=require(__dirname + "/date.js");
var items=[];
var workItems=[];
const app=express();

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    // var today=new Date();
    // var currDay=today.getDay();
    // var day="";
    // if(currDay==0 || currDay==6){
    //     // res.sendFile(__dirname + "/Weekend.html");
    //     day="Weekend";
        
    // }
    // else{
    //     day="Weekday";
    //     // res.sendFile(__dirname + "/Weekday.html");
    // }

    // switch(currDay){
    //     case 0:
    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    // }
    
    // var options={
    //     weekday:"long",
    //     month:"long",
    //     day:"numeric"
    // };
    // var day=today.toLocaleDateString("en-US",options);

    let day=date.getDate();
    res.render("list", {kindOfDay:day , newItems:items});
});

app.post("/",function(req,res){
    // console.log(req.body);
    if(req.body.list==="Work Page"){
        var item = req.body.newItem2;
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        var item = req.body.newItem2;
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work",function(req,res){
    res.render("list",{kindOfDay:"Work Page",newItems:workItems});
});

app.post("/work",function(req,res){
    var item = req.body.newItem2;
    workItems.push(item);
    res.redirect("/work");
    
});

app.get("/about",function(req,res){                  
    res.render("about");                           //example to explain layouts.
});

app.listen(3000,function(req,res){
    console.log("server started at port 3000");
});

//If you have to send many things then you cant make html pages separately.it will be very lengthy instead we will do with the help of templates. 
//Suppose you have different if else for 7 days then you have to make 7 html pages that are very similar.So template will gonna help you in this case!