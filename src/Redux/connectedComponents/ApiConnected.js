import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addNewPerson} from '../actions/peopleAction'
import Api from '../../Components/Api'


const mapStateToProps= (state)=>{
    return {people:state.peopledata.people}
}

const mapActionToProps = (dispatch) =>{
    return bindActionCreators({storePerson: addNewPerson},dispatch)
}

export const ApiConnected = connect(mapStateToProps,mapActionToProps)(Api)