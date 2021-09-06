import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TransactionCard } from '../components/cards/TransactionCard';
import { Transaction } from '../models/transaction-model';
import { getTransactions } from '../services/transaction-service';



export default function TransactionListPage() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function initTransactionDatas() {
        const newTransactions = await getTransactions();
        setTransactions([...newTransactions]);
    }

    useEffect(() => {
        initTransactionDatas();
    }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
                <FlatList
                    
                    data={transactions}
                    renderItem={(transaction) => {
                        return (
                            <TransactionCard transaction={transaction.item} />
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
        // marginTop: StatusBar.currentHeight || 0,
        color: 'red'
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