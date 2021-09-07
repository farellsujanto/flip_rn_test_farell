import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, TextInput, View } from 'react-native';
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
                    <TextInput
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
    },
    searchInput: {
        margin: 4,
        padding: 4,
    },
    transactionCard: {
        backgroundColor: '#ffffff',
        height: 90,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 8.0,
    },
    transactionIndicatorPending: {
        width: 8.0,
        height: 90,
        backgroundColor: '#f76740',
        borderTopLeftRadius: 8.0,
        borderBottomLeftRadius: 8.0,
    },
    transactionIndicatorSuccess: {
        width: 8.0,
        height: 90,
        backgroundColor: '#59b483',
        borderTopLeftRadius: 8.0,
        borderBottomLeftRadius: 8.0,
    }
});