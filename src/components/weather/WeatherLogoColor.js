import {h} from 'hyperapp'

import Logo from './WeatherLogo'

export default (props) => {
    let color, nb
    if (props.weather === 'Clear') {
        color = 'st5'
        nb = 1
    } else if (props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze') {
        color = 'st6'
        nb = 2
    } else if (props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog') {
        color = 'st7'
        nb = 3
    } else if (props.weather === 'Rain') {
        color = 'st8'
        nb = 4
    } else {
        color = 'st9'
        nb = 5
    }
    return Logo(color, nb)
}