import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import {bindActionCreators} from 'redux';
import TodoApp from '../components/todoApp';
import * as todoActions from '../actions/todoActions';
import {connect} from 'react-redux';

class TodoAppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {names, filter, dispatch} = this.props;
    return (
      <TodoApp
        names={names.names}
        filter={filter.filter}
        {...bindActionCreators(todoActions, dispatch)}
      />
    );
  }
}

function mapState(state) {
  console.log('data', state);
  return {names: state.addTodoReducer, filter: state.filterTodoReducer};
}

export default connect(mapState)(TodoAppContainer);
