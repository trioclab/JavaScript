try {
    let weathershow = async () => {
        let lat = 99.001
        let long = 9.001
        let API_KEY = 'd3222a35ceeadcb305c51e73a46e89e9'
    
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        let data = await response.json()
        console.log(data);
        renderOutput(data)
    }
    weathershow()
} catch (error) {
    console.error("Error", error);
}
renderOutput = ()=>{
    tempreture = document.createElement('p')
    tempreture.textContent = `${data?.main?.temp.tofixed(2)}`
    document.body.append(tempreture)
}