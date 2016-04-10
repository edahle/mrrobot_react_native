// MR. ROBOT
// Elliott Dahle

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  Component,
  Dimensions,
  Image,
  ListView,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var EpisodeDetailScreen = require('./EpisodeDetailScreen');

const REQUEST_URL = "http://localhost:8081/mrrobot.json"

var EpisodesScreen = React.createClass({
    getInitialState: function() {
    return {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
          isLoading: false,
        });
      })
      .done();
  },

  componentDidMount: function() {
    this.fetchData();
  },

  render() {
      if (this.state.isLoading) {
        return this.renderLoadingView();
      }

      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEpisode}
          renderSeparator={this.renderEpisodeCellSeparator}
          style={styles.listView}
        />
      );
  },

  renderLoadingView: function() {
    return <ActivityIndicatorIOS style={styles.activityIndicator} />;
  },

  renderEpisodeCellSeparator(sectionID, rowID, adjacentRowHighlighted) {
    console.log(sectionID + "_" + rowID)
    return <View key={sectionID + "_" + rowID} style={styles.rowSeparator}/>
  },

  renderEpisode(episode, section, row, higlightRow) {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={'grey'}
        onPress={() => this.showEpisodeDetail(episode)}>
        <View style={styles.container}>
          <Image
            source={{uri: episode.episodeImage}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.episodeTitle}>{episode.episodeTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  showEpisodeDetail(episode) {
    this.props.navigator.push({
      title: episode.episodeTitle,
      component: EpisodeDetailScreen,
      passProps: {episode},
    });
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  episodeTitle: {
    fontSize: 17,
    textAlign: 'center',
  },
  thumbnail: {
    width: Dimensions.get('window').width / 3,
    height: 100,
  },
  listView: {
    paddingTop: 64,
    backgroundColor: '#F5FCFF',
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = EpisodesScreen;