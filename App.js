import React, { useState } from 'react';

import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Progress from './assets/components/progress';
import Question from './assets/components/question';
import HorizontalLine from './assets/components/horizontalLine';
import Answers from "./assets/components/answers";

import styles from './assets/css/app-styles';

import AddQuestionsService from './assets/services/add-questions-service';
import SubQuestionsService from './assets/services/sub-questions-service';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentAnswer, setCurrentAnswer] = useState('');
	const question = AddQuestionsService[currentQuestion];
	
	const handleClick = (e, answer) => {
		//console.log('question.correct: ' + question.correct)
		//console.log(answer)
		setCurrentAnswer(answer);
		// console.log('e: ' + e)

		if (currentAnswer == question.correct) {
			console.log('correct');
			console.log('question.correct: ' + question.correct);
			console.log('answer: ' + answer)
		}
	}

	return (
		<View style={styles.container}>

			<Image 
				source={require('./assets/logo.png')} 
				style={{width: 400, height: 200}}
			/>

			{/* <Text>Please select a category that you want to be quizzed on below.</Text> */}
			
			<Progress total="10" current="3" />

			<Question question={question.question} />
			<HorizontalLine />
			<Answers 
				answers={question.answers}
				currentAnswer={currentAnswer}
				correct={question.correct}
				handleClick={handleClick}
			/>
		
		
		</View>
	);
}