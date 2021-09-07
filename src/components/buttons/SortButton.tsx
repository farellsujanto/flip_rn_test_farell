import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontStyles } from '../../styles/font-style';

export default function SortButton({ text, openSortModal }: { text:string, openSortModal: Function }) {
    return (
        <TouchableOpacity onPress={() => { openSortModal(); }} style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={fontStyles.subText}>{text} </Text>
                {
                    /* TODO: Replace image with proper icon 
                       Image from https://www.flaticon.com/
                    */
                }
                <Image
                    source={require('../../images/down-chevron.png')}
                    style={styles.sortIcon}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    sortIcon: {
        width: 12,
        height: 12,
        tintColor: '#d86f4f',
        alignSelf: 'center',
    },
});