import { getRequest } from "./request";

export async function getTransactions(url: string) {

    // TODO: Put base url in .env
    const transactions = await getRequest('https://nextar.flip.id/frontend-test');
    console.log(transactions);    
}