const Weather = () => {
    
    let temp = 15;

    if (temp < 15) {
        return <p>It is cold outside!</p>
    }
    else if (temp >= 15 && temp <= 25) {
        return <p>It's nice outside</p>
    }
    else if(temp > 25){
        return <p>It is hot outside!</p>
    }
    

};

export default Weather;