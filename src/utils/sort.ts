import { Sort } from "../models/enums/sort-enum";
import { Transaction } from "../models/transaction-model";

export function sortTransactions(transactions: Transaction[], sort: Sort): Transaction[] {

    // Switch case might be better?

    // Name Sort
    if (sort ===  Sort.NAME_ASC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.beneficiary_name > b.beneficiary_name ? 1: -1);
        return newTransactions;
    }
    if (sort ===  Sort.NAME_DESC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.beneficiary_name < b.beneficiary_name ? 1: -1);
        return newTransactions;
    }

    // Date Sort
    // Oldest Date (Ascending)
    if (sort ===  Sort.DATE_ASC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.created_at > b.created_at ? 1: -1);
        return newTransactions;
    }
    // Latest Date (Descending)
    if (sort ===  Sort.DATE_DESC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.created_at < b.created_at ? 1: -1);
        return newTransactions;
    }

    return transactions;
}