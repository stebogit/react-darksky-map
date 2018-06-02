<?php

var_dump(file_get_contents("https://darksky.net/map-embed/@precipitation_rate,39.000,-95.000,4.js?embed=true&timeControl=false&fieldControl=false&defaultField=precipitation_rate&defaultUnits=_mmph"));
die;

$url = 'https://darksky.net/map-embed/';
$links = [
    'temp' => '@temperature,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=temperature - defaultUnits=_f',
    'precip' => '@precipitation_rate,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=precipitation_rate - defaultUnits=_mmph',
    'feelsLike' => '@apparent_temperature,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=apparent_temperature - defaultUnits=_f',
    'cloudCover' => '@cloud_cover,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=cloud_cover',
    'precipRadar' => '@radar,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=radar',
    'wind' => '@wind_speed,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=wind_speed - defaultUnits=_mph',
    'gust' => '@wind_gust,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=wind_gust - defaultUnits=_mph',
    'dewPoint' => '@dew_point,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=dew_point - defaultUnits=_f',
    'uv' => '@uv_index,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=uv_index',
    'pressure' => '@sea_level_pressure,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=sea_level_pressure - defaultUnits=_hpa',
    'o3' => '@ozone,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=ozone - defaultUnits=_du',
    'emoji' => '@emoji,39.000,-95.000,4.js?embed=true - timeControl=true - fieldControl=true - defaultField=emoji',
];

foreach ($links as $measure => $link) {
    $res = file_get_contents($url . $link);
    $src = explode("https://maps.darksky.net/", $res)[1];
    $src = explode("'><", $src)[0];
    $src = explode(
        'embed=true - amp;timeControl=true - amp;fieldControl=true - amp;',
        $src
    )[1];

    // var_dump($src); //die;
    echo "$measure - $src<br>";
    // break;
}

/*
defaultField:

temp - @temperature - defaultUnits=_f
precip - @precipitation_rate - defaultUnits=_mmph
feelsLike - @apparent_temperature - defaultUnits=_f
wind - @wind_speed - defaultUnits=_mph
gust - @wind_gust - defaultUnits=_mph
dewPoint - @dew_point - defaultUnits=_f
pressure - @sea_level_pressure - defaultUnits=_hpa

uv - @uv_index
cloudCover - @cloud_cover
precipRadar - @radar
o3 - @ozone - defaultUnits=_du
emoji - @emoji
 */

// 'dewPoint - @dew_point,39.000,-95.000,4?domain="+encodeURIComponent(window.location.href)+" - auth=1527926255_64e5a6ec7e3a8494df50c5d2288e5348 -  -> defaultField=dew_point - defaultUnits=_f'