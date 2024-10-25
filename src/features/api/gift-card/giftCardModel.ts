export type GiftCardSingleData = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
}

export type GiftCardCurrencyRes = {
    cards: GiftCardSingleData[];
    message: string;
    status: string;
}
