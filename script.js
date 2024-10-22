let button01 = document.getElementById("button01");
let input01 = document.getElementById("cityinput");
const cityname =document.getElementById("cityname");
const citytime = document.getElementById("citytime");
const citytemp = document.getElementById("temp");
async function getdata(cityname) { const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5e6d4fe82249489f9f0163831242210&q=${cityname}&aqi=no`);
return await promise.json()}
button01.addEventListener("click", async () => {
    const value = input01.value;
    const result = await getdata(value);
    console.log(result);
    cityname.innerText=`${result.location.name},${result.location.region}-${result.location.country}`
    citytime.innerText=`${result.location.localtime}`
    citytemp.innerText=`${result.current.temp_c}°C`
});
