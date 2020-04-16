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
        return {
            ...state,
            hero: {
                name: object.name,
                powerstats : object.powerstats,
                biography :{
                    fullName: object.biography['full-name'],
                    alterEgos: object.biography['alter-egos'],
                    aliases: object.biography.aliases.slice(0,2).join(', '),
                    placeOfBirth: object.biography['place-of-birth'],
                    firstAppearance: object.biography['first-appearance'],
                    publisher: object.biography.publisher,
                    alignment: object.biography.alignment
                },
                appearance : {
                    gender: object.appearance.gender,
                    race: object.appearance.race,
                    height: object.appearance.height.filter(elem => elem.includes('cm')),
                    weight: object.appearance.weight.filter(elem => elem.includes('kg')),
                    eyeColor: object.appearance['eye-color'],
                    hairColor: object.appearance['hair-color']
                },
                work : object.work,
                connections : {
                    groupAffiliation: object.connections['group-affiliation'].replace(/\([^()]*\)/g,'').split(',').slice(0,2).join(',').replace(/ \,/g, ',').split(';').slice(0,1),
                    relatives: object.connections.relatives.replace(/\([^()]*\)/g,'').split(',').slice(0,2).join(',').replace(/ \,/g, ',')
                },
                image : object.image
            }
        }
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
        let sel = document.getElementById('list-hero')
        let opt = sel.options[sel.selectedIndex]
        switch (opt.text) {
            case 'Batman':
                actions.getData(70)
                break
            case 'Superman':
                actions.getData(644)
                break
            case 'Joker':
                actions.getData(370)
                break
            case 'Catwoman':
                actions.getData(165)
                break
            case 'Jack-Jack':
                actions.getData(351)
                break
            case 'Harley Quinn':
                actions.getData(309)
                break
        }
    }
}


