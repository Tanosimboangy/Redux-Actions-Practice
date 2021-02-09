import {connect } from "react-redux"
import {setCurrentTemperature} from "../actions"
import Thermostat from "../components/Thermostat"

export default connect ((state) => ({temp: state.currentTemp}), {}) (Thermostat);