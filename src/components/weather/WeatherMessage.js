import { h } from 'hyperapp'

import City from './WeatherCity'

export default (props) =>

    props.weather === 'Clear' ?
        <p>La vie est belle à {City({hero: props.hero})} : aucun vilain à l'horizon !</p>
        :
        props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze' ?
            <p>Les oiseaux chantent à {City({hero: props.hero})} et les vilains se cachent !</p>
            :
            props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog' ?
                <p>Les vilains se font discrets à {City({hero: props.hero})}...</p>
                :
                props.weather === 'Rain' ?
                    <p>Les vilains sont de sortie dans les rues de {City({hero: props.hero})} !</p>
                    :
                    <p>Invasion de super-vilains à {City({hero: props.hero})} !</p>
