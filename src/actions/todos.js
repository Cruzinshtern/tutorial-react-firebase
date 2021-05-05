import firebase from 'firebase/app';
import {store} from '../index'
const firestore = firebase.firestore();


export const getTodos = () => {
    try {
        // let data;
        // data = firestore.collection('todos').get().then((querySnapShot) => {
        //     querySnapShot.forEach((doc) => console.log(doc.data()))
        // })
        // console.log(data)
        return ({type: "GET_ALL_TODOS", payload: data})
    } catch (e) {
        console.log(e.message)
    }
}