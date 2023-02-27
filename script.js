container=document.getElementById("card");
console.log(container);
let restUrl = `https://restcountries.com/v3.1/all`;
function restcountries(){
    fetch(restUrl)
     
     .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) 
            { try{
                countryName = data[i].name.official;
                capital = data[i].capital;
                region = data[i].region;
                latlng = data[i].latlng;
                flag = data[i].flags.png;
                countrycode = data[i].cca2;
                container.innerHTML += `<div id="cardWrapper" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                            <div class="card h-100 ">
                                              <div class="card-header" style=" background-color:black; color:white">
                                                <h5 class="card-title d-flex justify-content-center "><b>${countryName}</b></h5>
                                              </div>
                                              <div class="card-body cardbg">
                                                <img src=${flag} class="card-img-top" alt="...">
                                                <div class="card-text">  
                                                  <ul class="list-group list-group-flush">
                                                    <!--<li class="list-group-item card-text"><b>Native Name : </b>${countryName}</li>-->
                                                    <li class="list-group-item card-text"><b>Capital : </b>${capital}</li>
                                                    <li class="list-group-item card-text"><b>Region : </b>${region}</li>
                                                    <li class="list-group-item card-text"><b>Country Code : </b>${countrycode}</li>
                                                  <div id="weather${i}">
                                                  </div>
                                                    <a id="toggle" class= "btn btn-primary" onclick="getWeather('${latlng[0]}','${latlng[1]}', ${i})"> Click For Weather </a>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                        </div><br>`
                                    }
                                    catch(err){
                                        console.log(err.message);
                                    }
            }
        });
        
}
restcountries();

function getWeather(lat,lng,i){
    let apikey='f24e51e6acf2c7bfd4a12b15516d1d64';
    let openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
    x=fetch(openWeather)
    .then((response)=>response.json())
    .then((data)=>{
        /* let ele_weatherbtn = document.querySelector('a');
        ele_weatherbtn.style.display='none'; */
        let ele_weather = document.getElementById('weather'+i)
        let temp = data.main.temp
        let pressure = data.main.pressure
        let humidity = data.main.humidity
        let windSpeed = data.wind.speed
        ele_weather.innerHTML += `<div class="card-body1"><b>Weather Details</b>
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item card-text"><b>Temperature : </b>${temp}</li>
                                        <li class="list-group-item card-text"><b>Pressure : </b>${pressure}</li>
                                        <li class="list-group-item card-text"><b>Humidity : </b>${humidity}</li>
                                        <li class="list-group-item card-text"><b>Wind Speed : </b>${windSpeed}</li>
                                      </ul>
                                    </div>`
    })
    
}