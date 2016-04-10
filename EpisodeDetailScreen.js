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

var EpisodeDetailScreen = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={{uri: this.props.episode.episodeImage}}
            style={styles.episodeImage} 
            resizeMode='contain'/>
          <Text style={styles.episodeDescription}>{this.props.episode.episodeDescription}</Text>
          </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  content: {
    paddingTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  episodeDescription: {
    fontSize:20,
  },
});

module.exports = EpisodeDetailScreen;
