import { AnyAction } from "redux";
import {
    LOAD_QUESTIONS_SUCCESS,
    LOAD_QUESTIONS_ERROR,
} from './questions.actionTypes';

interface Question {
    question: string
}

interface QuestionState {
    questions: Array<Question>
}

const initialState = {
    questions: null
}

export default function questions(state = initialState, action: AnyAction) {
    console.log('action', action)
    switch(action.type) {
        case LOAD_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: action.payload,
            }
        case LOAD_QUESTIONS_ERROR:
            return {
                ...state,
                questions: []
            }
        default:
            return state;
    }
}