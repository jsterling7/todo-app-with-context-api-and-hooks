import { connect } from 'react-redux';
import Link from '../components/Link';
import { setFilter} from '../redux/actions';


const mapStateToProps = (state, props) => (
    {active: props.filter === state.visibilityFilter}
);


const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => {
        dispatch(setFilter(props.filter));
    }
});


const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);


export default FilterLink;