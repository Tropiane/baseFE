export interface Ticket{
    formId: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    status?: string,
    comments?: string[]
}