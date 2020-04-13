import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const styles = StyleSheet.create({
	container: {
    	flex: 1,
		marginTop: 20,
		backgroundColor: '#282c34',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 23,
		color: 'white',
		textAlign: 'center',
    },
    welcome: {
      textAlign: 'center'
	},
	h1: {
		margin: 10
	},
	h2: {
		margin: 10
	},
	answer: {
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#fff',
		paddingTop: 5,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 5,
		width: 610,
		textAlign: 'left',
		marginTop: 10,
		position: 'relative',
		fontSize: 22,
	},
	answerSelected: {
		color: '#4f4c4c',
		backgroundColor: '#c8ffbb',
	},
	answerHover: {
		color: '#4f4c4c',
		backgroundColor: '#c8ffbb',
	},
	answerFocus: {
	},
	resultsSpanCorrect: {
		color: '#c8ffbb',
	},
	resultsSpanFailed: {
		color: '#f27c7c',
	},
	error: {
		color: '#f27c7c',
	},
	letter: {
		color: '#4f4c4c',
		width: 30,
		position: 'absolute',
		left: 0,
		textAlign: 'center',
		height: 28,
		top: 0,
		padding: 5,
	},
	btn: {
		color: '#4f4c4c',
		backgroundColor: '#f4f4f4',
		paddingTop: 10,
		paddingRight: 50,
		paddingBottom: 10,
		paddingLeft: 50,
		fontSize: 18,
		marginTop: 20,
	},
	btnPprimary: {
		color: '#4f4c4c',
		backgroundColor: '#ffc107',
		fontWeight: 'bold',
	}

});

export default styles;
