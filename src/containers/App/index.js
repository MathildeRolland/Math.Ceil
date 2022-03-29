import { connect } from 'react-redux';

// == ACTION
import { fetchArticles } from '../../redux/actions/articles';

// == COMPONENT
import App from '../../App';

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchAllArticles: () => {
		dispatch(fetchArticles());
	},
});

export default connect(null, mapDispatchToProps)(App);
