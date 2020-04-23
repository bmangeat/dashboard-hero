import { h } from 'hyperapp'

export default (props) =>
    h('svg', { xmlns:"http://www.w3.org/2000/svg", xlink:"http://www.w3.org/1999/xlink", viewBox:"350 110 100 400", oncreate: () => { props.animation }}, [
        h('defs', {}, [
            h('linearGradient', { id:"liquidGrad", x1:"557", y1:"150", x2:"557", y2:"546", gradientUnits:"userSpaceOnUse"}, [
                h('stop', { offset:"0.2", 'stop-color':props.color }),
                h('stop', { offset:"1", 'stop-color':"#B3B2B1" })
            ]),
            h('rect', { id:"tube", x:"357", y:"150", width:"86", height:"400", rx:"43", ry:"43" }),
            h('clipPath', { id:"liquidMask" }, [
                h('use', {href:"#tube", class:"liquidMask"})
            ]),

            h('clipPath', { id:"tubeMask" }, [
                h('use', {href:"#tube", class:"liquidMask"})
            ]),
                
            h('path', { id:"liquid", d:"M757,552v490H357V552c50,0,50,20,100,20s50-20,100-20,50,20,100,20S707,552,757,552Z" }),
            h('mask', { id:"gradMask" }, [
                h('use', { href:"#liquid", class:"liquid", x:"0", fill:"#FFB700" }),
                h('use', { href:"#liquid", class:"liquid", x:"0", fill:"#EEE", opacity:"0.7" })
            ])   

        ]),

        h('g', { class:"whole", transform:"translate(0, -40)" }, [
            h('use', { href:"#tube", class:"tubeBg", fill:"#C8D9D3", opacity:"0.61" }),
            
            h('g', { class:"dragger", transform:"translate(-6, 0)" }, [
                h('circle', { cx:"294", cy:"540", r:"36", fill:"#3A3335"}),
                h('path', { class:"dragTip", d:"M315.5,556.76,299.24,540.5l16.26-16.26,36.26,16.26Z", fill:"#3A3335" }),
                h('text', { class:"label", x:"294", y:"551" }, props.ratioDone/props.totalItems*100),
            ]),
            
            
            h('g', { mask:"url(#gradMask)" }, [
                h('use', { href:"#tube", fill:"url(#liquidGrad)" })
            ]),
            h('line', { class:"tubeShine", x1:"371", y1:"200", x2:"371", y2:"443", fill:"none", stroke:"#FFF", 'stroke-linecap':"round", 'stroke-miterlimit':"10", 'stroke-width':"8", opacity:"0.21", 'stroke-dasharray':"153 30", 'stroke-dashoffset':"-20" }),

            h('g', { class:"measurements", fill:"none", stroke:"#FCEFD6", 'stroke-width':"3", 'stroke-linecap':"round", opacity:"1"}, [
                h('line', { x1:"358", y1:"196", x2:"370", y2:"196" }),
                h('line', { x1:"358", y1:"234", x2:"370", y2:"234" }),
                h('line', { x1:"358", y1:"273", x2:"370", y2:"273" }),
                h('line', { x1:"358", y1:"311", x2:"370", y2:"311" }),
                h('line', { x1:"358", y1:"350", x2:"370", y2:"350" }),
                h('line', { x1:"358", y1:"388", x2:"370", y2:"388" }),
                h('line', { x1:"358", y1:"426", x2:"370", y2:"426" }),
                h('line', { x1:"358", y1:"465", x2:"370", y2:"465" }),
                h('line', { x1:"358", y1:"503", x2:"370", y2:"503" })
            ]),
            
        ])

    ])
