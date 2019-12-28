import React from "react";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Signature } from "../img/signature.svg";
class Nav extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      animatedClassName: "",
      svgClassName: ""
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false, animatedClassName: "", svgClassName: "" });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
    if (this.state.menuOpen === false) {
      this.setState({ animatedClassName: "animated-in", svgClassName: "stroke-animated" });
      setTimeout(() => {
        this.setState({ animatedClassName: "animated" });
      }, 500);
    } else {
      this.setState({ animatedClassName: "", svgClassName: "" });
    }
  }

  render() {
    return (
      <>
        <div
          className={`button_container ${
            this.state.menuOpen ? "close_menu" : "open_menu"
          }`}
          onClick={() => this.toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Menu
          right
          disableAutoFocus
          width={"100%"}
          noOverlay
          customBurgerIcon={false}
          customCrossIcon={false}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <div className="bm-menu-content">
            <nav className="bm-menu-list">
              <ul>
                <li className={this.state.animatedClassName}>
                  <a
                    href="https://www.behance.net/antonettiserena"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>Behance</h1>
                  </a>
                </li>
                <li className={this.state.animatedClassName}>
                  <a
                    href="https://www.linkedin.com/in/serena-antonetti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>Linkedin</h1>
                  </a>
                </li>
                <li className={this.state.animatedClassName}>
                  <a
                    href="https://github.com/serenastorm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1>Github</h1>
                  </a>
                </li>
              </ul>
            </nav>
            <p className={this.state.animatedClassName}>
              <a href="mailto:serena.antonetti@gmail.com?subject=Hi!">
                serena.antonetti@gmail.com
              </a>
            </p>
            <div className="preview">
              <div className="preview-image">
                <img src={require(`../img/calleis.jpg`)} alt="" />
              </div>
              <Signature className={`signature ${this.state.svgClassName}`}/>
            </div>
          </div>
        </Menu>
      </>
    );
  }
}

export default Nav;
