import React from 'react';
import { SortDirection, SortField } from './userLists';

interface NavbarProps {
  roleFilter: string;
  setRoleFilter: (role: string) => void;
  showActive: boolean;
  setShowActive: (value: boolean) => void;
  setSortField: (field: 'name' | 'age' | '') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  search: string;
  setSearch: (value: string) => void;
}


const Navbar: React.FC<NavbarProps> = ({
  roleFilter,
  setRoleFilter,
  showActive,
  setShowActive,
  setSortField,
  setSortOrder,
  search,
  setSearch,
}) => (
  <div className="navbar">
    <input
      type="text"
      placeholder="Search by Name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
      <option value="">All Roles</option>
      <option value="Engineer">Engineer</option>
      <option value="Designer">Designer</option>
      <option value="Manager">Manager</option>
      <option value="HR">HR</option>
    </select>
    <label>
      <input
        type="checkbox"
        checked={showActive}
        onChange={(e) => setShowActive(e.target.checked)}
      />
      Show Active Users
    </label>
    <div>
      <label>Sort By: </label>
      <select onChange={(e) => setSortField(e.target.value as SortField)}>
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>
      <label>Sort Order: </label>
      <select onChange={(e) => setSortOrder(e.target.value as SortDirection)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  </div >
);



export default Navbar;
