import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
// import { logout } from '../../actions/auth';
// import { clearError, showModal } from '../../reducers/notifications';
// import { exportToExcel } from '../../helpers/export';
// import { getCompany, getFilterData } from '../../actions/resources';

import Layout from '../../components/layout';

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

// class Layout extends Component {
//   state = {  }
//   render() {
//     return (
//       <section>
//         <nav> LAYOUT</nav>
//         {this.props.children}
//       </section>
//     )
//   }
// }

// export default Layout
