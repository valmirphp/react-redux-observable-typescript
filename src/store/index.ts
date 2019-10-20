import {ActionType} from "typesafe-actions";
import {applyMiddleware, compose, createStore} from "redux";
import {createEpicMiddleware} from "redux-observable";


/**
 * Redux store setup
 */
import * as actions from "./actions";
import reducers, {RootState} from "./reducers";
import epics from "./epics";

type Action = ActionType<typeof actions>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const composeEnhancers = (
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

function configureStore(initialState?: RootState) {
    // configure middlewares
    const middlewares = [
        epicMiddleware,
    ];
    // compose enhancers
    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );
    // create store
    return createStore(
        reducers,
        initialState,
        enhancer
    );
}

export const store = configureStore();

epicMiddleware.run(epics);
