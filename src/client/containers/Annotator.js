import {connect} from 'react-redux';

import Annotator from '../components/Annotator';
import * as actions from '../actions/actionCreators';

const mapStateToProps = (state) => ({
    url: state.image.url,
    annotations: state.image.annotations,
    userId: state.user.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitAnnotation: (annotation) => {
        dispatch(actions.submitAnnotation({
            userId: ownProps.userId,
            annotation
        }));
    },
    loadImage: () => {
        dispatch(actions.loadImage(ownProps.userId));
    },
    addAnnotation: (annotation) => {
        dispatch(actions.addAnnotation(annotation));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Annotator);
