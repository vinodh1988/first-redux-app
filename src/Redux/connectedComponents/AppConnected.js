import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {messageAction} from '../actions/messageAction'
import App from '../../App'

/* we need to write two methods
  1. connecting redux state to component properties
  2. connecting redux action to component properties
*/

const mapStateToProperties =(state)=>{
    return {message: state.first.message}

}
const mapActionToProperties =(dispatch)=>{
    return bindActionCreators({changeMessage: messageAction},dispatch);
}

/* connect function has two parameters
   1. function which connects state to component props
   2. function which connects action to component props
*/
/* here AppConnected is connected component or we call it higher order component */

export const AppConnected=connect(mapStateToProperties,mapActionToProperties)(App)

// in the above code message is a property of App component 