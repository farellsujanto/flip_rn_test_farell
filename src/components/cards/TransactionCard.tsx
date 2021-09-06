import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Transaction } from '../../models/transaction-model';
import { fontStyles } from '../../styles/font-style';
import { getTransactionDate } from '../../utils/date';
import { TransactionPendingIndicator } from '../views/TransactionPendingIndicator';
import { TransactionSuccessIndicator } from '../views/TransactionSuccessIndicator';

export function TransactionCard({ transaction }: { transaction: Transaction }) {

    return (
        <View style={styles.transactionCard}>
            {
                // TODO: Enum
                transaction.status === 'PENDING' ?
                    (<View style={styles.transactionIndicatorPending}></View>) :
                    (<View style={styles.transactionIndicatorSuccess}></View>)
            }

            <View style={styles.transactionCardContent}>
                <View>
                    <Text style={fontStyles.title}>{transaction.sender_bank} ➜ {transaction.beneficiary_bank}</Text>
                    <Text style={fontStyles.paragraph}>{transaction.beneficiary_name}</Text>
                    <Text style={fontStyles.paragraph}>
                        Rp. {transaction.amount.toLocaleString('id')} • {getTransactionDate(transaction.created_at)}
                    </Text>
                </View>
                <View style={styles.transactionCardStatusArea}>
                    {
                        // TODO: Enum
                        transaction.status === 'PENDING' ?
                            (<TransactionPendingIndicator />) :
                            (<TransactionSuccessIndicator />)

                    }
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    transactionCard: {
        backgroundColor: '#ffffff',
        height: 90,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 8.0,
    },
    transactionCardContent: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 8.0,
        flexDirection: 'row',
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
    },
    transactionCardStatusArea: {
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    },
});