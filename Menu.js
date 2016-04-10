// MR. ROBOT
// Elliott Dahle

var React = require('react-native');
var {
  Component,
  Dimensions,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var EpisodesScreen = require('./EpisodesScreen');
var TrailerScreen = require('./TrailerScreen');

var Menu = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('./mrrobot.png')}
            style={styles.logo} 
            resizeMode='contain'/>
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={'grey'}
            onPress={() => this._trailerButtonTapped()}>
            <Text style={styles.button}>{'Watch Trailer'}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.9}
            underlayColor={'grey'}
            onPress={() => this._episodesButtonTapped()}>
            <Text style={styles.button}>{'View Episodes'}</Text>
          </TouchableHighlight>          
          </View>
      </View>
    );
  },

  // touchableHighlightWithTextandOnPress: function(text, onPress) {
  //   return (
  //     <TouchableHighlight
  //       activeOpacity={0.9}
  //       underlayColor={'grey'}
  //       onPress={() => onPress}>
  //       <Text style={styles.button}>{text}</Text>
  //     </TouchableHighlight>
  //   );
  // },

  _trailerButtonTapped: function() {
     this.props.navigator.push({
      title: "Trailer",
      component: TrailerScreen,
    });
  },

  _episodesButtonTapped: function() {
    this.props.navigator.push({
      title: "Episodes",
      component: EpisodesScreen,
    });
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  content: {
    paddingTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  button: {
    fontWeight:'bold',
    fontSize:20,
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
  },
});

module.exports = Menu;
