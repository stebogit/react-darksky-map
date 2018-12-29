import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DarkskyMap extends Component {
    constructor (props) {
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
        this.uom = this.uom.bind(this);
    }

    shouldComponentUpdate () {
        return false;
    }

    url () {
        let {
            lat, lng, zoom, units, fieldControl, timeControl, mapField, url, apiKey
        } = this.props;

        const field = this.availableFields[mapField];
        if (!field) throw new Error('Invalid mapField.');

        const domain = encodeURIComponent(url);

        url = `https://maps.darksky.net/@${field},${lat},${lng},${zoom}
            ?domain=${domain}
            &auth=${apiKey}
            &embed=true
            &fieldControl=${fieldControl.toString()}
            &timeControl=${timeControl.toString()}
            &defaultField=${field}`;

        let uom = this.uom(units);
        if (uom) url += `&defaultUnits=${uom}`;

        return url.replace(/\s/g, '');
    }

    uom (units) {
        switch (this.props.mapField) {
        case 'temp':
        case 'feelsLike':
        case 'dewPoint':
            return units === 'metric' ? '_c' : '_f';
        case 'precip':
            return units === 'metric' ? '_mmph' : '_inph';
        case 'wind':
        case 'gust':
            return units === 'metric' ? '_kmph' : '_mph';
        case 'pressure':
            return units === 'metric' ? '_hpa' : '_inhg';
        case 'ozone':
            return '_du';
        default:
            return '';
        }
    }

    render () {
        const {
            lat, lng, zoom, units, fieldControl, timeControl, mapField, onLoad, ...others
        } = this.props;

        return <iframe frameBorder="0" src={this.url()} onLoad={onLoad} {...others} />;
    }
}

DarkskyMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    mapField: PropTypes.string,
    timeControl: PropTypes.bool,
    fieldControl: PropTypes.bool,
    units: PropTypes.oneOf(['metric', 'imperial']),
    onLoad: PropTypes.func,
};

DarkskyMap.defaultProps = {
    zoom: 4,
    mapField: 'temp',
    timeControl: true,
    fieldControl: true,
    units: 'metric',
    width: '100%',
    height: '500px',
};

export default DarkskyMap;
