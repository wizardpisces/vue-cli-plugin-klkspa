export interface UserState {
    user_list: UserInfo[];
}

export interface UserInfo {
    name: string;
    id: number;
}

export type UserId = number;
