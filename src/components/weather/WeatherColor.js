import { h } from 'hyperapp'

export default (props) => {
    if (props.weather === 'Clear') {
        return <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275" y1="290" x2="275" y2="-9.094947e-13">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="0.2737" style="stop-color:#FFFFFF"/>
                <stop  offset="0.4587" style="stop-color:#FEFAFC"/>
                <stop  offset="0.6619" style="stop-color:#FDECF5"/>
                <stop  offset="1" style="stop-color:#F3A3C7"/>
            </linearGradient>
            <linearGradient id="Plan3_1_" gradientUnits="userSpaceOnUse" x1="275" y1="199.5641" x2="275" y2="99.5761">
                <stop  offset="0" style="stop-color:#FBE2EF;stop-opacity:0.8"/>
                <stop  offset="0.4064" style="stop-color:#FADCEB;stop-opacity:0.7187"/>
                <stop  offset="1" style="stop-color:#FAD6E8;stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="Plan2_1_" gradientUnits="userSpaceOnUse" x1="275" y1="263.9512" x2="275" y2="76.1937">
                <stop  offset="0" style="stop-color:#FBDBDB"/>
                <stop  offset="5.971424e-02" style="stop-color:#FBDCE0"/>
                <stop  offset="0.2211" style="stop-color:#FBDDE9"/>
                <stop  offset="0.3628" style="stop-color:#FBDEEC"/>
                <stop  offset="1" style="stop-color:#F3A3C7"/>
            </linearGradient>
            <linearGradient id="Plan1_1_" gradientUnits="userSpaceOnUse" x1="275" y1="280.6814" x2="275" y2="98.0386">
                <stop  offset="0" style="stop-color:#F8E6E7"/>
                <stop  offset="6.034722e-02" style="stop-color:#F9DFDE"/>
                <stop  offset="0.2103" style="stop-color:#F9CDCA"/>
                <stop  offset="0.2922" style="stop-color:#F2C2C6"/>
                <stop  offset="0.5566" style="stop-color:#DEA6B9"/>
                <stop  offset="0.7997" style="stop-color:#D295B0"/>
                <stop  offset="1" style="stop-color:#CD90AC"/>
            </linearGradient>
        </defs>
    } else if (props.weather === 'Clouds' || props.weather === 'Dust' || props.weather === 'Haze') {
        return <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275" y1="290" x2="275" y2="-9.094947e-13">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="0.1168" style="stop-color:#F4FAFE"/>
                <stop  offset="0.3234" style="stop-color:#D6EEFC"/>
                <stop  offset="0.5106" style="stop-color:#B5E1F9"/>
                <stop  offset="0.5664" style="stop-color:#ADDEF8"/>
                <stop  offset="0.6511" style="stop-color:#95D5F6"/>
                <stop  offset="0.7543" style="stop-color:#66C8F2"/>
                <stop  offset="0.872" style="stop-color:#00B4EC"/>
                <stop  offset="1" style="stop-color:#009FE3"/>
            </linearGradient>
            <linearGradient id="Plan3_1_" gradientUnits="userSpaceOnUse" x1="275" y1="199.5641" x2="275" y2="99.5761">
                <stop  offset="1.151781e-07" style="stop-color:#B5E1F9;stop-opacity:0.8"/>
                <stop  offset="0.2361" style="stop-color:#96D1F3;stop-opacity:0.7528"/>
                <stop  offset="0.5531" style="stop-color:#6EC0EC;stop-opacity:0.6894"/>
                <stop  offset="0.8191" style="stop-color:#4EB5E8;stop-opacity:0.6362"/>
                <stop  offset="1" style="stop-color:#40B2E6;stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="Plan2_1_" gradientUnits="userSpaceOnUse" x1="275" y1="263.9512" x2="275" y2="76.1937">
                <stop  offset="1.201920e-03" style="stop-color:#B5E1F9"/>
                <stop  offset="7.091332e-02" style="stop-color:#91C8ED"/>
                <stop  offset="0.1502" style="stop-color:#6CB2E2"/>
                <stop  offset="0.227" style="stop-color:#4CA2DA"/>
                <stop  offset="0.2994" style="stop-color:#3599D5"/>
                <stop  offset="0.3628" style="stop-color:#2A96D4"/>
                <stop  offset="1" style="stop-color:#1786C8"/>
            </linearGradient>
            <linearGradient id="Plan1_1_" gradientUnits="userSpaceOnUse" x1="275" y1="280.6814" x2="275" y2="98.0386">
                <stop  offset="0" style="stop-color:#40B2E6"/>
                <stop  offset="0.1219" style="stop-color:#2697D4"/>
                <stop  offset="0.2103" style="stop-color:#1786C8"/>
                <stop  offset="0.2736" style="stop-color:#127EBF"/>
                <stop  offset="0.479" style="stop-color:#0966A4"/>
                <stop  offset="0.6741" style="stop-color:#065792"/>
                <stop  offset="0.8528" style="stop-color:#054E88"/>
                <stop  offset="1" style="stop-color:#034B85"/>
            </linearGradient>
        </defs>
    } else if (props.weather === 'Mist' || props.weather === 'Drizzle' || props.weather === 'Fog') {
        return <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275" y1="290" x2="275" y2="-9.094947e-13">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="0.1078" style="stop-color:#F6FAF4"/>
                <stop  offset="0.2992" style="stop-color:#DFEDD5"/>
                <stop  offset="0.5106" style="stop-color:#C0DCAD"/>
                <stop  offset="0.5717" style="stop-color:#BBD9A7"/>
                <stop  offset="0.6646" style="stop-color:#AFD395"/>
                <stop  offset="0.7776" style="stop-color:#9BC977"/>
                <stop  offset="0.9053" style="stop-color:#7BBB4E"/>
                <stop  offset="1" style="stop-color:#5BB030"/>
            </linearGradient>
            <linearGradient id="Plan3_1_" gradientUnits="userSpaceOnUse" x1="275" y1="199.5641" x2="275" y2="99.5761">
                <stop  offset="0" style="stop-color:#C1DCAE;stop-opacity:0.8"/>
                <stop  offset="0.1744" style="stop-color:#AED291;stop-opacity:0.7651"/>
                <stop  offset="0.4366" style="stop-color:#94C56A;stop-opacity:0.7127"/>
                <stop  offset="0.6711" style="stop-color:#7FBC4E;stop-opacity:0.6658"/>
                <stop  offset="0.8669" style="stop-color:#70B73F;stop-opacity:0.6266"/>
                <stop  offset="1" style="stop-color:#6AB539;stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="Plan2_1_" gradientUnits="userSpaceOnUse" x1="275" y1="263.9512" x2="275" y2="76.1937">
                <stop  offset="0" style="stop-color:#BEDBAD"/>
                <stop  offset="5.102821e-02" style="stop-color:#AAD08F"/>
                <stop  offset="0.1189" style="stop-color:#91C46B"/>
                <stop  offset="0.1855" style="stop-color:#7BBB50"/>
                <stop  offset="0.2496" style="stop-color:#69B53F"/>
                <stop  offset="0.3099" style="stop-color:#5EB135"/>
                <stop  offset="0.3628" style="stop-color:#5AB031"/>
                <stop  offset="1" style="stop-color:#4EAE33"/>
            </linearGradient>
            <linearGradient id="Plan1_1_" gradientUnits="userSpaceOnUse" x1="275" y1="280.6814" x2="275" y2="98.0386">
                <stop  offset="0" style="stop-color:#95C233"/>
                <stop  offset="0.1069" style="stop-color:#70B633"/>
                <stop  offset="0.2103" style="stop-color:#4AAD33"/>
                <stop  offset="0.2757" style="stop-color:#43A734"/>
                <stop  offset="0.5463" style="stop-color:#299436"/>
                <stop  offset="0.795" style="stop-color:#168936"/>
                <stop  offset="1" style="stop-color:#0D8537"/>
            </linearGradient>
        </defs>
    } else if (props.weather === 'Rain') {
        return <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275" y1="290" x2="275" y2="-9.094947e-13">
                <stop  offset="0" style="stop-color:#FFFFFF"/>
                <stop  offset="0.111" style="stop-color:#FFFEF4"/>
                <stop  offset="0.308" style="stop-color:#FFFBD5"/>
                <stop  offset="0.5106" style="stop-color:#FFF7B0"/>
                <stop  offset="0.5717" style="stop-color:#FFF4A8"/>
                <stop  offset="0.6646" style="stop-color:#FFEB93"/>
                <stop  offset="0.7776" style="stop-color:#FFDD6E"/>
                <stop  offset="0.9053" style="stop-color:#FEC935"/>
                <stop  offset="1" style="stop-color:#FBB800"/>
            </linearGradient>
            <linearGradient id="Plan3_1_" gradientUnits="userSpaceOnUse" x1="275" y1="199.5641" x2="275" y2="99.5761">
                <stop  offset="0" style="stop-color:#FFF7B0;stop-opacity:0.8"/>
                <stop  offset="0.1744" style="stop-color:#FFEC8E;stop-opacity:0.7651"/>
                <stop  offset="0.4366" style="stop-color:#FFDC5D;stop-opacity:0.7127"/>
                <stop  offset="0.6711" style="stop-color:#FFD034;stop-opacity:0.6658"/>
                <stop  offset="0.8669" style="stop-color:#FECA0D;stop-opacity:0.6266"/>
                <stop  offset="1" style="stop-color:#FEC700;stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="Plan2_1_" gradientUnits="userSpaceOnUse" x1="275" y1="263.9512" x2="275" y2="76.1937">
                <stop  offset="0" style="stop-color:#FFF7AF"/>
                <stop  offset="5.102818e-02" style="stop-color:#FFEF8D"/>
                <stop  offset="0.1189" style="stop-color:#FFE660"/>
                <stop  offset="0.1855" style="stop-color:#FFDF35"/>
                <stop  offset="0.2496" style="stop-color:#FFDA00"/>
                <stop  offset="0.3099" style="stop-color:#FFD700"/>
                <stop  offset="0.3628" style="stop-color:#FFD600"/>
                <stop  offset="1" style="stop-color:#FDC500"/>
            </linearGradient>
            <linearGradient id="Plan1_1_" gradientUnits="userSpaceOnUse" x1="275" y1="280.6814" x2="275" y2="98.0386">
                <stop  offset="1.331947e-07" style="stop-color:#FFEE00"/>
                <stop  offset="0.1248" style="stop-color:#FFD100"/>
                <stop  offset="0.2103" style="stop-color:#FCBF00"/>
                <stop  offset="0.2494" style="stop-color:#FABC00"/>
                <stop  offset="0.5298" style="stop-color:#EFA400"/>
                <stop  offset="0.7876" style="stop-color:#E79600"/>
                <stop  offset="1" style="stop-color:#E59100"/>
            </linearGradient>
        </defs>
    } else {
        return <defs>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275" y1="290" x2="275" y2="-9.094947e-13">
                <stop  offset="1.385225e-07" style="stop-color:#FFFFFF"/>
                <stop  offset="4.868253e-02" style="stop-color:#FCF4F4"/>
                <stop  offset="0.1352" style="stop-color:#F3D5D8"/>
                <stop  offset="0.2496" style="stop-color:#E5A4A9"/>
                <stop  offset="0.3856" style="stop-color:#D2616A"/>
                <stop  offset="0.5106" style="stop-color:#BF1D2A"/>
                <stop  offset="0.583" style="stop-color:#B91D28"/>
                <stop  offset="0.6931" style="stop-color:#A91C24"/>
                <stop  offset="0.827" style="stop-color:#8F1A1D"/>
                <stop  offset="0.9785" style="stop-color:#6C1512"/>
                <stop  offset="1" style="stop-color:#671410"/>
            </linearGradient>
            <linearGradient id="Plan3_1_" gradientUnits="userSpaceOnUse" x1="275" y1="199.5641" x2="275" y2="99.5761">
                <stop  offset="1.151781e-07" style="stop-color:#F6B5B5;stop-opacity:0.8"/>
                <stop  offset="0.1268" style="stop-color:#F3A29E;stop-opacity:0.7746"/>
                <stop  offset="0.4042" style="stop-color:#EE7B73;stop-opacity:0.7192"/>
                <stop  offset="0.6522" style="stop-color:#E95D56;stop-opacity:0.6696"/>
                <stop  offset="0.8592" style="stop-color:#E64846;stop-opacity:0.6282"/>
                <stop  offset="1" style="stop-color:#E54140;stop-opacity:0.6"/>
            </linearGradient>
            <linearGradient id="Plan2_1_" gradientUnits="userSpaceOnUse" x1="275" y1="263.9512" x2="275" y2="76.1937">
                <stop  offset="1.201920e-03" style="stop-color:#F6B5B5"/>
                <stop  offset="2.735320e-03" style="stop-color:#F6B4B4"/>
                <stop  offset="6.813229e-02" style="stop-color:#EB8C84"/>
                <stop  offset="0.1328" style="stop-color:#E36B5F"/>
                <stop  offset="0.1957" style="stop-color:#DC4F45"/>
                <stop  offset="0.256" style="stop-color:#D73B35"/>
                <stop  offset="0.3129" style="stop-color:#D4302C"/>
                <stop  offset="0.3628" style="stop-color:#D32B2A"/>
                <stop  offset="1" style="stop-color:#C61B19"/>
            </linearGradient>
            <linearGradient id="Plan1_1_" gradientUnits="userSpaceOnUse" x1="275" y1="280.6814" x2="275" y2="98.0386">
                <stop  offset="0" style="stop-color:#E54140"/>
                <stop  offset="0.1272" style="stop-color:#D12925"/>
                <stop  offset="0.2103" style="stop-color:#C61B19"/>
                <stop  offset="0.2346" style="stop-color:#C31B19"/>
                <stop  offset="0.4511" style="stop-color:#A71A16"/>
                <stop  offset="0.6566" style="stop-color:#931913"/>
                <stop  offset="0.8449" style="stop-color:#881811"/>
                <stop  offset="1" style="stop-color:#841811"/>
            </linearGradient>
        </defs>
    }
}
