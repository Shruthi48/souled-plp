import React from 'react';
import {  Panel } from 'react-bootstrap';
import './dropdown.css';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import classnames from 'classnames';

bootstrapUtils.addStyle(Panel, 'custom');
export default class Dropdown extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        open: true
      };
    }
  
    render() {
      return (
        <div className={
            classnames(
                {
                    "collapsible-panel" : !this.props.isUnStyled
                }
            )
        }>
          <style type="text/css">
           {`
             .panel-custom {
              background-color: white;
              color: gray;
              margin: 0;
              border-radius: 0;
              font-size: 14px;
              box-shadow: 0px 0px white;
            }
           `}
          </style>
          <Panel id="collapsible-panel"  bsStyle="custom" defaultExpanded={this.props.isDefaultExpanded}>
            <Panel.Heading>
              <Panel.Title toggle>
                {this.props.dropDownName}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                {this.props.content}
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </div>
      );
    }
}
  