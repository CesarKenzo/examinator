export interface User {
    id?: number;
    name: string;
    email: string;
    username: string;
    password: string;
    flAdmin: boolean;
    profile?: string;
    description?: string;
}