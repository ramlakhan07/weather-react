import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("")
    let [error, setError]= useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "be954ac7ef2052a9a60b91352b26baa2"

    let getWeatherInfo = async ()=>{
        try{
          
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json()
            //  
            let result = {
                city: city,
                temp: jsonResponse.main.temp_min,
                tempMin: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
    
            }
            console.log(result)
            return result;
        } catch(err){
            throw err;
        }
        }
       
    
    let handleChange = (event)=>{
        setCity(event.target.value)
    }
    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city)
        setCity("")
       let info = await getWeatherInfo();
       updateInfo(info)
        } catch(err){
            setError(true)
        }
        
    }


    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit} action="">
              <TextField id="city" onChange={handleChange} label="City Name" variant="outlined" />
              <br /><br />
              <Button type='submit' variant="contained">Search</Button>
              {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}