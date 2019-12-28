import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router";

class ScrollToTop extends React.Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 200);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
