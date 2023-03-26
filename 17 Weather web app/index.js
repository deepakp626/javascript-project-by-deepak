let API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
    // let api = `https://api.openweathermap.org/data/2.5/weather?q`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // let img_url = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let cityNameEl = document.getElementById("cityName")
    let formEl = document.getElementById("form")
    let weatherEl = document.getElementById("weather")

    const showWeather = (data)=> {
        weatherEl.innerHTML = `
            <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <div class="text">
                <h2> ${data.main.temp} °C</h2>
                <h3> ${data.weather[0].main}</h3>
            </div>
          `
    }

    const fetchWeather = async (e)=>{
        e.preventDefault()
        let data;
        let city = cityNameEl.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        try {
            data= await fetch(url)
            data = await data.json()
            console.log(data)
            if(data.cod == 404){
                weatherEl.innerHTML = `<h2 class="notFound"> ${data.message}</h2>`
                return;
            }
        } catch (error) {
            console.log("error is ",error)
            weatherEl.innerHTML = `<h2 class="notFound"> City Not found</h2>`
        }
        showWeather(data)
        console.log("done")
        return false
    }
    formEl.addEventListener("submit",fetchWeather)