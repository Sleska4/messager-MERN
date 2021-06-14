import {createState} from 'redux'

const state = {
    test: 0
}

const reducer = (state=state, action) => {
    switch(action.type) {
        case "TEST":
            return {...state, test: 5}
        default:
            return state
    }
}

const reduser = createState