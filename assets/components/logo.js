import React from 'react';
import { Image } from 'react-native';

import styles from '../css/app-styles';

export default function Logo(props) {
    return (  
        <Image 
            source={require('../img/logo.png')} 
            style={{
                alignSelf: 'center',
                height: 150,
                width: 150,
                borderWidth: 1,
                borderRadius: 75
            }}
            resizeMode='contain'
        />
    );
}