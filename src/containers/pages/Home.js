import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../../components/home';
import { createUser, setEditUser, setDeleteUser } from '../../actions';

const mapDispatchToProps = dispatch => ({
  createUser: data => dispatch(createUser(data)),
  editUser: data => dispatch(setEditUser(data)),
  deleteUser: id => dispatch(setDeleteUser(id)),
});

const mapStateToProps = state => ({
  users: state.resources.users
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));