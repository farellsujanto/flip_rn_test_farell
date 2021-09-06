import { Transaction } from "../models/transaction-model";
import { getRequest } from "./request";

export async function getTransactions(): Promise<Transaction[]> {

    // TODO: Put base url in .env
    const requestData = await getRequest('https://nextar.flip.id/frontend-test');
    const keys = Object.keys(requestData);

    // TODO: Interface data validity check & Error handling
    const transactions:Transaction[] = keys.map((key) => requestData[key]);

    
    return transactions;
}