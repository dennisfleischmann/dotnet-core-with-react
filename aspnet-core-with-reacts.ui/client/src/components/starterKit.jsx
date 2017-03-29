import React, { Component, PropTypes } from 'react';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Button,
} from 'react-bootstrap';

import InputBox from './atoms/inputBox';

class StarterKit extends Component {
  render() {
    const {
      onChange,
      onClick,
      msg,
      inputText,
  } = this.props;

    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <Jumbotron>
              <h1>Advanced React Redux Starter Kit</h1>
              <ul>
                <li>Atomic Design approach</li>
                <li><code>Separation</code> between Application and UI-Developer</li>
                <li>Test Driven Development in mind</li>
                <li>Webpack + Webpack-Dev-Sever</li>
                <li><code>Chrome Devtools extensions</code> already preconfigured</li>
                <li>React <code>Storybook-Ui</code> already in place</li>
                <li>Eslint configuarion <code>airbnb</code></li>
                <li><code>Source-Map</code> in webpack preconfigured</li>
              </ul>
              <p><small>by Dennis Fleischmann</small></p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <InputBox
              placeholder="Sample text to change"
              inputText={inputText}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button onClick={onClick}>Change Text!</Button>
          </Col>
          <Col xs={12} md={12}>
            <span>{msg}</span>
          </Col>
        </Row>
      </Grid>
    );
  }
}

StarterKit.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};

export default StarterKit;
