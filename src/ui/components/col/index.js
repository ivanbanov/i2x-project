// @flow

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.styl';
import mediaQuery from '../../styles/mixins/media-query.styl';

const MAX_COLS: number = Number(styles.COLS);
const COLS: Array<number> = [...Array(MAX_COLS)].map((_, i) => (i + 1));

class Col extends React.Component {
  static displayName = 'Col';

  static propTypes = {
    gutter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(COLS),
      PropTypes.object,
    ]),
    className: PropTypes.string,
  };

  static defaultProps = {
    gutter: {},
  };

  render() {
    const {
      gutter,
      size,
      children,
      className,
      style,
      ...otherProps
    } = this.props;

    let gutterConfig: Object;
    let sizeConfig: Array<Object> = [];

    if (typeof gutter === 'string') {
      gutterConfig = {
        top: gutter,
        bottom: gutter,
        left: gutter,
        right: gutter,
      };
    } else {
      gutterConfig = gutter;
    }

    if (typeof size === 'number') {
      sizeConfig = [{
        [styles[`col-small-${size}`]]: true,
      }];
    } else if (typeof size === 'object') {
      sizeConfig = Object
        .keys(mediaQuery)
        .reduce((arr, breakpoint) => {
          const breakpointSize = size[breakpoint];

          return [
            ...arr,
            { [styles[`col-${breakpoint}-${breakpointSize}`]]: !!size[breakpoint] },
          ];
        }, []);
    }

    const classes: string = classNames(
      // gutters
      { [styles[`gutter-top-${gutterConfig.top}`]]: !!gutterConfig.top },
      { [styles[`gutter-bottom-${gutterConfig.bottom}`]]: !!gutterConfig.bottom },
      { [styles[`gutter-left-${gutterConfig.left}`]]: !!gutterConfig.left },
      { [styles[`gutter-right-${gutterConfig.right}`]]: !!gutterConfig.right },

      // cols
      ...sizeConfig,

      // other classes
      className,
    );

    return (
      <div className={classes} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Col;
