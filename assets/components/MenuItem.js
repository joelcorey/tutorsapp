import React from 'react';
import { Button, View } from 'react-native';

import styles from '../css/app-styles';

export default function MenuItem(props) {
    // console.log(props)
    return (  
        <View style={styles.answer}>
            <Button
                title={props.answer} 
                onPress={(e) => props.handleMenuClick(e, props.answer)}
            />
        </View>
    );
}