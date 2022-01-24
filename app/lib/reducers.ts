import { combineReducers } from 'redux';
import questions from '../screens/questions/questions.reducer';

export default function reducers() {
    return combineReducers({
        questions
    });
}