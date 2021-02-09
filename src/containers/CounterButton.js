import { connect } from "react-redux"
import { increase, decrease } from "../actions/index"
import CounterButton from "../components/CounterButton"

const mapDispatchToProps = {
    increase: increase,
    decrease: decrease,
}

export default connect(null, mapDispatchToProps) (CounterButton) 