import axios from 'axios'
import Chart from 'chart.js'

const API_HERO = 'https://superheroapi.com/api.php/10213784867090388/'                                                      // url SuperHero API with key : 10213784867090388
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&appid=57a5dad53fd98ea8812e586a2b18d67e'      // url OpenWeatherMap with key : 57a5dad53fd98ea8812e586a2b18d67e
// and id city (NYC) : 5128581
export default {

    /**
     * @desc Allow to set the state with the correct value
     * @param object Object from API corresponding to the hero
     */
    setHero: (object) => (state, actions) => {
        return {
            ...state,
            hero: {
                name: object.name,
                powerstats: object.powerstats,
                biography: {
                    fullName: object.biography['full-name'],
                    alterEgos: object.biography['alter-egos'],
                    aliases: object.biography.aliases.slice(0, 2).join(', '),
                    placeOfBirth: object.biography['place-of-birth'],
                    firstAppearance: object.biography['first-appearance'],
                    publisher: object.biography.publisher,
                    alignment: object.biography.alignment
                },
                appearance: {
                    gender: object.appearance.gender,
                    race: object.appearance.race,
                    height: object.appearance.height.filter(elem => elem.includes('cm')),
                    weight: object.appearance.weight.filter(elem => elem.includes('kg')),
                    eyeColor: actions.modifyColor(object.appearance['eye-color'].toLowerCase()),
                    hairColor: actions.modifyColor(object.appearance['hair-color'].toLowerCase())
                },
                work: object.work,
                connections: {
                    groupAffiliation: object.connections['group-affiliation'].replace(/\([^()]*\)/g, '').split(',').slice(0, 2).join(',').replace(/ ,/g, ',').split(';').slice(0, 1),
                    relatives: object.connections.relatives.replace(/\([^()]*\)/g, '').split(',').slice(0, 2).join(',').replace(/ ,/g, ',')
                },
                image: object.image
            }
        }
    },

    /**
     * @desc Get datas from API 'SuperHero API'
     */
    fetchHero: (id) => (state, actions) => {
        axios.get(API_HERO + id)
            .then(response => {
                actions.setHero(response.data)
                actions.updateCapacitiesChart()
            })
            .catch(error => {
                console.error(error)
            })
        return state
    },

    /**
     * @desc Allow to set the state with the correct value
     * @param item String from API corresponding to the main weather
     */
    setWeather: (item) => (state) => {
        return { ...state, weather: item }
    },

    /**
     * @desc Get datas from API 'OpenWeatherMap'
     */
    fetchWeather: () => (state, actions) => {
        axios.get(API_WEATHER)
            .then(response => {
                actions.setWeather(response.data.weather[0].main)
            })
            .catch(error => {
                console.error(error)
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

    /**
     * @desc Update state according to selected hero from header
     */
    selectHero: () => (state, actions) => {
        actions.addLoader()
        const sel = document.getElementById('list-hero')
        const opt = sel.options[sel.selectedIndex]
        switch (opt.text) {
        case 'Batman':
            actions.getData(70)
            state.color = '#ffb700'
            break
        case 'Superman':
            actions.getData(644)
            state.color = '#5b98ff'
            break
        case 'Joker':
            actions.getData(370)
            state.color = '#34a853'
            break
        case 'Catwoman':
            actions.getData(165)
            state.color = '#bb54ff'
            break
        case 'Jack-Jack':
            actions.getData(351)
            state.color = '#ea4335'
            break
        case 'Harley Quinn':
            actions.getData(309)
            state.color = '#eb64aa'
            break
        }
    },

    /**
     * @desc Create the capacities chart and store it the state. Use Chart.js
     * @param element Canvas in the DOM
     */
    createCapacitiesChart: (element) => (state) => {
        Chart.pluginService.register({
            beforeDraw: chart => {
                const { ctx, scale, config } = chart
                const { xCenter, yCenter, drawingArea: radius } = scale
                ctx.beginPath()
                ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2)
                ctx.fillStyle = config.options.chartArea.backgroundColor
                ctx.fill()
            }
        })
        const config = {
            type: 'radar',
            data: {
                labels: ['Intelligence', 'Force', 'Vitesse', 'Résistance', 'Puissance', 'Combat'],
                datasets: [{
                    label: 'Capacitées',
                    lineTension: 0.1,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverRadius: 5,
                    data: [0, 0, 0, 0, 0, 0]
                }]
            },
            options: {
                chartArea: {
                    backgroundColor: '#0e131aff'
                },
                scale: {
                    gridLines: {
                        lineWidth: 1.5,
                        circular: true,
                        color: '#242c38ff'
                    },
                    angleLines: {
                        color: '#242c38ff',
                        lineWidth: 1.5
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#ffffff',
                        fontFamily: '\'Open sans\', sans-serif',
                        fontSize: 10,
                        fontStyle: '300',
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        showLabelBackdrop: false
                    },
                    pointLabels: {
                        fontColor: '#ffffff',
                        fontFamily: '\'Open sans\', sans-serif',
                        fontStyle: '300',
                        fontSize: 14
                    }
                },
                legend: {
                    display: false
                },
                tooltips: {
                    bodyFontSize: 14,
                    bodyFontFamily: '\'Open sans\', sans-serif',
                    cornerRadius: 2,
                    displayColors: false,
                    callbacks: {
                        title: function () {
                            return ''
                        },
                        label: function (tooltipItem, data) {
                            return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                        }
                    }
                },
                animation: {
                    duration: 1500
                },
                hover: {
                    animationDuration: 0
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
        state.charts.capacitiesChart = new Chart(element.getContext('2d'), config)
    },

    /**
     * @desc Update the capacities chart. Use Chart.js
     */
    updateCapacitiesChart: () => (state) => {
        const dataCapacitiesChart = state.charts.capacitiesChart.data.datasets[0]
        const heroPowerstats = state.hero.powerstats
        const heroColor = state.color
        const color = Chart.helpers.color
        dataCapacitiesChart.data = [
            heroPowerstats.intelligence,
            heroPowerstats.strength,
            heroPowerstats.speed,
            heroPowerstats.durability,
            heroPowerstats.power,
            heroPowerstats.combat
        ]
        dataCapacitiesChart.backgroundColor = color(heroColor).alpha(0.5).rgbString(),
        dataCapacitiesChart.borderColor = heroColor,
        dataCapacitiesChart.pointBackgroundColor = heroColor,
        dataCapacitiesChart.pointBackgroundColor = heroColor,
        state.charts.capacitiesChart.update()
    },

    /**
     * @desc Display loader when hero is changing (put class on body) and freeze body until the end of animation
     */
    addLoader: () => {
        document.body.classList.remove('loaded')
        document.body.classList.add('fix-body')
        setTimeout(() => {
            document.body.classList.add('loaded')
            setTimeout(() => document.body.classList.remove('fix-body'), 1000)
        }, 1500)
    },

    /**
     * @desc Allow to convert string color to custom hexa
     * @param colorToChange Color (string) from API
     * @returns {string|*} String corresponding to custom color, or return default API's result
     */
    modifyColor: (colorToChange) => {
        switch (colorToChange) {
        case 'blue':
            return '#5b98fc'
        case 'blond':
            return '#ffffcc'
        default:
            return colorToChange
        }
    }

}


