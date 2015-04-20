/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Component
} = React;

class ReactTodo extends Component {
  getInitialState(){
    return {task: ''}
  }

  render(){
    return (
      <View style={ styles.container } >
      	<TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 8 }}
	  onChange={(text) => this.setState({task: text})}
	  />
      	<TouchableOpacity onPress={this._onPressButton}>
	  Add
	</TouchableOpacity>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  button: {
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactTodo', () => ReactTodo);
