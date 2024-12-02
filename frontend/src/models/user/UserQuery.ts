export class UserQuery {
    page: number;
    limit: number;
    firstName?: string;
    lastName?: string;
    username?: string;
    role?: string;
    sort?: string;  // Opcional para ordenar
    order?: 'ASC' | 'DESC';  // Opcional para ordenar
}