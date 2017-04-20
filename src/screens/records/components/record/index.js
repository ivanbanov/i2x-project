// @flow

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'src/ui/components/grid';
import Col from 'src/ui/components/col';
import Icon from 'src/ui/components/icon';
import Rating from 'src/ui/components/rating';
import { setRating as setRatingAction } from 'src/actions/records';
import classNames from 'classnames';
import styles from './styles.styl';

class Record extends React.Component {
  static displayName = 'Record';

  static propTypes = {
    record: PropTypes.object.isRequired,
    setRatingAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    setRatingAction: () => null,
  };

  _setRating: Function;

  constructor(props: Object) {
    super(props);

    this._setRating = this._setRating.bind(this);
  }

  _setRating(value: number): void {
    const {
      record,
      setRatingAction: setRating,
    } = this.props;

    setRating(record.id, value);
  }

  render() {
    /* eslint-disable camelcase */
    const {
      rating,
      final_script,
      url,
      duration,
      created,
    } = this.props.record;

    return (
      <Col className={classNames(styles.record)} gutter="medium">
        <Grid>
          <Col size={{ small: 12, medium: 4 }}>
            <Col gutter={{ bottom: 'medium' }}>
              <Grid>
                <Col size={6}>
                  <Icon name="calendar" /> Created: {created}
                </Col>
                <Col size={6}>
                  <Icon name="clock" /> Time: {duration}
                </Col>
              </Grid>
            </Col>

            <Col gutter={{ bottom: 'medium' }}>
              <audio controls="controls" >
                <source src={url} />
              </audio>
            </Col>

            <Col gutter={{ bottom: 'medium' }}>
              <Rating
                rating={rating}
                onClick={this._setRating}
              />
            </Col>
          </Col>
          <Col size={{ small: 12, medium: 8 }} gutter={{ left: 'medium' }}>
            {final_script}
          </Col>
        </Grid>
      </Col>
    );
    /* eslint-enable camelcase */
  }
}

function mapStateToProps(state: Object): Object {
  const { ratings } = state.recordsReducer;

  return { ratings };
}

function mapDispatchToProps(dispatch: Function): Object {
  return bindActionCreators({ setRatingAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Record);
