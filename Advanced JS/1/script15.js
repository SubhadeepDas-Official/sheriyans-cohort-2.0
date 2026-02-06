async function getWeather(city){
    let apikey = `b356025dcd4b79436e12fde881d45494`
    try {
        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        if(!raw.ok){
            throw new Error("Something went wrong! Type correct city name")
        }
        let data = await raw.json()
        console.log(`${data.name} - ${data.main.temp}°C`)
        if(data.main.temp < 0){
            console.log("too cold🥶")
        }
        if(data.main.temp > 0 && data.main.temp < 30){
            console.log("normal👍")
        }
        if(data.main.temp > 30){
            console.log("too hot🥵")
        }
    } catch (error) {
        console.log(error.message)
    }
}

getWeather("bengaluru")
