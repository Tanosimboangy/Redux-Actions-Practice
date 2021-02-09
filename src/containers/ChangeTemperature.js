import {connect } from "react-redux"
import {currentTemp} from "../actions"
import ChangeTemperature from "../components/ChangeTemperature"

export default connect (null, {set: currentTemp}) (ChangeTemperature);
