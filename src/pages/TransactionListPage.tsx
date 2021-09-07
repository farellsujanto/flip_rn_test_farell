import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TransactionCard } from '../components/cards/TransactionCard';
import { Transaction } from '../models/transaction-model';
import { getTransactions } from '../services/transaction-service';
import { RootStackParams } from '../utils/routes';
import { transactionSearch } from '../utils/search';

export type transactionListPageProp = NativeStackNavigationProp<RootStackParams, 'TransactionList'>;

export default function TransactionListPage() {

    const navigation = useNavigation<transactionListPageProp>();

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [shownTransactions, setShownTransactions] = useState<Transaction[]>([]);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        // Initialize data on component load
        initTransactionDatas();
    }, []);

    async function initTransactionDatas() {
        const newTransactions = await getTransactions();
        // Set static transaction
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

    return (
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
            </SafeAreaView>
        </View>
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
        paddingHorizontal: 8,
    },
    searchInput: {
        margin: 2,
        padding: 8,
    },
    searchIcon: {
        width: 18,
        height: 18,
        tintColor: '#c7c7c7',
        alignSelf:'center',
    },
});