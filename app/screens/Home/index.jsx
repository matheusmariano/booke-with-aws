import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import MainMenu from './components/MainMenu/';
import SignUp from './components/SignUp/';
import './styles.scss';

class HomeScene extends Component {
  static get contextTypes() {
    return {
      intl: PropTypes.object.isRequired,
    };
  }

  componentWillMount() {
    document.title = this.formatMessage({ id: 'home.page_title' });
  }

  formatMessage(props) {
    return this.context.intl.formatMessage(props);
  }

  render() {
    return (
      <section>
        <MainMenu />
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div
              className="col-md-6 col-lg-5 col-xl-4 text-center text-md-left"
              styleName="hero__section"
            >
              <h1 className="display-4">
                <FormattedMessage id="home.hero.title" />
              </h1>
              <p className="lead">
                <FormattedMessage id="home.hero.description" />
              </p>
            </div>
            <div
              className="col-md-6 col-lg-5 col-xl-4 align-items-center align-items-md-end"
              styleName="hero__section"
            >
              <SignUp />
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light justify-content-center">
          <span className="navbar-text">
            <FormattedMessage
              id="home.footer.message"
              values={{
                author: (
                  <a
                    href="https://github.com/matheusmariano"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Matheus Mariano</span>
                  </a>
                ),
              }}
            />
          </span>
        </nav>
      </section>
    );
  }
}

HomeScene.propTypes = {
};

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeScene),
);
