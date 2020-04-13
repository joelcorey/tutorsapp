import React from 'react';

import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import Progress from './assets/components/progress';
import Question from './assets/components/question';
import HorizontalLine from './assets/components/horizontalLine';
import Answers from "./assets/components/answers";

import styles from './assets/css/appStyles';

import addQuestions from './assets/services/quizAdditionService/index';
import subQuestions from './assets/services/quizSubtractionService/index';

export default function App() {
	
	const question = addQuestions[0];
	
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
			<Answers answers={question.answers}/>
		
		
		</View>
	);
}