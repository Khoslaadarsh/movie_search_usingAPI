var express = require("express");
var app = express();
var request=require("request");
app.set("view engine","ejs");
const PORT = process.env.PORT || 49966


app.get("/",function (req,res) {  
    res.render("search");
});

app.get("/results",function (req,res) {  
    var query =req.query.search;
    var url="http://www.omdbapi.com/?&apikey=5f8e334d&s=" + query;
    
    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var data =JSON.parse(body);
            // res.send(results["Search"][0]["Title"]); 
            res.render("results",{data: data});
        }
    });
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))