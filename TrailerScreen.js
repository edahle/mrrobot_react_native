// MR. ROBOT
// Elliott Dahle

var React = require('react-native');
var {
  Component,
  Dimensions,
  StyleSheet,
  View,
  WebView,
} = React;

var TrailerScreen = React.createClass({
  render() {
    return (
      <View style={styles.webView}>
        <WebView
          automaticallyAdjustContentInsets={false}
          style={styles.container}
          source={{uri: "https://www.youtube.com/embed/Ug4fRXGyIak"}}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  webView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: 200,
  },
});

module.exports = TrailerScreen;
