// MR. ROBOT
// Elliott Dahle

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var Menu = require('./Menu');

var MrRobot = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Mr. Robot',
          component: Menu,
        }}
        tintColor='red'
        titleTextColor='red'
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('MrRobot', () => MrRobot);

module.exports = MrRobot;
