import React from "react";
import { ReactComponent as SvgLogo } from "../img/logo.svg";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Logo extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  render() {
    const { location } = this.props;

    return (
      <div className={`logo ${location.pathname === "/" ? "homepage" : ""}`}>
        <Link to="/">
          <SvgLogo />
        </Link>
      </div>
    );
  }
}

export default withRouter(Logo);
