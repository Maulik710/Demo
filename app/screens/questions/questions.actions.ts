import database from '@react-native-firebase/database';
import {
    LOAD_QUESTIONS_SUCCESS,
    LOAD_QUESTIONS_ERROR,
} from './questions.actionTypes';

export function loadQuestions() {
    return dispatch => {
        database()
            .ref('/questions')
            .once('value')
            .then(snapshot => {
                if (snapshot.exists()) {
                    dispatch({
                        type: LOAD_QUESTIONS_SUCCESS,
                        payload: snapshot.val()
                    });
                } else {
                    dispatch({
                        type: LOAD_QUESTIONS_SUCCESS,
                        payload: []
                    });
                }
                
            })
            .catch(err => {
                dispatch({
                    type: LOAD_QUESTIONS_ERROR
                })
            });
    }
}