import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Progress from './assets/components/progress';
import Menu from './assets/components/Menu';
import Question from './assets/components/question';
import HorizontalLine from './assets/components/horizontalLine';
import Answers from "./assets/components/answers";

import styles from './assets/css/app-styles';

import AddQuestionsService from './assets/services/add-questions-service';
import SubQuestionsService from './assets/services/sub-questions-service';

export default function App() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [applicationState, setApplicationState] = useState('menu');
	const [question, setQuestion] = useState({});

	const handleQuestionClick = (e, answer) => {
		
		if (answer == question.correct) {
			setCurrentScore(currentScore + 1);
		}

		if (currentQuestion + 1 < 10) {
			setCurrentQuestion(currentQuestion + 1)
		}
		
	}

	const handleMenuClick = (e, selected) => {

		if (selected == 'Addition') {
			console.log(selected)
			setApplicationState('add');
			setQuestion(AddQuestionsService[currentQuestion]);
		}

		if (selected == 'Subtraction') {
			setApplicationState('sub');
			setQuestion(SubQuestionsService[currentQuestion]);			
		}
		
	}

	if (applicationState == 'menu') {
		return (
			<View style={styles.container}>
				<HorizontalLine />
				<Menu handleMenuClick={handleMenuClick} />
			</View>
		)
	} 
	else 
	{
		return (
		
			<View style={styles.container}>
	
				<Image 
					source={require('./assets/logo.png')} 
					style={{width: 400, height: 200}}
				/>
				{(() => {
					if (applicationState == 'menu') {
						console.log('hi');
					}
				})}
				{/* <Text>Please select a category that you want to be quizzed on below.</Text> */}
				<View>{currentScore}</View>
				<Progress total="10" current={currentQuestion + 1} />
	
				<Question question={question.question} />
				<HorizontalLine />
				<Answers 
					answers={question.answers}
					// currentAnswer={currentAnswer}
					correct={question.correct}
					handleQuestionClick={handleQuestionClick}
				/>
			
			</View>
		);
	}
	
}