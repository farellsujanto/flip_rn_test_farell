import React from 'react';
import { Text, View } from "react-native";
import { fontStyles } from '../../styles/font-style';

export function TransactionSuccessIndicator() {
    return (
        <View
            style={{
                paddingHorizontal: 8,
                paddingVertical: 3,
                backgroundColor: '#59b483',
                borderRadius: 8.0,
            }}
        >
            <Text style={[fontStyles.paragraphBold, { color: 'white' }]}>Berhasil</Text>
        </View>
    );
}