import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Transaction } from '../../models/transaction-model';
import { fontStyles } from '../../styles/font-style';
import { decodeBankName } from '../../utils/bank-name';
import { getTransactionDate } from '../../utils/date';
import { TransactionPendingIndicator } from '../views/TransactionPendingIndicator';
import { TransactionSuccessIndicator } from '../views/TransactionSuccessIndicator';
import { transactionListPageProp } from '../../pages/TransactionListPage';
import { currencyFormat } from '../../utils/currency';

export function TransactionCard({ navigation, transaction }: { navigation: transactionListPageProp,transaction: Transaction }) {


    return (
        <TouchableOpacity
            style={styles.transactionCard}
            onPress={() => {
                navigation.navigate('TransactionDetail', transaction);
            }}
        >
            {
                // TODO: Enum
                transaction.status === 'PENDING' ?
                    (<View style={styles.transactionIndicatorPending}></View>) :
                    (<View style={styles.transactionIndicatorSuccess}></View>)
            }

            <View style={styles.transactionCardContent}>
                <View>
                    <Text style={fontStyles.title}>{decodeBankName(transaction.sender_bank)} ➜ {decodeBankName(transaction.beneficiary_bank)}</Text>
                    <Text style={fontStyles.paragraph}>{transaction.beneficiary_name}</Text>
                    <Text style={fontStyles.paragraph}>
                        {currencyFormat(transaction?.amount ?? 0)} • {getTransactionDate(transaction.created_at)}
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

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    transactionCard: {
        backgroundColor: '#ffffff',
        // height: 90,
        marginVertical: 4,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 8.0,
    },
    transactionCardContent: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 8.0,
        flexDirection: 'row',
    },
    transactionIndicatorPending: {
        width: 8.0,
        // height: 90,
        backgroundColor: '#f76740',
        borderTopLeftRadius: 8.0,
        borderBottomLeftRadius: 8.0,
    },
    transactionIndicatorSuccess: {
        width: 8.0,
        // height: 90,
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