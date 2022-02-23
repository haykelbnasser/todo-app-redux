import {
    ADD_TASK,
    DELETE_TASK,
    CHECK_TASK,
    EDIT_TASK
} from "../constants/ActionTypes";

const initialState = [];
const reducertask = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter((e) => e.id !== action.payload);
        case CHECK_TASK:
            return state.map((e) => e.id === action.payload ? { ...e, isDone: !e.isDone } : e);
        case EDIT_TASK:
            return [state.map((e) => e.id === action.payload.id ? { ...e, descption: action.payload.descption } : e)];
        default:
            return state;

    }


};
export default reducertask;