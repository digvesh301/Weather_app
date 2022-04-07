// import module
const express=require('express');
const App = express();
const path=require('path');
const port=process.env.port||5000;
const requests=require('requests');
const hbs=require('hbs');

// pathff


const static_path=path.join(__dirname,'../public')
const templet_path=path.join(__dirname,'../templetes/views');
const partial_path=path.join(__dirname,'../templetes/partials');
const css_path=path.join(__dirname,"../public/css");
const image_path=path.join(__dirname,"../public/images");
// set & use
App.use(express.static(static_path))    
App.use(express.static(css_path))
App.use(express.static(image_path))
App.set("view engine","hbs");
App.set("views",templet_path);
hbs.registerPartials(partial_path);

// Api key and url


// request and response
App.get('/',(req,res)=>{
    res.render("index");
});
App.get('/about',(req,res)=>{
    res.render("about");

})
App.get('/Weather',(req,res)=>{
//     requests(url).on("data",(chunk)=>{  
//         const objdata=JSON.parse(chunk)
//         const array=[objdata];
        
//         console.log(objdata.main.temp)
//         res.send(objdata.name);
// });
        res.render('weather')
});

App.get('*',(req,res)=>{
    res.render('error')
})



App.listen(port,()=>{
    console.log(`Server listen at port number ${port}`);
})