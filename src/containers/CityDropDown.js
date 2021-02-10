import {connect} from 'react-redux';
import CityDropDown from '../components/CityDropDown';
import {setCurrentCity} from '../actions';
const mapDipsatchToState = {
    set: setCurrentCity
}
function mapStateToProps(state) {
    currentCity: state.currentCity
}
export default connect(mapStateToProps, mapDipsatchToState) (CityDropDown);