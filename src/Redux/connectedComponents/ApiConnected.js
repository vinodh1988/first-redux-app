import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addPerson} from '../actions/peopleAction'
import Api from '../../Components/Api'


const mapStateToProps= (state)=>{
    return {people:state.peopledata.people}
}

const mapActionToProps = (dispatch) =>{
    return bindActionCreators({storePerson:addPerson},dispatch)
}

export const ApiConnected = connect(mapStateToProps,mapActionToProps)(Api)