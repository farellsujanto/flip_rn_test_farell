import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Sort } from '../../models/enums/sort-enum';
import SortSelectionButton from '../buttons/SortSelectionButton';

export default function SortModal({ isVisible, closeModal, sortBy, setSort }: { isVisible: boolean, closeModal: Function, sortBy: Sort, setSort: (sort: Sort) => void }) {
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

                        <SortSelectionButton
                            text={'URUTKAN'}
                            selected={sortBy === Sort.NONE}
                            onPress={() => { setSort(Sort.NONE); }}
                        />

                        <SortSelectionButton
                            text={'Nama A-Z'}
                            selected={sortBy === Sort.NAME_ASC}
                            onPress={() => { setSort(Sort.NAME_ASC); }}
                        />

                        <SortSelectionButton
                            text={'Nama Z-A'}
                            selected={sortBy === Sort.NAME_DESC}
                            onPress={() => { setSort(Sort.NAME_DESC); }}
                        />

                        <SortSelectionButton
                            text={'Tanggal Terbaru'}
                            selected={sortBy === Sort.DATE_DESC}
                            onPress={() => { setSort(Sort.DATE_DESC); }}
                        />

                        <SortSelectionButton
                            text={'Tanggal Terlama'}
                            selected={sortBy === Sort.DATE_ASC}
                            onPress={() => { setSort(Sort.DATE_ASC); }}
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