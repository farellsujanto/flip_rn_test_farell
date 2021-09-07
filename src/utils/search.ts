import { Transaction } from "../models/transaction-model";

export function transactionSearch(transactions: Transaction[], searchString: string): Transaction[] {

    // If search string is empty then show all transactions
    if (searchString === '') {
        return transactions;
    }

    // Lowercase to ensure all could be searched case insensitive
    const lowercasedSearchString = searchString.toLowerCase();

    let newTransactions: Transaction[] = [];
    transactions.forEach((transaction) => {
        // Check name, sender_bank, beneficiary_bank, amount with search string
        if (
            transaction.beneficiary_name.toLowerCase().includes(lowercasedSearchString) ||
            transaction.sender_bank.toLowerCase().includes(lowercasedSearchString) ||
            transaction.beneficiary_bank.toLowerCase().includes(lowercasedSearchString) ||
            transaction.amount.toString().includes(lowercasedSearchString)
        ) {
            // Add to shown transactions if true
            newTransactions.push(transaction);
        }
    });

    return newTransactions;
}