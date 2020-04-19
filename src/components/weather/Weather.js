import {h} from 'hyperapp'

const logo_lvl_0 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st20", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st21", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st21", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])
const logo_lvl_1 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st22", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st23", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st23", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])
const logo_lvl_2 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st24", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st25", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st25", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])
const logo_lvl_3 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st26", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st27", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st27", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])
const logo_lvl_4 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st28", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st29", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st29", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])
const logo_lvl_5 = h('svg', {version:"1.1", class:"logo", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 24.5 24.5", style:"enable-background:new 0 0 24.5 24.5;", width:"24.5", height:"24.5"}, [
    h('circle', {class:"st30", cx:"12.3", cy:"12.3", r:"10.5"}, []),
    h('circle', {class:"st31", cx:"12.3", cy:"17.6", r:"1.4"}, []),
    h('path', {class:"st31", d:"M12.3,14.6L12.3,14.6c-0.8,0-1.4-0.6-1.4-1.4V7c0-0.8,0.6-1.4,1.4-1.4h0c0.8,0,1.4,0.6,1.4,1.4v6.3C13.6,14,13,14.6,12.3,14.6z"}, [])
])

export default (props) =>

        h('section', {class: 'comp-weather'}, [
            h('div', {class: 'comp-header'}, ['Météo du crime']),
            h('div', {class: 'comp-body'}, [

                props.weather === 'Clear' ?
                h('div', {class: 'info-weather'}, [
                    h('div', {class: 'message'}, [
                        h('p', {}, ['La vie est belle à ' + props.hero.work.base + " : aucun vilain à l'horizon !"])
                    ]),
                    h('div', {class: 'illustration'}, [
                        h('svg', {version:"1.1", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 550 290", style:"enable-background:new 0 0 550 290;"}, [
                            h('g', {id:"Background"}, [
                                h('linearGradient', {id:"SVGID_1_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"290", x2:"275", y2:"-9.094947e-13"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"0.5106", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"0.6062", style:"stop-color:#FEFAFC"}, []),
                                    h('stop',  {offset:"0.7513", style:"stop-color:#FDECF5"}, []),
                                    h('stop',  {offset:"0.9271", style:"stop-color:#F9D3E6"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#F8C7DE"}, [])
                                ]),
                                h('rect', {class:"st0", width:"550", height:"290"}, [])
                            ]),
                            h('g', {id:"City"}, [
                                h('linearGradient', {id:"Plan3_1_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"199.5641", x2:"275", y2:"99.5761"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FBE2EF;stop-opacity:0.8"}, []),
                                    h('stop',  {offset:"0.4064", style:"stop-color:#FADCEB;stop-opacity:0.7187"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#FAD6E8;stop-opacity:0.6"}, [])
                                ]),
                                h('path', {id:"Plan3", class:"st1", d:"M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"}, []),
                                h('linearGradient', {id:"Plan2_1_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"263.9512", x2:"275", y2:"76.1937"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FBDBDB"}, []),
                                    h('stop',  {offset:"5.971424e-02", style:"stop-color:#FBDCE0"}, []),
                                    h('stop',  {offset:"0.2211", style:"stop-color:#FBDDE9"}, []),
                                    h('stop',  {offset:"0.3628", style:"stop-color:#FBDEEC"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#F3A3C7"}, [])
                                ]),
                                h('path', {id:"Plan2_2_", class:"st2", d:"M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"}, []),
                                h('linearGradient', {id:"Plan1_1_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"280.6814", x2:"275", y2:"98.0386"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#F8E6E7"}, []),
                                    h('stop',  {offset:"6.034722e-02", style:"stop-color:#F9DFDE"}, []),
                                    h('stop',  {offset:"0.2103", style:"stop-color:#F9CDCA"}, []),
                                    h('stop',  {offset:"0.2922", style:"stop-color:#F2C2C6"}, []),
                                    h('stop',  {offset:"0.5566", style:"stop-color:#DEA6B9"}, []),
                                    h('stop',  {offset:"0.7997", style:"stop-color:#D295B0"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#CD90AC"}, [])
                                ]),
                                h('path', {id:"Plan1", class:"st3", d:"M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"}, [])
                            ])
                        ])
                    ]),
                    h('div', {class: 'box-logo'}, [
                        logo_lvl_1,
                        logo_lvl_0,
                        logo_lvl_0,
                        logo_lvl_0,
                        logo_lvl_0
                    ])
                ]):

                props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze' ?
                h('div', {class: 'info-weather'}, [
                    h('div', {class: 'message'}, [
                        h('p', {}, ['Les oiseaux chantent à ' + props.hero.work.base + ' et les vilains se cachent !'])
                    ]),
                    h('div', {class: 'illustration'}, [
                        h('svg', {version:"1.1", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 550 290", style:"enable-background:new 0 0 550 290;"}, [
                            h('g', {id:"Background"}, [
                                h('linearGradient', {id:"SVGID_2_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"290", x2:"275", y2:"-9.094947e-13"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"0.1168", style:"stop-color:#F4FAFE"}, []),
                                    h('stop',  {offset:"0.3234", style:"stop-color:#D6EEFC"}, []),
                                    h('stop',  {offset:"0.5106", style:"stop-color:#B5E1F9"}, []),
                                    h('stop',  {offset:"0.5664", style:"stop-color:#ADDEF8"}, []),
                                    h('stop',  {offset:"0.6511", style:"stop-color:#95D5F6"}, []),
                                    h('stop',  {offset:"0.7543", style:"stop-color:#66C8F2"}, []),
                                    h('stop',  {offset:"0.872", style:"stop-color:#00B4EC"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#009FE3"}, [])
                                ]),
                                h('rect', {class:"st4", width:"550", height:"290"}, [])
                            ]),
                            h('g', {id:"City"}, [
                                h('linearGradient', {id:"Plan3_2_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"199.5641", x2:"275", y2:"99.5761"}, [
                                    h('stop',  {offset:"1.151781e-07", style:"stop-color:#B5E1F9;stop-opacity:0.8"}, []),
                                    h('stop',  {offset:"0.2361", style:"stop-color:#96D1F3;stop-opacity:0.7528"}, []),
                                    h('stop',  {offset:"0.5531", style:"stop-color:#6EC0EC;stop-opacity:0.6894"}, []),
                                    h('stop',  {offset:"0.8191", style:"stop-color:#4EB5E8;stop-opacity:0.6362"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#40B2E6;stop-opacity:0.6"}, [])
                                ]),
                                h('path', {id:"Plan3", class:"st5", d:"M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"}, []),
                                h('linearGradient', {id:"Plan2_2_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"263.9512", x2:"275", y2:"76.1937"}, [
                                    h('stop',  {offset:"1.201920e-03", style:"stop-color:#B5E1F9"}, []),
                                    h('stop',  {offset:"7.091332e-02", style:"stop-color:#91C8ED"}, []),
                                    h('stop',  {offset:"0.1502", style:"stop-color:#6CB2E2"}, []),
                                    h('stop',  {offset:"0.227", style:"stop-color:#4CA2DA"}, []),
                                    h('stop',  {offset:"0.2994", style:"stop-color:#3599D5"}, []),
                                    h('stop',  {offset:"0.3628", style:"stop-color:#2A96D4"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#1786C8"}, [])
                                ]),
                                h('path', {id:"Plan2_2_", class:"st6", d:"M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"}, []),
                                h('linearGradient', {id:"Plan1_2_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"280.6814", x2:"275", y2:"98.0386"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#40B2E6"}, []),
                                    h('stop',  {offset:"0.1219", style:"stop-color:#2697D4"}, []),
                                    h('stop',  {offset:"0.2103", style:"stop-color:#1786C8"}, []),
                                    h('stop',  {offset:"0.2736", style:"stop-color:#127EBF"}, []),
                                    h('stop',  {offset:"0.479", style:"stop-color:#0966A4"}, []),
                                    h('stop',  {offset:"0.6741", style:"stop-color:#065792"}, []),
                                    h('stop',  {offset:"0.8528", style:"stop-color:#054E88"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#034B85"}, [])
                                ]),
                                h('path', {id:"Plan1", class:"st7", d:"M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"}, [])
                            ])
                        ])
                    ]),
                    h('div', {class: 'box-logo'}, [
                            logo_lvl_2,
                            logo_lvl_2,
                            logo_lvl_0,
                            logo_lvl_0,
                            logo_lvl_0

                    ])
                ]):

                props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog' ?
                h('div', {class: 'info-weather'}, [
                    h('div', {class: 'message'}, [
                        h('p', {}, ['Les vilains se font discrets à ' + props.hero.work.base + '...'])
                    ]),
                    h('div', {class: 'illustration'}, [
                        h('svg', {version:"1.1", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 550 290", style:"enable-background:new 0 0 550 290;"}, [
                            h('g', {id:"Background"}, [
                                h('linearGradient', {id:"SVGID_3_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"290", x2:"275", y2:"-9.094947e-13"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"0.1078", style:"stop-color:#F6FAF4"}, []),
                                    h('stop',  {offset:"0.2992", style:"stop-color:#DFEDD5"}, []),
                                    h('stop',  {offset:"0.5106", style:"stop-color:#C0DCAD"}, []),
                                    h('stop',  {offset:"0.5717", style:"stop-color:#BBD9A7"}, []),
                                    h('stop',  {offset:"0.6646", style:"stop-color:#AFD395"}, []),
                                    h('stop',  {offset:"0.7776", style:"stop-color:#9BC977"}, []),
                                    h('stop',  {offset:"0.9053", style:"stop-color:#7BBB4E"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#5BB030"}, [])
                                ]),
                                h('rect', {class:"st8", width:"550", height:"290"}, [])
                            ]),
                            h('g', {id:"City"}, [
                                h('linearGradient', {id:"Plan3_3_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"199.5641", x2:"275", y2:"99.5761"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#C1DCAE;stop-opacity:0.8"}, []),
                                    h('stop',  {offset:"0.1744", style:"stop-color:#AED291;stop-opacity:0.7651"}, []),
                                    h('stop',  {offset:"0.4366", style:"stop-color:#94C56A;stop-opacity:0.7127"}, []),
                                    h('stop',  {offset:"0.6711", style:"stop-color:#7FBC4E;stop-opacity:0.6658"}, []),
                                    h('stop',  {offset:"0.8669", style:"stop-color:#70B73F;stop-opacity:0.6266"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#6AB539;stop-opacity:0.6"}, [])
                                ]),
                                h('path', {id:"Plan3", class:"st9", d:"M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"}, []),
                                h('linearGradient', {id:"Plan2_3_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"263.9512", x2:"275", y2:"76.1937"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#BEDBAD"}, []),
                                    h('stop',  {offset:"5.102821e-02", style:"stop-color:#AAD08F"}, []),
                                    h('stop',  {offset:"0.1189", style:"stop-color:#91C46B"}, []),
                                    h('stop',  {offset:"0.1855", style:"stop-color:#7BBB50"}, []),
                                    h('stop',  {offset:"0.2496", style:"stop-color:#69B53F"}, []),
                                    h('stop',  {offset:"0.3099", style:"stop-color:#5EB135"}, []),
                                    h('stop',  {offset:"0.3628", style:"stop-color:#5AB031"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#4EAE33"}, [])
                                ]),
                                h('path', {id:"Plan2_2_", class:"st10", d:"M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"}, []),
                                h('linearGradient', {id:"Plan1_3_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"280.6814", x2:"275", y2:"98.0386"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#95C233"}, []),
                                    h('stop',  {offset:"0.1069", style:"stop-color:#70B633"}, []),
                                    h('stop',  {offset:"0.2103", style:"stop-color:#4AAD33"}, []),
                                    h('stop',  {offset:"0.2757", style:"stop-color:#43A734"}, []),
                                    h('stop',  {offset:"0.5463", style:"stop-color:#299436"}, []),
                                    h('stop',  {offset:"0.795", style:"stop-color:#168936"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#0D8537"}, [])
                                ]),
                                h('path', {id:"Plan1", class:"st11", d:"M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"}, [])
                            ])
                        ])
                    ]),
                    h('div', {class: 'box-logo'}, [
                        logo_lvl_3,
                        logo_lvl_3,
                        logo_lvl_3,
                        logo_lvl_0,
                        logo_lvl_0
                    ])
                ]):

                props.weather === 'Rain' ?
                h('div', {class: 'info-weather'}, [
                    h('div', {class: 'message'}, [
                        h('p', {}, ['Les vilains sont de sortie dans les rues de ' + props.hero.work.base + ' !'])
                    ]),
                    h('div', {class: 'illustration'}, [
                        h('svg', {version:"1.1", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 550 290", style:"enable-background:new 0 0 550 290;"}, [
                            h('g', {id:"Background"}, [
                                h('linearGradient', {id:"SVGID_4_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"290", x2:"275", y2:"-9.094947e-13"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"0.111", style:"stop-color:#FFFEF4"}, []),
                                    h('stop',  {offset:"0.308", style:"stop-color:#FFFBD5"}, []),
                                    h('stop',  {offset:"0.5106", style:"stop-color:#FFF7B0"}, []),
                                    h('stop',  {offset:"0.5717", style:"stop-color:#FFF4A8"}, []),
                                    h('stop',  {offset:"0.6646", style:"stop-color:#FFEB93"}, []),
                                    h('stop',  {offset:"0.7776", style:"stop-color:#FFDD6E"}, []),
                                    h('stop',  {offset:"0.9053", style:"stop-color:#FEC935"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#FBB800"}, [])
                                ]),
                                h('rect', {class:"st12", width:"550", height:"290"}, [])
                            ]),
                            h('g', {id:"City"}, [
                                h('linearGradient', {id:"Plan3_4_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"199.5641", x2:"275", y2:"99.5761"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFF7B0;stop-opacity:0.8"}, []),
                                    h('stop',  {offset:"0.1744", style:"stop-color:#FFEC8E;stop-opacity:0.7651"}, []),
                                    h('stop',  {offset:"0.4366", style:"stop-color:#FFDC5D;stop-opacity:0.7127"}, []),
                                    h('stop',  {offset:"0.6711", style:"stop-color:#FFD034;stop-opacity:0.6658"}, []),
                                    h('stop',  {offset:"0.8669", style:"stop-color:#FECA0D;stop-opacity:0.6266"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#FEC700;stop-opacity:0.6"}, [])
                                ]),
                                h('path', {id:"Plan3", class:"st13", d:"M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"}, []),
                                h('linearGradient', {id:"Plan2_4_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"263.9512", x2:"275", y2:"76.1937"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#FFF7AF"}, []),
                                    h('stop',  {offset:"5.102818e-02", style:"stop-color:#FFEF8D"}, []),
                                    h('stop',  {offset:"0.1189", style:"stop-color:#FFE660"}, []),
                                    h('stop',  {offset:"0.1855", style:"stop-color:#FFDF35"}, []),
                                    h('stop',  {offset:"0.2496", style:"stop-color:#FFDA00"}, []),
                                    h('stop',  {offset:"0.3099", style:"stop-color:#FFD700"}, []),
                                    h('stop',  {offset:"0.3628", style:"stop-color:#FFD600"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#FDC500"}, [])
                                ]),
                                h('path', {id:"Plan2_2_", class:"st14", d:"M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"}, []),
                                h('linearGradient', {id:"Plan1_4_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"280.6814", x2:"275", y2:"98.0386"}, [
                                    h('stop',  {offset:"1.331947e-07", style:"stop-color:#FFEE00"}, []),
                                    h('stop',  {offset:"0.1248", style:"stop-color:#FFD100"}, []),
                                    h('stop',  {offset:"0.2103", style:"stop-color:#FCBF00"}, []),
                                    h('stop',  {offset:"0.2494", style:"stop-color:#FABC00"}, []),
                                    h('stop',  {offset:"0.5298", style:"stop-color:#EFA400"}, []),
                                    h('stop',  {offset:"0.7876", style:"stop-color:#E79600"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#E59100"}, [])
                                ]),
                                h('path', {id:"Plan1", class:"st15", d:"M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"}, [])
                            ])
                        ])
                    ]),
                    h('div', {class: 'box-logo'}, [
                        logo_lvl_4,
                        logo_lvl_4,
                        logo_lvl_4,
                        logo_lvl_4,
                        logo_lvl_0
                    ])
                ]):

                h('div', {class: 'info-weather'}, [
                    h('div', {class: 'message'}, [
                        h('p', {}, ['Invasion de super-vilains à ' + props.hero.work.base + ' !'])
                    ]),
                    h('div', {class: 'illustration'}, [
                        h('svg', {version:"1.1", xmlns:"http://www.w3.org/2000/svg", x:"0px", y:"0px", viewBox:"0 0 550 290", style:"enable-background:new 0 0 550 290;"}, [
                            h('g', {id:"Background"}, [
                                h('linearGradient', {id:"SVGID_5_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"290", x2:"275", y2:"-9.094947e-13"}, [
                                    h('stop',  {offset:"1.385225e-07", style:"stop-color:#FFFFFF"}, []),
                                    h('stop',  {offset:"4.868253e-02", style:"stop-color:#FCF4F4"}, []),
                                    h('stop',  {offset:"0.1352", style:"stop-color:#F3D5D8"}, []),
                                    h('stop',  {offset:"0.2496", style:"stop-color:#E5A4A9"}, []),
                                    h('stop',  {offset:"0.3856", style:"stop-color:#D2616A"}, []),
                                    h('stop',  {offset:"0.5106", style:"stop-color:#BF1D2A"}, []),
                                    h('stop',  {offset:"0.583", style:"stop-color:#B91D28"}, []),
                                    h('stop',  {offset:"0.6931", style:"stop-color:#A91C24"}, []),
                                    h('stop',  {offset:"0.827", style:"stop-color:#8F1A1D"}, []),
                                    h('stop',  {offset:"0.9785", style:"stop-color:#6C1512"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#671410"}, [])
                                ]),
                                h('rect', {class:"st16", width:"550", height:"290"}, [])
                            ]),
                            h('g', {id:"City"}, [
                                h('linearGradient', {id:"Plan3_5_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"199.5641", x2:"275", y2:"99.5761"}, [
                                    h('stop',  {offset:"1.151781e-07", style:"stop-color:#F6B5B5;stop-opacity:0.8"}, []),
                                    h('stop',  {offset:"0.1268", style:"stop-color:#F3A29E;stop-opacity:0.7746"}, []),
                                    h('stop',  {offset:"0.4042", style:"stop-color:#EE7B73;stop-opacity:0.7192"}, []),
                                    h('stop',  {offset:"0.6522", style:"stop-color:#E95D56;stop-opacity:0.6696"}, []),
                                    h('stop',  {offset:"0.8592", style:"stop-color:#E64846;stop-opacity:0.6282"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#E54140;stop-opacity:0.6"}, [])
                                ]),
                                h('path', {id:"Plan3", class:"st17", d:"M0,223.3h265h9.6H550v-94.4h-4.2v-17.4l-18-15.3v32.7h-13.1v14h-33.9v-25.7H455v19h-19.6v19.7h-29.2v-14.7h-7.4v-13.1h-18.2v13.9H377v-8.3h-6.2v-15.5l-8.2-3.2l-8.2,3.2v5.2h-2.8V121h-2.7v2.5h-2.2v-1h-1.9v1H343v-17h-3.3v-1.2h2.3v-0.8h-14.3v0.8h2.3v1.2h-3.3v17v10.3h-3.6v-21.4h-1.6v-2.5h-5v2.5h-2.9v-2.5h-5v2.5h-1.6v17.2h-7.4v-2.3h-3.3v2.3H295v5.1h-7.9V127l-14.4-4.9v22.6H265v3h-5.3v-7.7h-2v-5.8h-2.9v-3.1H252v3.1h-1.4V128h-5.8v6.3h-24.5v5.8h-10.7v7.7h-3.9v-10v-5.1v-17.1h-1.1v-2.1h1.7v-0.8h-15.7v0.8h1.7v2.1h-1.1v17.1h-4.9V125h-9.7v11h-5.9v-17.1h-5.4v-5.4h-4.4v5.4h-1.2v-1.7H158v1.7h-1.9v28.9h-8.7v8.2h-20.4V138H100v-7.1c0-2.6,0-5.2,0-7.8c-4.9,2.6-9.8,5.1-14.6,7.7c0,0.1,0,0.1,0,0.2H70.8v-2.7h-2v2.7h-3.1v7.1h-1.9c0-4.5,0-8.9,0-13.4c-3.1-2-6.2-4-9.4-6c-3.2,2-6.4,4-9.5,6v11.2H41V158h-2.6v-27.1H21.4V111h-2.1v-2.9h-1.5v-2.3H12v2.3h-1.5v2.9H8.3v19.9c-2.8,0-5.6,0-8.3,0C0,161.7,0,192.5,0,223.3z M199.8,115.6H197v-2.1h2.8V115.6z M338.3,106.4h-6.9v-1.2h6.9V106.4z"}, []),
                                h('linearGradient', {id:"Plan2_5_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"263.9512", x2:"275", y2:"76.1937"}, [
                                    h('stop',  {offset:"1.201920e-03", style:"stop-color:#F6B5B5"}, []),
                                    h('stop',  {offset:"2.735320e-03", style:"stop-color:#F6B4B4"}, []),
                                    h('stop',  {offset:"6.813229e-02", style:"stop-color:#EB8C84"}, []),
                                    h('stop',  {offset:"0.1328", style:"stop-color:#E36B5F"}, []),
                                    h('stop',  {offset:"0.1957", style:"stop-color:#DC4F45"}, []),
                                    h('stop',  {offset:"0.256", style:"stop-color:#D73B35"}, []),
                                    h('stop',  {offset:"0.3129", style:"stop-color:#D4302C"}, []),
                                    h('stop',  {offset:"0.3628", style:"stop-color:#D32B2A"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#C61B19"}, [])
                                ]),
                                h('path', {id:"Plan2_2_", class:"st18", d:"M0,271.8c95.6,0,191.3,0,286.9,0v1.7H550v-78.9h-19.3v14.6h-4V173h-19.3v36.3h-15V150h-46.8v36.7h-10v-52.7h-0.9v-12h-1.4v-4.5h-0.9v-3.5h-1.5V112h-1.7v-1.5c0,0-1.6-3.5-1.6-12.8c0,0,0-2.8-1.4-3.3V82.1h-0.3v-7.7h-0.4v7.7h-0.3v12.3c-1.4,0.5-1.4,3.3-1.4,3.3c0,9.3-1.6,12.8-1.6,12.8v1.5h-1.7v1.9H419v3.5h-0.9v4.5h-1.4v12h-0.9v52.7h-6.6V161h-11.5v25.7h-2v22.6h-9.7v-16.7H372V173h-4.3v-14.2h-3.4v-14.1h-0.5v14.1h-6.6V173H344v-34.9h-13.7v54.4h-15.2v10.3h-28.2v6.7h-19.2V203h-26.3v-11.8h-16.9v-20.5h-1v-7.5h-0.7v-6h-1.5v-3.9H210v3.9h-1.5v6h-0.7v7.5h-1v20.5h-11.4v-17.2h-7.1v-13.3h-6.8v13.3h-6.6v35.6h-15.6v-22.7h-16.9v22.7h-3.1v-46.2h-3.1v-5.3H99.5v5.3h-2.6v27.8h-4.5v-10.3H76.5v10.3H64.3v-16.9h-8.7v-12.6h-1v12.6h-3.1v16.9h-7.1v5.1H26.6V179c-8.9,0-17.7,0-26.6,0C0,210,0,240.9,0,271.8z"}, []),
                                h('linearGradient', {id:"Plan1_5_", gradientUnits:"userSpaceOnUse", x1:"275", y1:"280.6814", x2:"275", y2:"98.0386"}, [
                                    h('stop',  {offset:"0", style:"stop-color:#E54140"}, []),
                                    h('stop',  {offset:"0.1272", style:"stop-color:#D12925"}, []),
                                    h('stop',  {offset:"0.2103", style:"stop-color:#C61B19"}, []),
                                    h('stop',  {offset:"0.2346", style:"stop-color:#C31B19"}, []),
                                    h('stop',  {offset:"0.4511", style:"stop-color:#A71A16"}, []),
                                    h('stop',  {offset:"0.6566", style:"stop-color:#931913"}, []),
                                    h('stop',  {offset:"0.8449", style:"stop-color:#881811"}, []),
                                    h('stop',  {offset:"1", style:"stop-color:#841811"}, [])
                                ]),
                                h('path', {id:"Plan1", class:"st19", d:"M0,290c183.3,0,366.7,0,550,0v-16.5v-29.2h-11.1v-71.1l-19.3,8.6v75.8h-26.3v-11.1h-22.6v8h-25v10.4h-6.5V238h-2.5v-26h-2.7l-3.1-6.4h-14.5l-3.1,6.4h-2.7v26H408v26.9h-7.8v-52.6l-5-20.7h-18v62.9h-14.5l-5.7-119.5h-2.4v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4h-0.3v-0.8h0.3c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4h-0.3h-1.3h-4.3l-0.1-4.3h0.5c0.2,0,0.3-0.1,0.3-0.3c0-0.2-0.1-0.3-0.3-0.3H349l-0.1-8.3h0.5c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.5l-0.1-8.3h0c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.1l-0.1-8.3h0.2c0.2,0,0.3-0.1,0.3-0.3s-0.1-0.3-0.3-0.3h-0.2l0-2.7c0.2-0.1,0.3-0.3,0.3-0.5c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7c0,0.2,0.1,0.4,0.3,0.5l0,2.7h-0.2c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.1l-0.1,8.3h0c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0l-0.1,8.3h-0.5c-0.2,0-0.3,0.1-0.3,0.3s0.1,0.3,0.3,0.3h0.5l-0.1,8.3H347c-0.2,0-0.3,0.1-0.3,0.3c0,0.2,0.1,0.3,0.3,0.3h0.5l-0.1,4.3h-4.3h-1.3h-0.3c-0.2,0-0.4,0.2-0.4,0.4c0,0.2,0.2,0.4,0.4,0.4h0.3v0.8h-0.3c-0.2,0-0.4,0.2-0.4,0.4s0.2,0.4,0.4,0.4h0.3v0.8h-2.4l-5.1,106.7h-15.5v-44.9h-2v-6.1h-6.4v-17.5h-1v17.5h-7.3v6.1h-2v59.5h-9.2v-17.7h-12.3v16.9h-15.3v-10.2h-19.8c0-17.1,0-34.2,0-51.3c-1-5.9-2.1-11.9-3.1-17.8c-1.6-3-3.3-6-4.9-9c-0.4,0-0.7,0-1,0v-15h-0.8v15c-1.4,0-0.8,0-3.8,0c-1.6,3-3.3,6-4.9,9c-1,6-2.1,12-3.1,18c0,22.9,0,45.7,0,68.6h-11.5v-14.3h-32.1c0-28.9,0-57.8,0-86.7c-8.1-10.8-16.2-21.5-24.2-32.3v108h-25.8c0-4.5,0-9.1,0-13.6l-13.5-8.1v-34.2h-2.4v-12H99.2v12h-8.5v70.9h-4.2v-11.8h-9.2v11.8H63.9v-29.1h-2.4v-3.5h-6.6v3.5h-3.9v-3.5h-7.3v3.5h-2.2v29.1h-3.1V210v-5.5v-4.7h-8v4.7h-5.9v11.4H8.1v36.6c-2.7,0-5.4,0-8.1,0C0,264.9,0,277.5,0,290z M347.4,134.9h-4.3v-0.8h4.3L347.4,134.9z M347.5,133.3h-4.3v-0.8h4.3L347.5,133.3z M353.4,134.9h-4.3l0-0.8h4.3V134.9z M353.4,133.3h-4.3l0-0.8h4.3V133.3z"}, [])
                            ])
                        ])
                    ]),
                    h('div', {class: 'box-logo'}, [
                        logo_lvl_5,
                        logo_lvl_5,
                        logo_lvl_5,
                        logo_lvl_5,
                        logo_lvl_5
                    ])
                ])
            ])
        ])
