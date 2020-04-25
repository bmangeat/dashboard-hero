import { h } from 'hyperapp'

import City from './WeatherCity'

export default (props) => {
    if (props.weather === 'Clear') {
        return <p>La vie est belle à <City hero={props.hero} /> : aucun vilain à l'horizon !</p>
    } else if (props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze') {
        return <p>Les oiseaux chantent à <City hero={props.hero} /> et les vilains se cachent !</p>
    } else if(props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog') {
        return <p>Les vilains se font discrets à <City hero={props.hero} />...</p>
    } else if(props.weather === 'Rain') {
        return <p>Les vilains sont de sortie dans les rues de <City hero={props.hero} /> !</p>
    } else {
        return <p>Invasion de super-vilains à <City hero={props.hero} /> !</p>
    }
}