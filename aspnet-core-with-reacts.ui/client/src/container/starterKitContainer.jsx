import StarterKit from '../components/starterKit';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ msg: state.msg, inputText: state.InputText });

export default connect(mapStateToProps, null)(StarterKit);

