import { connect } from 'react-redux';

import Articles from '../../components/Articles';

const mapStateToProps = (state, ownProps) => ({
	articles: state.articles.articles,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
