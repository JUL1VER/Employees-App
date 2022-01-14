import EmpolyeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const employeeslist = () => {
    return (
        <ul className="app-list list-group">
            <EmpolyeesListItem/>
            <EmpolyeesListItem/>
            <EmpolyeesListItem/>
        </ul>
    )
}

export default employeeslist;