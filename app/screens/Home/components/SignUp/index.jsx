import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../../styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="card"
        styleName="sign-up"
      >
        <div className="card-body text-center">
          <h2 className="p-2 mb-3">
            <FormattedMessage id="home.sign_up.title" />
          </h2>
          <form>
            <div className="form-group">
              <FormattedMessage id="home.sign_up.email">
                {message => (
                  <input
                    className="form-control"
                    placeholder={message}
                    type="email"
                  />
                )}
              </FormattedMessage>
            </div>
            <div className="form-group">
              <FormattedMessage id="home.sign_up.password">
                {message => (
                  <input
                    className="form-control"
                    placeholder={message}
                    type="password"
                  />
                )}
              </FormattedMessage>
            </div>
            <button className="btn btn-block btn-primary">
              <FormattedMessage id="home.sign_up.action" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
