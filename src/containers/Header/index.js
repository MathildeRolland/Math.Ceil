import { connect } from 'react-redux';

import Header from '../../components/Header';
import { toggleMenu } from '../../redux/actions/utils';

const mapStateToProps = (state, ownProps) => ({
    isMenuOpen: state.isMenuOpen
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleMenu: function() {
        dispatch(toggleMenu());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);