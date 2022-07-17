import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

function saveToLocalStorage(store: any) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedStore =  window.localStorage.getItem('store');
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
