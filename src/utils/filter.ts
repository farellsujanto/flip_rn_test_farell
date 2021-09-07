import { Filter } from "../models/enums/filter-enum";
import { Transaction } from "../models/transaction-model";

export function filterTransactions(transactions: Transaction[], filter: Filter): Transaction[] {

    // Switch case might be better?

    // Name Filter
    if (filter ===  Filter.NAME_ASC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.beneficiary_name > b.beneficiary_name ? 1: -1);
        return newTransactions;
    }
    if (filter ===  Filter.NAME_DESC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.beneficiary_name < b.beneficiary_name ? 1: -1);
        return newTransactions;
    }

    // Date Filter
    // Oldest Date (Ascending)
    if (filter ===  Filter.DATE_ASC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.created_at > b.created_at ? 1: -1);
        return newTransactions;
    }
    // Latest Date (Descending)
    if (filter ===  Filter.DATE_DESC) {
        let newTransactions = [...transactions];
        newTransactions.sort((a,b) => a.created_at < b.created_at ? 1: -1);
        return newTransactions;
    }

    return transactions;
}