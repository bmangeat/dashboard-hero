import axios from 'axios'

const API_HERO = 'https://superheroapi.com/api.php/10213784867090388/'                                                      // url superheroapi with key : 10213784867090388
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&appid=57a5dad53fd98ea8812e586a2b18d67e'      // url openweathermap with key : 57a5dad53fd98ea8812e586a2b18d67e
                                                                                                                            //                    and idcity (NYC) : 5128581
export default {

    /**
     * @desc Allow to set the state with the correct value
     * @param object Object from API corresponding to the hero
     */
    setHero: (object) => (state) => {
        return {...state, hero: object}
    },

    /**
     * @desc Get datas from API 'superheroapi'
     */
    fetchHero: (id) => (state, actions) => {
        const request = axios.get(API_HERO + id)
        request.then(response => {
            actions.setHero(response.data)
        });
        return state
    },

    /**
     * @desc Allow to set the state with the correct value
     * @param item String from API corresponding to the main weather
     */
    setWeather: (item) => (state) =>{
        return {...state, weather: item}
    },

    /**
     * @desc Get datas from API 'openweathermap'
     */
    fetchWeather: () => (state, actions) => {
        const request = axios.get(API_WEATHER)
        request.then(response => {
            actions.setWeather(response.data.weather[0].main)
        })
        return state
    },

    /**
     * @desc Allow to setup state files. Call functions which call API in order to get data
     * @param idHero Corresponding to one hero from API : get all datas
     */
    getData: (idHero) => (state, actions) => {
        actions.fetchWeather()
        actions.fetchHero(idHero)
    },

    // TODO : We have to define heros
    /**
     * @desc Update state according to selected hero from header
     */
    selectHero: () => (state, actions) => {
        let sel = document.getElementById('list')
        let opt = sel.options[sel.selectedIndex]
        switch (opt.text) {
            case 'Batman':
                actions.getData(69)
                break
            case 'Superman':
                actions.getData(644)
                break
        }
    }
}


