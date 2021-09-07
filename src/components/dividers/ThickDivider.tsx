import React from 'react';
import { View } from 'react-native';

export default function ThickDivider() {
    return (
        <View
            style={{
                borderBottomColor: '#efefef',
                borderBottomWidth: 1.5,
            }}
        />
    );
}