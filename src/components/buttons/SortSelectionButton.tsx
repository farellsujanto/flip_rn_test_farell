import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { fontStyles } from '../../styles/font-style';
import RadioButton from './RadioButton';

export default function SortSelectionButton({ onPress, text, selected }: { onPress: Function, text: string, selected: boolean }) {
    return (
        <TouchableOpacity
            style={styles.sortButton}
            onPress={() => { onPress(); }}
        >
            <RadioButton selected={selected} />
            <Text style={[fontStyles.paragraphSemiBold, { marginLeft: 12 }]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
    },

});