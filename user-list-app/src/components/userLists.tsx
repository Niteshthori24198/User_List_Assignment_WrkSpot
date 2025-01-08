import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import { users } from '../usersData/users';
import UserTable from './userTable';
import Navbar from './navbar';


export type SortField = 'name' | 'age' | '';
export type SortDirection = 'asc' | 'desc';


const UserList: React.FC = () => {

    const [search, setSearch] = useState<string>('');
    const [roleFilter, setRoleFilter] = useState<string>('');
    const [showActive, setShowActive] = useState<boolean>(false);
    const [sortField, setSortField] = useState<SortField>('');
    const [sortOrder, setSortOrder] = useState<SortDirection>('asc');

    const debouncedSearchValue = useDebounce(search, 500);

    // Filtering logic
    const filteredUsers = users.filter((user) => {
        const matchedRole = roleFilter ? user.role === roleFilter : true;
        const matchedIsActive = showActive ? user.isActive : true;
        const matchedSearch = user.name.toLowerCase().includes(debouncedSearchValue.toLowerCase());
        return matchedRole && matchedIsActive && matchedSearch;
    });


    // Sorting logic
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (!sortField) return 0;

        const sortField_1 = a[sortField];
        const sortField_2 = b[sortField];

        if (typeof sortField_1 === 'number' && typeof sortField_2 === 'number') {
            return sortOrder === 'asc' ? sortField_1 - sortField_2 : sortField_2 - sortField_1;
        }

        if (typeof sortField_1 === 'string' && typeof sortField_2 === 'string') {
            return sortOrder === 'asc'
                ? sortField_1.localeCompare(sortField_2)
                : sortField_2.localeCompare(sortField_1);
        }

        return 0;

    });


    return (
        <div>
            <Navbar
                roleFilter={roleFilter}
                setRoleFilter={setRoleFilter}
                showActive={showActive}
                setShowActive={setShowActive}
                setSortField={setSortField}
                setSortOrder={setSortOrder}
                search={search}
                setSearch={setSearch}
            />
            <UserTable users={sortedUsers} />
        </div>
    );
};

export default UserList;
