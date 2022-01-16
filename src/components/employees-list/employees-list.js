import EmpolyeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const employeeslist = ({data}) => {

    const elements = data.map(item => {
        return (
            <EmpolyeesListItem  {...item}/>
        )
    })

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default employeeslist;