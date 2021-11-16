window.addEventListener('load',()=> {
    const TimeZone = document.querySelector('.time-zone')
    const degree = document.querySelector('.degree')
    const description = document.querySelector('.description')


    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=> {
         long = position.coords.longitude
         lat = position.coords.latitude

        const api_key = '00c8205f4882cd6a02f7dbc119ef7378a0c6ec1b03bdede741'

        const api = `https://api.troposphere.io/forecast/${lat},${long}?token=${api_key}`;
        fetch(api)
            .then(res => {
           return res.json();
            })
            .then(items => {
                console.log(items);

                const {temperature, type} = items.data.current

                degree.textContent = temperature
                TimeZone.textContent = items.data.timezone
                description.textContent = type
                
                SetIcon(type, document.querySelector('.icon'))
               
            })
        
           
        })
    }
    function SetIcon(type,  iconID){
        const skycons = new Skycons({color: "white"})
        const currentIcon = type.replace(/-/g, "_").toUpperCase()
        skycons.play()
        return skycons.set(iconID, Skycons[currentIcon])
    }

})








//https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${key}