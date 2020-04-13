import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Question(props) {

    return (
        <Text style={styles.question}>
            What is {props.question}?
        </Text>
    );
}

const styles = StyleSheet.create({
    question: {
      fontSize: 30,
      padding: 10
    },
});