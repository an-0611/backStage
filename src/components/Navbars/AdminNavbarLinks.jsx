import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>通知-1</MenuItem>
            <MenuItem eventKey={2.2}>通知-2</MenuItem>
            <MenuItem eventKey={2.3}>通知-3</MenuItem>
            <MenuItem eventKey={2.4}>通知-4</MenuItem>
            <MenuItem eventKey={2.5}>沒有其他通知了</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            帳戶
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="其他操作"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>動作一</MenuItem>
            <MenuItem eventKey={2.2}>動作二</MenuItem>
            <MenuItem eventKey={2.3}>動作三</MenuItem>
            <MenuItem eventKey={2.4}>動作四</MenuItem>
            <MenuItem eventKey={2.5}>動作五</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Separated link</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
