export type UsersSingleRes = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
    tag:string;
    firstname:string;
    lastname:string;
    phone:string;
    wallet:string;
    email:string;
}


export type UserRes = {
    users: UsersSingleRes[];
    message: string;
    status: string;
}
