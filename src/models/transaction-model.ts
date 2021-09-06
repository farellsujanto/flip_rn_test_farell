export interface Transaction {
    id: string;
    amount: number;
    unique_code:number;
    // TODO: enum for status
    status: string;
    sender_bank: string;
    account_number: number;
    beneficiary_name: string;
    beneficiary_bank: string;
    remark: string;
    created_at: string;
    completed_at: string;
    fee: number;
}
