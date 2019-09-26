import React, { useContext } from 'react';
import TodoContext from '../context/Todo';
import { setFilter } from '../state/actions';
import { VISIBILITY_FILTERS } from '../constants';
import Link from './Link';


const Footer = () => {

    const [state, dispatch] = useContext(TodoContext);
    const currentFilter = state.visibilityFilter;


    const linkClick = (filter) => dispatch(setFilter(filter));

    return (
        <p>
            Show:
            <Link
                active={VISIBILITY_FILTERS.ALL === currentFilter}
                onClick={() => linkClick(VISIBILITY_FILTERS.ALL)}>All</Link>
            {', '}
            <Link
                filter={VISIBILITY_FILTERS.INCOMPLETE === currentFilter}
                onClick={() => linkClick(VISIBILITY_FILTERS.INCOMPLETE)}>Incomplete</Link>
            {', '}
            <Link
                filter={VISIBILITY_FILTERS.COMPLETED === currentFilter}
                onClick={() => linkClick(VISIBILITY_FILTERS.COMPLETED)}>Completed</Link>
        </p>
    )
};


export default Footer;