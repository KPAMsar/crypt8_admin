export type SubAdminSingleRes = {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    role: string,
    created_at: string,
    updated_at: string,
    access_duration:string
    access_set: string,
    device_token:string,
    price_card: PriceCard,
    price_card_id: number,
    special_access: string,
    status: string,
    tag:string,
    wallet: string,
}


export type PriceCard = {
class: string,
created_at:string,
id:number,
lower_bound:string,
rate:string,
update_at:string,
upper_bound:string,
}

export type subAdminRes = {
    status: string,
    'sub-admin': SubAdminSingleRes
}