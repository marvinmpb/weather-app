import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Paper, Typography } from '@mui/material';
// import { Cloud, WbSunny, Thunderstorm } from '@mui/icons-material';

import { meteoRequest } from '../../requests/meteoRequests';

import './meteo.scss';

function getIconUrl(iconId) {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
}

function Meteo({
  cityname,
  inputValue,
  setInputValue,
  onSubmit,
  showData,
  searchValue,
  setShowData,
  city,
  weather,
  temperature,
  className,
  // ...rest
}) {
  // const [weather, setWeather] = useState(null);
  // const [temperature, setTemperature] = useState(null);
  // const [city, setCity] = useState(null);
  const dateValue = new Date()
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = dateValue.toLocaleDateString('fr', options)


  // useEffect(() => {
  //   const callRequest = async () => {
  //     const response = await meteoRequest(inputValue);

  //     // verifier response.status
  //     if (response.status === 200) {
  //       setTemperature(response.data.main.temp);
  //       setCity(response.data.name);
  //       setWeather(response.data.weather[0]);
  //       setShowData(true)
  //     }
  //   };
  //   callRequest();
  // }, [onSubmit]);

  return (
    <>
      {
        showData ?
          (
            <Paper
              elevation={3}
              className={classnames(
                'meteo',
                className,
                { [`meteo__${weather?.main}`]: !!weather },
              )}
              as="article"
            // {...rest}
            >
              <div className="meteo--icon">
                <img src={getIconUrl(weather?.icon)} alt={`${weather?.description}`} />
              </div>
              <div className="meteo--info">
                <div className='date'>{date}</div>
                <Typography
                  className="meteo--title"
                  as="h3"
                  sx={{ fontSize: '1.5rem' }}
                >
                  {city}
                </Typography>
                <Typography
                  as="p"
                  sx={{ fontSize: '1.2rem' }}
                >
                  {Math.round(temperature)}°
                </Typography>
                <Typography
                  as="p"
                  className="meteo--weather"
                >
                  {weather?.description}
                </Typography>
              </div>
            </Paper>
          )
          :

          (
            <p>Aucun résultat</p>
          )
      }
    </>
  );
}

Meteo.propTypes = {
  className: PropTypes.string,
  cityname: PropTypes.string.isRequired,
};
Meteo.defaultProps = {
  className: '',
};
export default React.memo(Meteo);