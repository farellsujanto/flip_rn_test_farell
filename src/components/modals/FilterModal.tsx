import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Filter } from '../../models/enums/filter-enum';
import FilterSelectionButton from '../buttons/FilterSelectionButton';

export default function FilterModal({ isVisible, closeModal, filteredBy, setFilter }: { isVisible: boolean, closeModal: Function, filteredBy: Filter, setFilter: (filter: Filter) => void }) {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => { closeModal(); }}
        >
            <TouchableOpacity style={styles.centeredView} onPress={() => { closeModal(); }}>
                <TouchableWithoutFeedback>
                    <View style={styles.modalContainer}>

                        <FilterSelectionButton
                            text={'URUTKAN'}
                            selected={filteredBy === Filter.NONE}
                            onPress={() => { setFilter(Filter.NONE); }}
                        />

                        <FilterSelectionButton
                            text={'Nama A-Z'}
                            selected={filteredBy === Filter.NAME_ASC}
                            onPress={() => { setFilter(Filter.NAME_ASC); }}
                        />

                        <FilterSelectionButton
                            text={'Nama Z-A'}
                            selected={filteredBy === Filter.NAME_DESC}
                            onPress={() => { setFilter(Filter.NAME_DESC); }}
                        />

                        <FilterSelectionButton
                            text={'Tanggal Terbaru'}
                            selected={filteredBy === Filter.DATE_DESC}
                            onPress={() => { setFilter(Filter.DATE_DESC); }}
                        />

                        <FilterSelectionButton
                            text={'Tanggal Terlama'}
                            selected={filteredBy === Filter.DATE_ASC}
                            onPress={() => { setFilter(Filter.DATE_ASC); }}
                        />


                    </View>
                </TouchableWithoutFeedback>

            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(43, 43, 43,0.7)',
    },
    modalContainer: {
        margin: 20,
        width: '90%',
        backgroundColor: "white",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 18,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

});