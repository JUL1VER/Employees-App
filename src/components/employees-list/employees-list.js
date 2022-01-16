import EmpolyeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const employeeslist = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmpolyeesListItem  key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default employeeslist;