import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ThickDivider from '../components/dividers/ThickDivider';
import ThinDivider from '../components/dividers/ThinDivider';
import { Transaction } from '../models/transaction-model';
import { fontStyles } from '../styles/font-style';
import { decodeBankName } from '../utils/bank-name';
import { currencyFormat } from '../utils/currency';
import { getTransactionDate } from '../utils/date';
import { RootStackParams } from '../utils/routes';

export type transactionListPageProp = NativeStackNavigationProp<RootStackParams, 'TransactionDetail'>;

export default function TransactionDetailPage() {


    const route = useRoute<RouteProp<RootStackParams, 'TransactionDetail'>>();
    const navigation = useNavigation<transactionListPageProp>();

    const [transaction, setTransaction] = useState<Transaction>();

    useEffect(() => {
        // Set data chosen
        setTransaction(route.params);
    }, []);


    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: '#ffffff',
            }}>
                <View style={styles.titleContent}>
                    <Text style={fontStyles.paragraphBold}>ID TRANSAKSI:#{transaction?.id} </Text>

                    <TouchableOpacity
                        onPress={() => {
                            // TODO: Copy functionality using 'Clipboard' '@react-native-community/clipboard'
                        }}
                    >
                        {
                            /* TODO: Replace image with proper icon 
                               Image from https://www.flaticon.com/
                            */
                        }
                        <Image
                            source={require('../images/copy.png')}
                            style={styles.copyIcon}

                        />
                    </TouchableOpacity>
                </View>

                <ThinDivider />

                <View style={styles.titleContent}>
                    <Text style={[fontStyles.paragraphBold, { flex: 1 }]}>DETAIL TRANSAKSI</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack(); }}
                    >
                        <Text style={[fontStyles.paragraphBold, { color: '#d86f4f', textAlign: 'right' }]}>TUTUP</Text>
                    </TouchableOpacity>

                </View>

                <ThickDivider />

                <View style={styles.contentBody}>
                    <Text style={fontStyles.title}>{decodeBankName(transaction?.sender_bank ?? '')} ➜ {decodeBankName(transaction?.beneficiary_bank ?? '')}</Text>

                    <View style={styles.contentRow}>
                        <View style={{ flex: 2 }}>
                            <Text style={fontStyles.paragraphBold}>{transaction?.beneficiary_name}</Text>
                            <Text style={fontStyles.paragraph}>{transaction?.account_number}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={fontStyles.paragraphBold}>NOMINAL</Text>
                            <Text style={fontStyles.paragraph}>{currencyFormat(transaction?.amount ?? 0)}</Text>
                        </View>
                    </View>

                    <View style={styles.contentRow}>
                        <View style={{ flex: 2 }}>
                            <Text style={fontStyles.paragraphBold}>BERITA TRANSFER</Text>
                            <Text style={fontStyles.paragraph}>{transaction?.remark}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={fontStyles.paragraphBold}>KODE UNIK</Text>
                            <Text style={fontStyles.paragraph}>{transaction?.unique_code}</Text>
                        </View>
                    </View>

                    <View style={styles.contentRow}>
                        <View>
                            <Text style={fontStyles.paragraphBold}>WAKTU DIBUAT</Text>
                            {/* TODO: Date default value if undefined */}
                            <Text style={fontStyles.paragraph}>{getTransactionDate(transaction?.created_at ?? '')}</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        color: 'red'
    },
    titleContent: {
        paddingVertical: 24,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    contentBody: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    contentRow: {
        flexDirection: 'row',
        paddingVertical: 8,
        justifyContent: 'space-between',
    },
    copyIcon: {
        width: 18,
        height: 18,
        tintColor: '#d86f4f',
        alignSelf:'center',
    },
});