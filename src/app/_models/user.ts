export interface IUser {
    id: number;
    userName: string;
    password: string;
    isReadOnly: boolean;
    canComment: boolean;
    isContributer: boolean;
    isAdmin: boolean;
}