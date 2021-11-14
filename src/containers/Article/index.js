import { connect } from 'react-redux';

import Article from '../../views/Article';

const mapStateToProps = (state, ownProps) => ({
    articles: state.articles.articles
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Article);