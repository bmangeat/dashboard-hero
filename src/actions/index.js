import axios from 'axios'

const API_HERO = 'https://superheroapi.com/api.php/10213784867090388/';
const API_WEATHER = 'api.openweathermap.org/data/2.5/weather?id=5128581&appid=57a5dad53fd98ea8812e586a2b18d67e';

export default {
    setHero: (object) => (state) => {
        return {...state, hero: object}
    },
    fetchHero: (id) => (state, actions) => {
        const request = axios.get(API_HERO + id);
        request.then(response => {
            actions.setHero(response.data)
        });
        return state
    }
}
