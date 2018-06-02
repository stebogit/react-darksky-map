import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DarkskyMap extends Component {
    constructor(props) {
        super(props);
        this.availableFields = {
            temp: 'temperature',
            precip: 'precipitation_rate',
            precipRadar: 'radar',
            feelsLike: 'apparent_temperature',
            cloudCover: 'cloud_cover',
            wind: 'wind_speed',
            gust: 'wind_gust',
            dewPoint: 'dew_point',
            uvIndex: 'uv_index',
            pressure: 'sea_level_pressure',
            ozone: 'ozone',
            emoji: 'emoji',
        };

        this.url = this.url.bind(this);
    }

    // componentDidMount () {
    //     fetch(filename).then((resp) => resp.text()).then(function (data) {
    //         temp = data;
    //     });
    // }


    url() {
        const {
            lat, lng, zoom, units, fieldControl, timeControl, mapField,
        } = this.props;
        const field = this.availableFields[mapField];
        let url = `https://maps.darksky.net/@${field},${lat},${lng},${zoom}?domain="+encodeURIComponent(window.location.href)+"&auth=1527719406_d7fc33ad02f802febbb1fdba99657748&amp;embed=true&amp;defaultField=${field}&amp;fieldControl=${fieldControl.toString()}&amp;timeControl=${timeControl.toString()}`;

        // if (fieldControl) {
        //     url += `&fieldControl=${fieldControl.toString()}`;
        // }
        // if (timeControl) {
        //     url += `&timeControl=${timeControl.toString()}`;
        // }

        let uom = '';
        switch (this.props.mapField) {
            case 'temp':
                uom = units === 'metric' ? '_c' : '_f';
                break;
            case 'precip':
                uom = units === 'metric' ? '_mmph' : '_inph';
                break;
            case 'feelsLike':
                uom = units === 'metric' ? '_c' : '_f';
                break;
            case 'dewPoint':
                uom = units === 'metric' ? '_c' : '_f';
                break;
            case 'wind':
                uom = units === 'metric' ? '_kmph' : '_mph';
                break;
            case 'gust':
                uom = units === 'metric' ? '_kmph' : '_mph';
                break;
            case 'pressure':
                uom = units === 'metric' ? '_hpa' : '_inhg';
                break;
            case 'ozone':
                uom = '_du';
                break;
            default:
                uom = '';
        }
        if (uom !== '') {
            url += `&defaultUnits=${uom}`;
        }
        console.log(url);
        return url;
    }

    render() {
        const {
            lat, lng, zoom, units, fieldControl, timeControl, mapField, style, width, height, ...others
        } = this.props;

        return (
            <iframe
                ref="iframe"
                {...others}
                src={this.url()}
                frameBorder={'0'}
                width={width}
                height={height}
                style={style}
            />
        )
    }

    // componentDidMount() {
    //     let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    //     iframe.addEventListener('load', this.props.onLoad);
    // }

    // shouldComponentUpdate() {
    //     return false;
    // }

    // componentWillUnmount() {
    //     let iframe = ReactDOM.findDOMNode(this.refs.iframe)
    //     iframe.removeEventListener('load', this.props.onLoad);
    // }
}

DarkskyMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    mapField: PropTypes.string,
    timeControl: PropTypes.bool,
    fieldControl: PropTypes.bool,
    units: PropTypes.oneOf(['metric', 'imperial']),
    // onLoad: PropTypes.func,
};

DarkskyMap.defaultProps = {
    zoom: 7,
    mapField: 'temp',
    timeControl: false,
    fieldControl: false,
    units: 'metric',
    width: '100%',
    height: '100%',
};

export default DarkskyMap;
