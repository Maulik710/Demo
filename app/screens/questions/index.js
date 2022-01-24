import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { loadQuestions } from './questions.actions';

const Questions = () => {
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);

    console.log(questions);

    useEffect(() => {
        dispatch(loadQuestions());
    }, [])
  
    return (
        <View style={{ flex: 1 }}>
            <Text>Questions</Text>
        </View>
    );
};

export default Questions;