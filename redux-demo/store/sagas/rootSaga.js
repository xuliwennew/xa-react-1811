import {call,all,select, put, takeEvery, takeLatest} from 'redux-saga/effects'

//回调中ajax vuex takeEvery
function* addCallback(){
    let response = yield call(fetch,"http://localhost:3000/api/carts")
    const data = yield response.json()
    console.log("callback called")
    console.log(data)
    yield put({type:"INC",data:data})
}

function* watchAddSync(){
    //dispatch({type:"ADD"})
    console.log("saga拦击 ...")
    yield takeLatest("ADD",addCallback)
}

export default function* rootSaga(){
    yield all([
        watchAddSync()
    ])
}
