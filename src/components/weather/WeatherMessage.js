import { h } from 'hyperapp'

import City from './WeatherCity'

export default (props) => {
    if (props.weather === 'Clear') {
        return <p>Life is good in <City hero={props.hero} /> : no villains on the horizon !</p>
    } else if (props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze') {
        return <p>Birds sing in <City hero={props.hero} /> nd the villains hide !</p>
    } else if(props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog') {
        return <p>Villains are discreet in <City hero={props.hero} />...</p>
    } else if(props.weather === 'Rain') {
        return <p>The villains are out on the streets of <City hero={props.hero} /> !</p>
    } else {
        return <p>Invasion of super villains in <City hero={props.hero} /> !</p>
    }
}
