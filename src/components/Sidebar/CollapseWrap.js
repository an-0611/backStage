import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';

class CollapseWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isActive } = this.props;
    if (isActive !== prevProps.isActive) {
      this.toggleCollapse();
    }
  }

  toggleCollapse() {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    // const { children, title } = this.props;
    const { isActive } = this.state;
    const iconStyle = cx({
      fa: true,
      'fa-angle-down': true,
      active: isActive,
    });
    return (
      <Collapse in={isActive}>
          <li className="">
            <a className="nav-link" href="#/admin/buttons">
              <span className="sidebar-mini">B</span>
              <span className="sidebar-normal">Buttons</span>
            </a>
          </li>
          {/* <li className="">
            <a className="nav-link" href="#/admin/grid-system">
              <span className="sidebar-mini">GS</span>
              <span className="sidebar-normal">Grid System</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/panels">
              <span className="sidebar-mini">P</span>
              <span className="sidebar-normal">Panels</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/sweet-alert">
              <span className="sidebar-mini">SA</span>
              <span className="sidebar-normal">Sweet Alert</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/notifications">
              <span className="sidebar-mini">N</span>
              <span className="sidebar-normal">Notifications</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/icons">
              <span className="sidebar-mini">I</span>
              <span className="sidebar-normal">Icons</span>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/typography">
              <span className="sidebar-mini">T</span>
              <span className="sidebar-normal">Typography</span>
            </a>
          </li> */}
      </Collapse>
    );
  }
}

CollapseWrap.propTypes = {
  // children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default CollapseWrap;
