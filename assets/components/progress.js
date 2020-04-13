import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Progress(props) {

    return (
        <Text style={styles.progress}>
            Question {props.current} of {props.total}
        </Text>
    );
}

const styles = StyleSheet.create({
    progress: {
      fontSize: 20,
      padding: 10
    },
});