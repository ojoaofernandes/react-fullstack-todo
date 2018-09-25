import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/visibilityFilter';
import VisibilityFilter from '../components/VisibilityFilter';

const mapStateToProps = ({ visibilityFilter }) => ({
  filter: visibilityFilter
});

const mapDispatchToProps = {
  onFilterChange: setVisibilityFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
