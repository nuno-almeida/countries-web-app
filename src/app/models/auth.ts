export interface User {
    id: string
}

export interface Auth {
    isAuthenticated: boolean;
    user: User;
}