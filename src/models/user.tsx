export interface User {
    id: number;
    created_at: Date;
    name: string;
    lastName: string;
    dateOfBirth?: Date | null;
}
