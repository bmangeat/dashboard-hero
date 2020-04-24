import {h} from 'hyperapp'

import Message from './WeatherMessage'
import Gradient from './WeatherColor'
import Logo from './WeatherLogoColor'

export default (props) =>

    <section class="comp comp-2 comp-weather col-md-4 col-sm-12 col-xd-12">
        <div class="comp-header">Météo du crime</div>
        <div class="comp-body">
            <div class="info-weather">
                <div class="message">
                    {Message({
                        weather: props.weather,
                        hero: props.hero
                    })}
                </div>
                <div class="illustration">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 550 290" style="enable-background:new 0 0 550 290;">
                        {Gradient({weather: props.weather})}
                        <g id="Background">
                            <rect class="st0" width="550" height="290"/>
                        </g>
                        <g id="City">
                            <path id="Plan3" class="st1" d="M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7
                                h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3
                                v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295
                                v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1
                                v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9
                                v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9
                                c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9
                                H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"/>
                            <path id="Plan2_2_" class="st2" d="M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8
                                v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7
                                h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5
                                v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203
                                h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6
                                h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9
                                h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"/>
                            <path id="Plan1" class="st3" d="M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25
                                v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8
                                h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3
                                h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0
                                c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7
                                c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3
                                s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3
                                h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4
                                c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4
                                v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8
                                c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6
                                h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12
                                H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7
                                h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8
                                h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"/>
                        </g>
                    </svg>
                </div>
                <div class="logo">
                    {Logo({weather: props.weather})}
                </div>
            </div>
        </div>
    </section>
