import { connect } from 'react-redux';

// == ACTION
import { loadAllArticles } from '../../redux/actions/articles';

// == COMPONENT
import App from '../../App';



const mapDispatchToProps = (dispatch, ownProps) => ({
    storeAllArticles: (articles) => {
        dispatch(loadAllArticles(articles));
    }
});

export default connect(null, mapDispatchToProps)(App);