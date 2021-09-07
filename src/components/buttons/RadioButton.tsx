import React from 'react';
import { StyleSheet, View } from 'react-native';

// TODO: Replace with proper RadioButton
// Radio button from stackoverflow
export default function RadioButton({ selected }: { selected: boolean }) {
    return (
        <View style={styles.radioButton}>
            {
                selected ?
                    <View style={styles.selectedRadioButton} />
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    radioButton: {
        height: 16,
        width: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#d86f4f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRadioButton: {
        height: 8,
        width: 8,
        borderRadius: 6,
        backgroundColor: '#d86f4f',
    }
});