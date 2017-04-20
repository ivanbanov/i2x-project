// @flow

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Container from 'src/ui/components/container';
import Grid from 'src/ui/components/grid';
import Col from 'src/ui/components/col';
import imgLogo from 'src/ui/assets/images/i2x-logo-dark.png';
import { logout as logoutAction } from 'src/actions/auth';
import styles from './styles.styl';

const DEFAULT_GUTTER = {
  top: 'small',
  bottom: 'small',
  left: 'medium',
  right: 'medium',
};

class Header extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    logoutAction: PropTypes.func.isRequired,
    user: PropTypes.object,
  }

  render() {
    const { logoutAction: logout } = this.props;

    return (
      <div className={styles.navbar}>
        <Container>
          <Grid>
            <Col size={6} gutter={DEFAULT_GUTTER}>
              <img src={imgLogo} className={styles.imgLogo} />
            </Col>

            <Col size={6} gutter={DEFAULT_GUTTER} className={styles.info}>
              <div>
                <span className="text-semibold">i2x User</span>
                <span> - </span>
                <span>
                  (<a
                    className="text-uppercase text-small"
                    onClick={logout}>
                    Logout
                  </a>)
                </span>
              </div>
            </Col>
          </Grid>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state: Object): Object {
  return { user: state.authReducer.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
