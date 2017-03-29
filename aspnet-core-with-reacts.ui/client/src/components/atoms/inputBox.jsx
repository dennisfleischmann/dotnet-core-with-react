import React, { PropTypes } from 'react';
import {
  FormGroup,
  FormControl,
} from 'react-bootstrap';


const InputBox = (props) => {
  const {
    inputText,
    onChange,
    placeholder
  } = props;

  return (<form>
    <FormGroup>
      <FormControl
        type="text"
        value={inputText}
        onChange={onChange}
        placeholder={placeholder}
      />
    </FormGroup>
  </form>);
};

InputBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputBox;