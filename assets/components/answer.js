import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import styles from '../css/appStyles';

export default function Answer(props) {
    console.log(props)
    return (  
        <View style={styles.answer}>
            <Button
                title={props.answer} 
            />
        </View>
    );
}