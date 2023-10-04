export type NotificationSingleData = {
    id: string;
    created_at: string;
    status: string;
    logo: string;
    name: string;
}

export type NoficationRes = {
    notifications: NotificationSingleData[];
    message: string;
    status: string;
}
