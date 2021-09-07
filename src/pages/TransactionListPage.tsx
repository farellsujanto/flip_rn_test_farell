import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SortButton from '../components/buttons/SortButton';
import { TransactionCard } from '../components/cards/TransactionCard';
import SortModal from '../components/modals/SortModal';
import { Sort } from '../models/enums/sort-enum';
import { Transaction } from '../models/transaction-model';
import { getTransactions } from '../services/transaction-service';
import { fontStyles } from '../styles/font-style';
import { sortTransactions } from '../utils/sort';
import { RootStackParams } from '../utils/routes';
import { transactionSearch } from '../utils/search';

export type transactionListPageProp = NativeStackNavigationProp<RootStackParams, 'TransactionList'>;

export default function TransactionListPage() {

    const navigation = useNavigation<transactionListPageProp>();

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [shownTransactions, setShownTransactions] = useState<Transaction[]>([]);
    const [searchString, setSearchString] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(Sort.NONE);

    useEffect(() => {
        // Initialize data on component load
        initTransactionDatas();
    }, []);

    async function initTransactionDatas() {
        const newTransactions = await getTransactions();
        // Set static transaction for sort & search master data
        setTransactions([...newTransactions]);
        // Set shown transactions
        setShownTransactions([...newTransactions]);
    }

    function onChangeSearchText(text: string) {
        setSearchString(text);
        // Search for applicable transactions
        const newTransactions = transactionSearch(transactions, text);
        // Set shown transactions
        setShownTransactions([...newTransactions]);
    }

    // Modal
    function openSortModal() {
        setIsModalVisible(true);
    }

    function closeSortModal() {
        setIsModalVisible(false);
    }

    // Sort
    function setSort(sort: Sort) {

        // If sort is done, then remove search string
        setSearchString('');
        
        // Close modal after selection
        closeSortModal();

        // Sort transactions
        setSortBy(sort);
        const newTransactions = sortTransactions(transactions, sort);
        // Set shown transactions
        setShownTransactions([...newTransactions]);
    }


    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
                    <View style={styles.inputContainer}>
                        {
                            /* TODO: Replace image with proper icon 
                               Image from https://www.flaticon.com/
                            */
                        }
                        <Image
                            source={require('../images/search.png')}
                            style={styles.searchIcon}
                        />

                        <TextInput
                            placeholder={'Cari nama, bank, atau nominal'}
                            placeholderTextColor="#c7c7c7"
                            style={styles.searchInput}
                            onChangeText={onChangeSearchText}
                            value={searchString}
                        />
                        <SortButton
                            text={sortBy}
                            openSortModal={openSortModal} 
                        />

                    </View>

                    <FlatList
                        scrollEnabled={true}
                        data={shownTransactions}
                        renderItem={(transaction) => {
                            return (
                                <TransactionCard
                                    navigation={navigation}
                                    transaction={transaction.item}
                                />
                            );
                        }}
                        keyExtractor={transaction => transaction.id}
                    />
                    {/*  */}
                </SafeAreaView>
            </View>
            <SortModal
                isVisible={isModalVisible}
                closeModal={() => { closeSortModal(); }}
                sortBy={sortBy}
                setSort={setSort}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    inputContainer: {
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6.0,
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    searchInput: {
        margin: 2,
        padding: 8,
        flex: 1,
        fontSize: 14,
    },
    searchIcon: {
        width: 18,
        height: 18,
        tintColor: '#c7c7c7',
        alignSelf: 'center',
    },
});