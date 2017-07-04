import {connect} from 'react-redux';

import Annotator from '../components/Annotator';
import * as actions from '../actions/actionCreators';

const mapStateToProps = (state) => ({
    url: state.image.url,
    annotations: state.image.annotations,
    userId: state.user.id
});

const mapDispatchToProps = (dispatch) => ({
    submitAnnotation: (annotation) => {
        console.log(annotation);
        dispatch(actions.submitAnnotation(annotation));
    },
    loadImage: (userId) => {
        dispatch(actions.loadImage(userId));
    },
    addAnnotation: (annotation) => {
        dispatch(actions.addAnnotation(annotation));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Annotator);
