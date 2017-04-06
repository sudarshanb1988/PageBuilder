import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { ComponentTree } from 'components';  // eslint-disable-line import/no-unresolved,import/extensions

import { ComponentTreeSelector } from 'stores/selectors';  // eslint-disable-line import/no-unresolved,import/extensions
import { ComponentTreeAction } from 'stores/actions';  // eslint-disable-line import/no-unresolved,import/extensions

class ComponentTreeContainer extends Component {
  static propTypes = {
    data: PropTypes.array,
    addPageData: PropTypes.func
  }

  handleDelete(path) {
    let pointer;
    path.map((k, i) => {
      if (i !== path.length - 1) {
        if (!pointer) {
          pointer = this.props.data[0];
        } else {
          pointer = pointer.children[k];
        }
      }
    });
    pointer.children.splice(path[path.length - 1], 1);
  }

  handleAdd(path, compData) {
    let pointer;
    path.map((k) => {
      if (!pointer) {
        pointer = this.props.data[0];
      } else {
        pointer = pointer.children[k];
      }
    });
    if (pointer.children instanceof Array) {
      pointer.children.push(compData);
    }
  }
  handleSettings(path, compData) {
    let pointer;
    path.map((k) => {
      if (!pointer) {
        pointer = this.props.data[0];
      } else {
        pointer = pointer.children[k];
      }
    });
    pointer.settings = Object.assign({}, compData);
  }

  saveData = (p, compData, action) => {
    if (!p) return;
    const path = p.split('-');
    switch (action) {
      case 'delete' :
        this.handleDelete(path);
        break;
      case 'add' :
        this.handleAdd(path, compData);
        break;
      case 'settings' :
        this.handleSettings(path, compData);
        break;
      default: break;
    }
    this.props.addPageData(this.props.data);
  }

  render() {
    if (!this.props) {
      return null;
    }
    return (
      <ComponentTree
        data={this.props.data}
        updateComponentData={this.saveData}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  data: ComponentTreeSelector.getPageData(state.ComponentTree)
});

const mapDispatchToProps = (dispatch) => ({
  addPageData: (arr) => dispatch(ComponentTreeAction.addPageData(arr))
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentTreeContainer);
