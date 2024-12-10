import { Button, FormLabel, TextField } from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const ClimaApp = () => {

  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)
  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const ApiKey = '43cd027b2ff060e3a6bca3755cbaa523'
  const difKelvin = 273.15 

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };



  const fetchClima = async () => {
    try {
      /* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${ApiKey}`)
      const data = await response.json()
      setDataClima(data)

    } catch (error) {
      console.error('Ocurrio un error en el programa', error)
    }

  }
  return (
    <div className='container'>
      <h1>Clima</h1>

      <form onSubmit={handleSubmit}  >
        <TextField
          sx={{ p: 0.1, m: 0.5, mt: 0.5, width: '50ch' }}

          type='text'
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <Button type='submit' variant="contained" startIcon={<SearchIcon />} sx={{ m: 1 }} >
          buscar
        </Button>
      </form>
      {
        dataClima && (
          <div>
            <h2>
              {dataClima.name}
            </h2>
            <p><b>Temperatura:</b> {parseInt(dataClima.main.temp- difKelvin)}°C </p>
            <p><b>Descripción Metereologica:</b> {dataClima.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} width="200px" />
            </div>
        )
      }

    </div>
  )
}
