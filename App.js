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
	//const [currentAnswer, setCurrentAnswer] = useState('');
	const [currentScore, setCurrentScore] = useState(0);
	const question = AddQuestionsService[currentQuestion];
	
	const handleClick = (e, answer) => {
		
		if (answer == question.correct) {
			setCurrentScore(currentScore + 1);
		}

		setCurrentQuestion(currentQuestion + 1)
		
	}

	return (
		<View style={styles.container}>

			<Image 
				source={require('./assets/logo.png')} 
				style={{width: 400, height: 200}}
			/>

			{/* <Text>Please select a category that you want to be quizzed on below.</Text> */}
			<View>{currentScore}</View>
			<Progress total="10" current="3" />

			<Question question={question.question} />
			<HorizontalLine />
			<Answers 
				answers={question.answers}
				// currentAnswer={currentAnswer}
				correct={question.correct}
				handleClick={handleClick}
			/>
		
		</View>
	);
}