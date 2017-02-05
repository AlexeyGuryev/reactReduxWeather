import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import removeCity from '../actions/action_remove_city';

class CityWeather extends Component {
    constructor(props) {
        super(props);

        this.state = { city: props.city };
    }

    render() {

        const name = this.props.city.name;
        const temps = this.props.list.map(weather => weather.main.temp);
        const pressures = this.props.list.map(weather => weather.main.pressure);
        const humidities = this.props.list.map(weather => weather.main.humidity);
        const { lon, lat } = this.props.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
                <td>
                    <button onClick={() => this.props.removeCity(this.state.city)}>Удалить</button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(CityWeather);