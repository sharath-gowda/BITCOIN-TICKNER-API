const express=require("express");
const bodyParser=require("body-parser");
const request=require("request")
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function (req,res) 
{
    res.sendFile(__dirname+"/index.html")
  })
  app.post("/", function(req,res){
      var crypto=req.body.crypto;
      var fiat=req.body.fiat;
      var basicUrl="https://apiv2.bitcoinaverage.com/indices/global/ticker/";
      var finalUrl=basicUrl+crypto+fiat;
      request(finalUrl,function(error,response,body) 
      {
          var data=JSON.parse(body);
          var price=data.last;
         res.send("<h1>the current price of 1"+" "+crypto+" "+"is"+" "+price+" "+fiat +"</h1>")

          
      })
  })
      
  
      
  
app.listen(3000,function(){
    console.log("server is at port 3000")
})