import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontStyles } from '../../styles/font-style';

export default function FilterButton({ openFilterModal }: { openFilterModal: Function }) {
    return (
        <TouchableOpacity onPress={() => { openFilterModal(); }} style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={fontStyles.subText}>URUTKAN </Text>
                {
                    /* TODO: Replace image with proper icon 
                       Image from https://www.flaticon.com/
                    */
                }
                <Image
                    source={require('../images/down-chevron.png')}
                    style={styles.filterIcon}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    filterIcon: {
        width: 14,
        height: 14,
        tintColor: '#d86f4f',
        alignSelf: 'center',
    },
});