import { bindActionCreators } from 'redux';
import * as venueAction from '../actions/venue';

const mapDispatchToProps = (dispatch) => bindActionCreators(venueAction, dispatch);

export default mapDispatchToProps;