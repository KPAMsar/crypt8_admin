export type UsersSingleRes = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
}


export type UserRes = {
    users: UsersSingleRes[];
    message: string;
    status: string;
}
