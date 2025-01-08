
export interface User {
    id: number;
    name: string;
    age: number;
    role: string;
    isActive: boolean;
}


export const users: User[] = [
    { id: 1, name: 'Alice', age: 25, role: 'Engineer', isActive: true },
    { id: 2, name: 'Bob', age: 30, role: 'Designer', isActive: false },
    { id: 3, name: 'Charlie', age: 35, role: 'Manager', isActive: true },
    { id: 4, name: 'David', age: 28, role: 'Engineer', isActive: true },
    { id: 5, name: 'Eve', age: 22, role: 'Designer', isActive: false },
    { id: 6, name: 'Frank', age: 40, role: 'Manager', isActive: true },
    { id: 7, name: 'Grace', age: 26, role: 'Engineer', isActive: false },
    { id: 8, name: 'Hannah', age: 29, role: 'Designer', isActive: true },
    { id: 9, name: 'Ian', age: 32, role: 'Engineer', isActive: true },
    { id: 10, name: 'Jane', age: 27, role: 'HR', isActive: false },
    { id: 11, name: 'Kevin', age: 31, role: 'HR', isActive: true },
    { id: 12, name: 'Laura', age: 34, role: 'Manager', isActive: false },
    { id: 13, name: 'Mike', age: 37, role: 'Designer', isActive: true },
    { id: 14, name: 'Nina', age: 24, role: 'HR', isActive: true },
    { id: 15, name: 'Oscar', age: 38, role: 'Engineer', isActive: true },
    { id: 16, name: 'Pam', age: 29, role: 'Designer', isActive: false },
    { id: 17, name: 'Quinn', age: 33, role: 'Manager', isActive: true },
    { id: 18, name: 'Rachel', age: 23, role: 'HR', isActive: false },
];
