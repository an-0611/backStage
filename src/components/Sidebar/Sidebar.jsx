import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";
import CollapseWrap from "./CollapseWrap";

import logo from "assets/img/reactlogo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      isOpen: false,
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const { isOpen } = this.state;
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    const rotate1 = {
      // -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)'
      // -webkit-transform: rotate(180deg)
      // -ms-transform:rotate(180deg)
      transform:[{ rotate: '180deg' }],
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            BackStage
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      // activeStyle={{
                      //   fontWeight: 'bold',
                      //   color: 'red'
                      // }}
                      onClick={() => { this.setState({ isOpen: !isOpen }); }}
                    >
                      <i className={prop.icon} />
                      <p>
                        {prop.name}
                        <b className="caret" />
                      </p> 
                    </NavLink>
                    {
                      <CollapseWrap title="test" isActive={isOpen}></CollapseWrap>
                    }
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
