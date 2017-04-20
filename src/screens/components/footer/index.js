// @flow

import React from 'react';
import Col from 'src/ui/components/col';

class Footer extends React.Component {
  static displayName = 'Footer';

  render() {
    return (
      <Col gutter={{ top: 'medium', bottom: 'large' }} className="text-center">
        i2x Artificial Inteligence ®
      </Col>
    );
  }
}

export default Footer;
