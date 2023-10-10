
export type transactionRes = {
    id: number,
    bank_card_id: number,
    user_id: number,
    amount: number,
    status: number,
    created_at: string,
    updated_at: string,
    withdrawals:string,
}

export type depositeRes = {
    wallet: string,
    firstname: string,
    lastname: string,
    tag:string,
    id: number,
    wallet_id: number,
    user_id: number,
    amount: number,
    sender: string,
    status: 1,
    rate: number,
    cash_value: number,
    block_hash:string,
    hash: string,
    confirmations: number,
    created_at: string,
    updated_at: string
}

export type dashboardSingleRes = {
   

    deposits: number,
    users: number,
    rates: number,
    btc_price: number,
    transactions: transactionRes,
    deposits_tx :depositeRes,
    withdrawals,
}

export type dashboardRes = {
    data:dashboardSingleRes
}