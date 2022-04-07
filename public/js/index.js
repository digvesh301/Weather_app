const btn=document.getElementById('submitBtn');
const cityname=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_pro=document.getElementById('temp_pro');
const days=document.getElementById('day');
const date=document.getElementById('date');


const day=new Date().getDay()
const dates=new Date().getDate();
const month=new Date().getMonth();
const newArray=["Sunday","Monday","Tuesday","Weadnesday","Thuresday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

days.innerHTML=newArray[day];
date.innerHTML=dates+"/"+months[month];

const getingfo=async(event)=>{

    
    event.preventDefault();

    
    
    let cityvalue=cityname.value;

    
    if(cityvalue==""){
        city_name.innerHTML="Please write the name before search";
    }else{
        try{

            const api_key="dcbbbdd521a87c95159667ebf2b5fcbb";
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${api_key}&units=metric`;
            const response=await fetch(url);
            const objdata=await response.json()
            temp_pro.innerHTML=objdata.main.temp;
            city_name.innerHTML=objdata.name;
            
            // console.log(objdata);

        }
        catch{
            city_name.innerHTML="Please enter city name propely";
        }
    
    }
}

  



btn.addEventListener('click',getingfo);
