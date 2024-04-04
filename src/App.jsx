
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from './SearchBox';
import TextField from '@mui/material/TextField';
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';

function App() {
  

  return (
    <>
      {/* <h1>Material</h1> */}
      {/* <Button variant="contained">Click me</Button>
      <Button variant="contained" color="error">Click me</Button>
      <Button variant="contained" color="success" size='small'>Click me</Button>
      <br />
      <Button startIcon={<DeleteIcon/>}>Delete</Button> */}

      <WeatherApp/>

      {/* <SearchBox/>
      <InfoBox/> */}
    </>
  )
}

export default App
