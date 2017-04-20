// @flow

import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'src/ui/components/col';

class NotFoundScreen extends React.Component {
  static displayName = 'NotFoundScreen';

  render() {
    return (
      <div>
        <Helmet>
          <title>NotFound ❌</title>
        </Helmet>

        <Col gutter="large">
          <h1>Page Not Found</h1>
        </Col>
      </div>
    );
  }
}

export default NotFoundScreen;
