import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import TreeBuilder from './treebuilder';
import theme from './theme.scss';

export default class ComponentTree extends Component {

  static propTypes = {
    updateComponentData: PropTypes.func,
    data: PropTypes.array
  }

  render() {
    if (!this.props.data) return null;
    const cs = cx({
      [theme.treeParent]: true,
      [theme.node]: true,
    });
    return (
      <div className={cs}>
        {
          this.props.data.map((node, i) => {
            const key = i + 1;
            return <TreeBuilder node={node} updateComponentData={this.props.updateComponentData} key={key} path={'0'} />;
          })
        }
      </div>
    );
  }
}
