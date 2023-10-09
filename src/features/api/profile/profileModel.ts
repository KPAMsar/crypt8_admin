export type ProfileSingleRes = {
    id: string;
    created_at: string;
    email: string;
    phone: string;
    firstname: string;
    lastname: string;
    role:string,
    updated_at:string,



}

export type ProfileRes = {
    'sub-admins': ProfileSingleRes[];
    status: string;
}