import React, { PropTypes, Component } from 'react';
import Registry from './_registry';
import theme from './theme.scss';

const welcomeText = 'Start Building your page by adding the components from right menu.';

export default class ComponentBuilder extends Component {

  static propTypes = {
    data: PropTypes.array,
  }

  buildComponents(data) {
    const { children, component, settings } = data;
    if (!children) return null;
    if (children.length === 0) {
      if (component === 'page') {
        return <div className={theme.welcomeText}>{welcomeText}</div>;
      }
      return Registry(component, null, settings);
    }
    return children.map((comp) => {
      const { children, component, settings } = comp;
      const contents = (children.length > 0 ? this.buildComponents(comp) : null);
      return Registry(component, contents, settings);
    });
  }

  render() {
    return (
      <div className={theme.builderParent}>
        {this.buildComponents(this.props.data[0])}
      </div>
    );
  }
}
