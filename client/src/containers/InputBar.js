import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import InputBar from '../components/InputBar';

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(InputBar);
