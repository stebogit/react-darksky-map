import React from "react";
import {render} from "react-dom";
import DarkskyMap from "../../dist";
import "./styles.css";

function Demo() {
    const onload = () => console.log('Loaded!');
    return (
        <DarkskyMap
            lat={47.625963} lng={9.540260}
            zoom={2}
            height={window.innerHeight}
            id="darksky-map"
            className={'map'}
            timeControl={false}
            mapField="precip"
            onLoad={onload}
            url={window.location.href}
            apiKey="1527719406_d7fc33ad02f802febbb1fdba99657748"
        />
    );
}

render(<Demo/>, document.getElementById("app"));
