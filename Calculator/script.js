async function dailyForecast (WeatherForecast){
    try{
        const respones = await fetch (WeatherForecast);
        if (!respones.ok){
            throw new Error('Cannot access data in this location');
        }
        let data = await respone.json();
        console.log(data);
        displayForecast(data);
    } catch(error){
        console.log(error);
    }
}
function displayForecast(data){
    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    let currentWeekDay = daysOfTheWeek[currentDay];
    for(const[key,value] of Object.entries(data.list)){
        let day = value.dt;
    }
}