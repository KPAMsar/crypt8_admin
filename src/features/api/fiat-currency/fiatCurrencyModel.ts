export type FiatSingleData = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
}

export type FiatCurrencyRes = {
    cryptos: FiatSingleData[];
    message: string;
    status: string;
}
