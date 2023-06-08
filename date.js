//building our own module to export for example:date!

exports.getDate = function(){                  //module act as an object.
    let today=new Date();
    
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    return today.toLocaleDateString("en-US",options);
}           

exports.getDay = function(){              //module act as an object.
    let today=new Date();
    
    let options={
        weekday:"long",
    };
    return today.toLocaleDateString("en-US",options);
}              

//module.exports and exports works same!