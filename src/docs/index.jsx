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
        />
    );
}

render(<Demo/>, document.getElementById("app"));
