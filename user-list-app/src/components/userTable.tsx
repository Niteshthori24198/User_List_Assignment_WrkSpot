import React from 'react';
import { User } from '../usersData/users';

interface UserTableProps {
    users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Role</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.role}</td>
                    <td>{user.isActive ? 'Yes' : 'No'}</td>
                </tr>
            ))}
        </tbody>
    </table>
);


export default UserTable;
