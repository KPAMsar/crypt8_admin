export type DigitalSingleData = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
}

export type DigitalCurrencyRes = {
    cryptos: DigitalSingleData[];
    message: string;
    status: string;
}
