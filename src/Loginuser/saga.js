import {call, put, takeLatest} from 'redux-saga/effects'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './constants'
import {loginFailure, loginRequest, loginSuccess} from './actions'


//mock api call

const fetchUser = async () =>{
    const url = 'https://dummyjson.com/todos?limit=10'
    const responce = await fetch(url)

    if(!responce.ok) throw new Error("Network calls failed")

    const data = await responce.json()

    return data
}


// saga function

function* handleLogin(action){
    try{
        const user = yield(fetchUser, action.payload)
        yield put(loginSuccess(user))
    }

    catch (error){
        yield put(loginFailure(error.message))

    }

}

export default function* authSaga(){
    yield takeLatest(LOGIN_REQUEST,handleLogin)
}
