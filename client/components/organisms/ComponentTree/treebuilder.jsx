import React, { PropTypes, Component } from 'react';
import { Button } from 'unchained_ui/client/components';
import cx from 'classnames';
import { deepCopy } from 'utils';
import Settings from './settings.jsx';
import Config from './Config';
import theme from './theme.scss';

export default class TreeBuilder extends Component {

  static propTypes = {
    node: PropTypes.object,
    path: PropTypes.string,
    updateComponentData: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      revealChildren: false,
      menuItems: [],
      showSettings: false,
    };
  }

  getTreeMarkup = (data) => {
    const item = deepCopy(Config[data.component]);
    const cs = cx({
      fa: true,
      'fa-caret-right': !this.state.revealChildren,
      'fa-caret-down': this.state.revealChildren,
    });
    return (
      <div className={theme.nodeButtonCtnr}>
        <Button className={theme.nodeButton} onClick={this.toggleChildren}>
          { data.children && data.children.length > 0 ? <i className={cs} /> : null }
          <span>{item.displayName}</span>
        </Button>
        {
          <div className={theme.nodeOptions}>
            {
              (item.contents && item.contents.length > 0) &&
              <Button
                className={theme.nodeButton}
                onBlur={this.setMenuContents([])}
                onClick={this.setMenuContents(item.contents)}
                icon="plus"
              >
                { this.state.menuItems.length > 0 ? this.createMenu() : null }
              </Button>
            }
            {
              (!item.disableDelete) &&
              <Button className={theme.nodeButton} onClick={this.deleteData()} icon="delete" />
            }
            {
              (item.settings && Object.keys(item.settings).length > 0) &&
              <Button className={theme.nodeButton} onClick={this.showSettingsModal} icon="settings" />
            }
          </div>
        }
      </div>
    );
  }

  setMenuContents = (contents) => () => {
    event.stopPropagation();
    this.setState({ menuItems: contents, revealChildren: true });
  }

  getSettingsPanel() {
    if (this.state.showSettings) {
      const compName = this.props.node.component;
      const { settings } = Config[compName];
      return (
        <Settings
          saveSettingsData={this.saveSettingsData}
          data={this.props.node.settings}
          settings={settings}
          hideSettingsModal={this.hideSettingsModal}
          componentName={compName}
        />
      );
    }
    return null;
  }

  createMenu = () => {
    return (
      <ul className={theme.contentsMenu}>
        {
          this.state.menuItems.map((item, i) => {
            const key = i + 1;
            const comp = Config[item];
            return (
              /*eslint-disable*/
              <li key={key}>
                <a onClick={this.addData(item)}>{ comp.displayName }</a>
              </li>
              /*eslint-enable*/
            );
          })
        }
      </ul>
    );
  }

  addData = (compName) => () => {
    event.stopPropagation();
    const compData = deepCopy(Config[compName].data);
    this.props.updateComponentData(this.props.path, compData, 'add');
  }

  deleteData = () => () => {
    event.stopPropagation();
    this.props.updateComponentData(this.props.path, null, 'delete');
  }

  toggleChildren = () => {
    event.stopPropagation();
    this.setState({ revealChildren: !this.state.revealChildren });
  }

  buildTree() {
    const cs = cx({
      [theme.node]: true,
      [theme.hideNode]: !this.state.revealChildren,
    });
    const children = this.props.node.children;

    if (children && children.length > 0) {
      const items = children.map((node, i) => {
        const key = i + 1;
        return (
          <li key={key}>
            <TreeBuilder node={node} updateComponentData={this.props.updateComponentData} path={`${this.props.path}-${i}`} />
          </li>
        );
      });
      return (
        <ul className={cs}>
          {items}
        </ul>
      );
    }
    return null;
  }
  saveSettingsData = (data) => {
    this.props.updateComponentData(this.props.path, data, 'settings');
    this.hideSettingsModal();
  }
  hideSettingsModal = () => {
    this.setState({ showSettings: false });
  }
  showSettingsModal = () => {
    this.setState({ showSettings: true });
  }

  render() {
    return (
      <div>
        {this.getTreeMarkup(this.props.node)}
        {this.buildTree()}
        {this.getSettingsPanel()}
      </div>
    );
  }
}
