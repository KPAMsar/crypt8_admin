export type NotificationSingleData = {
    id: string;
    created_at: string;
   
    name: string;
    notification:string,
    subject:string,


}

export type NoficationRes = {
    notifications: NotificationSingleData[];
    message: string;
    status: string;
}
