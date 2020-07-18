import { takeEvery,call,put} from 'redux-saga/effects';
import axios from 'axios';

export  function* rootSaga(){
    yield takeEvery("PEOPLE_READ_ACTION",HandlePeople);
    yield takeEvery("NEW_PERSON",addPeople);
}


function getCaller(url){
    return axios.get(url);
}

function doPost(url,data){
    return axios.post(url,data);
}


function* HandlePeople(){
    
    let response=yield call(getCaller,"http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people");
    console.log(response);
    yield put({type:'PEOPLE_ACTION',data:response.data});
 }

 function* addPeople(action){
     let person=action.data;
     let response = yield call(doPost,"http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people",person);
     console.log(response.data);
     yield HandlePeople();
 }