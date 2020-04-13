import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HorizontalLine() {
    return (  
        <View style = {styles.lineStyle} />
    );
}
 
const styles = StyleSheet.create({
    lineStyle:{
        width: 200,
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    }
});