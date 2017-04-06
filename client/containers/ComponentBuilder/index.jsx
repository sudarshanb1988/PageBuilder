import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ComponentBuilder } from 'components';  // eslint-disable-line import/no-unresolved,import/extensions

import { ComponentTreeSelector } from 'stores/selectors';  // eslint-disable-line import/no-unresolved,import/extensions

class ComponentBuilderContainer extends Component {
  static propTypes = {
    data: PropTypes.array,
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <ComponentBuilder data={this.props.data} />
    );
  }
}

const mapStateToProps = (state) => ({
  data: ComponentTreeSelector.getPageData(state.ComponentTree)
});

export default connect(mapStateToProps)(ComponentBuilderContainer);
