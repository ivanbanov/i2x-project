// @flow

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getRecords as getRecordsAction } from 'src/actions/records';
import Header from 'src/screens/components/header';
import Footer from 'src/screens/components/footer';
import Col from 'src/ui/components/col';
import Container from 'src/ui/components/container';
import classNames from 'classnames';
import Record from './components/record';
import styles from './styles.styl';

class RecordsScreen extends React.Component {
  static displayName = 'RecordsScreen';

  static propTypes = {
    records: PropTypes.arrayOf(PropTypes.object).isRequired,
    getRecordsAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    records: [],
    getRecordsAction: () => [],
  };

  componentWillMount() {
    this.props.getRecordsAction();
  }

  render() {
    const { records } = this.props;

    return (
      <div>
        <Helmet>
          <title>Records 🔈</title>
        </Helmet>

        <Header />

        <Container>
          <Col gutter={{ top: 'large', bottom: 'large' }} className={styles.title}>
            <h1 className={classNames(
              styles.title,
              'text-huge text-center text-uppercase'
            )}>
              Records
            </h1>
          </Col>

          {
            !records.length &&
            <Col gutter="large" className="text-center text-large text-bold">Loading...</Col>
          }

          <div className={styles.listRecords}>
            {
              records.map((record, key) => (
                <Col
                  key={key}
                  size={{ small: 12, medium: 8 }}
                  gutter={{ left: 'large', right: 'large', top: 'medium', bottom: 'medium' }}
                >
                  <Record record={record} />
                </Col>
              ))
            }
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state: Object): Object {
  const { records } = state.recordsReducer;

  return { records };
}

function mapDispatchToProps(dispatch: Function): Object {
  return bindActionCreators({ getRecordsAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordsScreen);
