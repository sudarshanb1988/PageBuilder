import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import { Button, Input, Checkbox, Select } from 'unchained_ui/client/components';  // eslint-disable-line import/no-unresolved,import/extensions
import theme from './settings.scss';

class Settings extends Component {
  static propTypes = {
    settings: PropTypes.object,
    data: PropTypes.object,
    hideSettingsModal: PropTypes.func,
    saveSettingsData: PropTypes.func,
    componentName: PropTypes.string
  }
  static defaultProps: {
    settings: [],
    data: {}
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
    this.settingsData = {};
  }
  componentDidMount() {
    this.settingsData = { ...this.props.data };
  }

  getTabContent = (tabConfig) => {
    let markup = null;
    const { data } = this.props;
    const { label, required, component, key } = tabConfig;
    switch (component.toLowerCase()) {
      case 'input' : markup = <Input {...tabConfig} value={(data ? data[key] : '')} onChange={this.handleInputChange(key)} />;
        break;
      case 'checkbox' :
        markup = (
          <div
            className={cx({
              [theme.checkbox]: true,
              [theme.checked]: data[key],
            })}
          >
            <Checkbox checked={data[key] || false} id={key} onChange={this.handleCheckboxChange(key)} />
            <label htmlFor={key} />
          </div>
        );
        break;
      case 'select' : markup = <Select {...tabConfig} value={(data ? data[key] : '')} onChange={this.handleInputChange(key)} />;
        break;
      default: break;
    }
    return (
      <div className={theme['tab-content']}>
        <div className={theme['tab-label']}>
          <span>
            {label}
            {required && <span className={theme.required}>*</span> }
          </span>
        </div>
        <div className={theme['tab-component']}>
          {markup}
          {tabConfig.help_text && <div className={theme.helpText}>{tabConfig.help_text}</div> }
        </div>
      </div>
    );
  }
  getTabsMarkup() {
    const tabs = Object.keys(this.props.settings);
    const btnMarkup = [];
    const contentMarkup = [];
    tabs.map((tab, i) => {
      const key = i + 1;
      if (tabs.length > 1) {
        btnMarkup.push(<Button key={key} className={(this.state.activeTabIndex === i) ? theme['active-tab'] : ''} label={tab.replace(/_/g, ' ')} onClick={this.changeTabs(i)} />);
      }
      contentMarkup.push(
        <div key={key} className={(this.state.activeTabIndex === i) ? '' : theme['hide-tab-content']}>
          { this.props.settings[tab].map((item) => {
            return this.getTabContent(item);
          })}
        </div>
      );
    });
    return (
      <div className={theme.content}>
        <div className={theme.header}>Settings for {this.props.componentName}</div>
        <div className={theme['tab-btn-container']}>{btnMarkup}</div>
        <div className={theme['tab-content-container']}>{contentMarkup}</div>
      </div>
    );
  }
  handleInputChange = (key) => (e) => {
    this.settingsData[key] = e.target.value;
  }
  handleCheckboxChange = (key) => (e) => {
    this.settingsData[key] = e.target.checked;
  }

  changeTabs = (index) => () => {
    this.setState({ activeTabIndex: index });
  }

  saveSettingsData = () => {
    this.props.saveSettingsData(this.settingsData);
  }

  render() {
    return (
      <div className={theme['settings-component']}>
        <div className={theme.overlay}>
          <div className={theme.modal}>
            {this.getTabsMarkup()}
            <div className={theme.footer}>
              <Button label="Save" buttonStyle="primary" onClick={this.saveSettingsData} />
              <Button label="Cancel" buttonStyle="secondary" onClick={this.props.hideSettingsModal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
