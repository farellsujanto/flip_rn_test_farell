import React from 'react';
import { Text, View } from "react-native";
import { fontStyles } from '../../styles/font-style';

export function TransactionPendingIndicator() {
    return (
        <View
            style={{
                paddingHorizontal: 8,
                paddingVertical: 3,
                borderRadius: 8.0,
                borderWidth: 1,
                borderColor: '#f76740',
            }}
        >
            <Text style={[fontStyles.subText, { color: 'black' }]}>Pengecekan</Text>
        </View>
    );
}