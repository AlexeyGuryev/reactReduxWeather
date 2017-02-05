import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityWeather from '../containers/city_weather';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <CityWeather
                key={cityData.city.name}
                city={cityData.city}
                list={cityData.list}
            />
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Температура (C)</th>
                        <th>Давление (hPa)</th>
                        <th>Влажность (%)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(cityData => this.renderWeather(cityData))}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);