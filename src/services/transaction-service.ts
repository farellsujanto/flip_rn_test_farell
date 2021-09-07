import { Transaction } from "../models/transaction-model";
import { getRequest } from "./request";

export async function getTransactions(): Promise<Transaction[]> {

    // TODO: Put base url in .env
    const requestData = await getRequest('https://nextar.flip.id/frontend-test');
    
    // Decode keys (because data get is not an array but list of objects)
    const keys = Object.keys(requestData);

    // TODO: Interface data validity check & Error handling
    // Cast list of transaction object to array of Transaction
    const transactions: Transaction[] = keys.map((key) => requestData[key]);

    return transactions;
}