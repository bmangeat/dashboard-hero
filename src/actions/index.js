import axios from 'axios'
import Chart from 'chart.js'
import { TweenMax, TimelineMax, Linear, Elastic } from "gsap/all";

const API_HERO = 'https://superheroapi.com/api.php/10213784867090388/'                                                      // url SuperHero API with key : 10213784867090388
const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&appid=57a5dad53fd98ea8812e586a2b18d67e'      // url OpenWeatherMap with key : 57a5dad53fd98ea8812e586a2b18d67e and id city (NYC) : 5128581

export default {

    /**
     * @desc Allow to set the state with the correct value
     * @param object Object from API corresponding to the hero
     */
    setHero: (object) => (state, actions) => {
        return {
            ...state,
            hero: {
                id: parseInt(object.id),
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
        return {...state, weather: item}
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
        actions.fetchTodos(idHero)
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
                const {ctx, scale, config} = chart
                const {xCenter, yCenter, drawingArea: radius} = scale
                ctx.beginPath()
                ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2)
                ctx.fillStyle = config.options.chartArea.backgroundColor
                ctx.fill()
            }
        })
        const config = {
            type: 'radar',
            data: {
                labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
                datasets: [{
                    label: 'Powerstats',
                    lineTension: 0.1,
                    pointHoverBackgroundColor: '#f0f0f0',
                    pointHoverRadius: 5,
                    data: [0, 0, 0, 0, 0, 0]
                }]
            },
            options: {
                chartArea: {
                    backgroundColor: '#0e131a'
                },
                scale: {
                    gridLines: {
                        lineWidth: 1.5,
                        circular: true,
                        color: '#242c38'
                    },
                    angleLines: {
                        color: '#242c38',
                        lineWidth: 1.5
                    },
                    ticks: {
                        beginAtZero: true,
                        fontColor: '#f0f0f0',
                        fontFamily: '\'Open sans\', sans-serif',
                        fontSize: 10,
                        fontStyle: '300',
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        showLabelBackdrop: false
                    },
                    pointLabels: {
                        fontColor: '#f0f0f0',
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
                    duration: 2500
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
            0, 0, 0, 0, 0, 0
        ]
        dataCapacitiesChart.backgroundColor = color("#ffffff").alpha(0.5).rgbString()
        dataCapacitiesChart.borderColor = "#ffffff"
        dataCapacitiesChart.pointBackgroundColor = "#ffffff"
        dataCapacitiesChart.pointBackgroundColor = "#ffffff"
        state.charts.capacitiesChart.update(0)
        dataCapacitiesChart.data = [
            heroPowerstats.intelligence,
            heroPowerstats.strength,
            heroPowerstats.speed,
            heroPowerstats.durability,
            heroPowerstats.power,
            heroPowerstats.combat
        ]
        dataCapacitiesChart.backgroundColor = color(heroColor).alpha(0.5).rgbString()
        dataCapacitiesChart.borderColor = heroColor
        dataCapacitiesChart.pointBackgroundColor = heroColor
        dataCapacitiesChart.pointBackgroundColor = heroColor
        setTimeout(() => {
            state.charts.capacitiesChart.update(2500)
        }, 1500)
    },

    /**
     * @desc Display loader when hero is changing (put class on body) and freeze body until the end of animation
     */
    addLoader: () => {
        document.body.classList.remove('loaded')
        document.body.classList.add('fix-body')
        const loader = document.getElementById('page-loading');
        loader.style.display = 'block'

        setTimeout(() => {
            window.scroll(0, 0)
            document.body.classList.add('loaded')
            setTimeout(() => {
                document.body.classList.remove('fix-body')
                loader.style.display = 'none'
            }, 1000)
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
            case 'green':
                return '#34a853'
            case 'black':
                return '#221e1f'
            default:
                return colorToChange
        }
    },

    /**
     * @desc Set the state with the correct todo values
     * @param todos Data from the API corresponding to the todo list
     */
    setTodos: (todos) => (state) => {
        return { ...state, todoItems: todos }
    },

    /**
     * @desc Get the todos from API
     */
    fetchTodos: (idHero) => (state, actions) => {
        axios.get('https://agile-escarpment-40479.herokuapp.com/todos')
            .then((response) => {
                actions.setTodos(response.data.filter(elem => idHero === elem.userId).map(todo => ({
                    done: todo.completed,
                    text: todo.title,
                    id: todo.id,
                    createdAt: todo.createdAt
                })))
                actions.setRatioDone()
                actions.updateProgressBar()
            })
            .catch((err) => console.error('err', err))
    },

    /**
     * @desc Switch done value in todo item
     * @param id id of the todo item
     */
    toggleDone: (id) => (state, actions) => {
        const itemAtId = state.todoItems.find(item => item.id === id)
        if (itemAtId === undefined) {
            console.error(`Item id ${id} could not be found, this should not happen`)
            return
        }

        axios.put('https://agile-escarpment-40479.herokuapp.com/todos/' + id, {
            completed: !itemAtId.done,
            _id: id,
            title: itemAtId.text,
            userId: state.id,
            createdAt: itemAtId.createdAt,
            updatedAt: new Date().toISOString(),
            __v: 0,
            id: id
        })
            .then((response) => {
                console.log(response.status)
            })
            .catch((err) => console.error('err', err.response))

        actions.setTodos(state.todoItems.filter(item => item.id !== id).concat({ ...itemAtId, done: !itemAtId.done }))
        actions.setRatioDone()
        actions.updateProgressBar()
    },

    /**
     * @desc Update addItemInput value with input value
     */
    updateTodoInput: (event) => (state) => ({ ...state, addItemInput: event.target.value }),

    /**
     * @desc Add item in input to todo list + post in API, setTimeout to fetch uptaded API
     */
    addTodoItem: () => (state, actions) => {
        const input = state.addItemInput
        if (input.length === 0) {
            return state
        }

        const id = Math.random().toString(16).substring(2, 8)
        const date = new Date().toISOString()

        axios.post('https://agile-escarpment-40479.herokuapp.com/todos', {
            completed: false,
            title: input,
            userId: state.hero.id
        })
            .then((response) => {
                console.log(response)
                actions.fetchTodos(state.hero.id)
            })
            .catch((err) => console.error('err', err.response))

        return {
            ...state,
            addItemInput: ""
        }
    },

    /**
     * @desc Delete item in API + setTimeout to fetch updated API
     * @param id id of the todo item
     */
    deleteTodoItem: (id) => (state, actions) => {
        const itemAtId = state.todoItems.find(item => item.id === id)
        if (itemAtId === undefined) {
            console.error(`Item id ${id} could not be found, this should not happen`)
            return
        }

        axios.delete('https://agile-escarpment-40479.herokuapp.com/todos/' + id)
            .then((response) => {
                console.log(response.status)
                actions.fetchTodos(state.hero.id)
            })
            .catch((err) => console.error('err', err.response))

    },

    /**
     * @desc Set the ratio task done
     */
    setRatioDone: () => (state) => {
        return {
            ...state,
            ratioDone: state.todoItems.filter(item => item.done === true).length / state.todoItems.length
        }
    },

    /**
     * @desc Animate progress bar
     * @param element svg progress bar
     */
    progressBarAnimation: (element) => () => {
        const liquid = element.querySelectorAll('.liquid')
        TweenMax.set('svg', {
            visibility: 'visible'
        })
        const tl = new TimelineMax()
        tl.to(liquid, 0.9, {
            x: '-=200',
            ease: Linear.easeNone,
            stagger: {
                each: 0.5,
                repeat: -1
            }
        })
    },

    /**
     * @desc Update progress bar (with state.ratioDone)
     */
    updateProgressBar: () => (state) => {
        TweenMax.to(liquid, 1.3, {
            y: state.ratioDone * (-380) * 1.12,
            ease: Elastic.easeOut.config(1, 0.4)
        })
    }

}


