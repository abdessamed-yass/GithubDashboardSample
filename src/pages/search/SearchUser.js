import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Button from '../../views/Button';
import { Icon } from 'react-native-eva-icons';
import { Pixel, width, height } from '../../Config';
import { Colors } from '../../Colors';
import searchService from '../../services/searchService';
import BlurOverlay, { closeOverlay, openOverlay } from 'react-native-blur-overlay';
import ErrorModal from "../../views/ErrorModal";
import EmptyModal from '../../views/EmptyModal';
class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Keyword: '',
      searchResults: [],
      selectedItem: {},
      error: '',
      errorModal: false,
      emptyModal: false,
      userFound: false,
      timeOut: null,
      count: 0
    };
  }

  startSearch = (text) => {
    // pour eviter le lancement de plusieurs WS , wait for 1.5 sec et voir si l'utilisateur changed son text
    this.setState({ Keyword: text });
    if (this.state.timeOut) {
      clearTimeout(this.state.timeOut);
    }
    if (text) {
      this.state.timeOut = setTimeout(() => {
        searchService.searchUser(text, (p) => this.setState(p), openOverlay)
      }, 1500);
    }

  }


  selectItem = (item) => {
    this.setState({ userFound: true, Keyword: item.login, selectedItem: item, searchResults: [] })
    Keyboard.dismiss()
  }



  handleClickOk = () => {
    if(this.state.Keyword){
      this.setState({ userFound: false })
      this.setState({ Keyword: '' })
      this.props.navigation.navigate("Repositories", { myUser: this.state.selectedItem })
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container} >

        <View style={styles.autocompleteContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Username"
              returnKeyType="search"
              style={styles.searchBox}
              placeholderTextColor="#c1c0c0"
              onChangeText={(text) => this.startSearch(text)}
              value={this.state.Keyword}
            />
            {
              this.state.userFound ?
                <Button style={styles.btnStyleEnabled} press={() => this.handleClickOk()} text='SEARCH' />
                :
                <Button disabled={true} style={styles.btnStyleDisbaled} press={() => this.handleClickOk()} text='SEARCH' />
            }
          </View>
          <FlatList
            keyboardShouldPersistTaps={'handled'}
            data={this.state.searchResults}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() =>
                    this.selectItem(item)
                  }>
                  <Text style={styles.itemStyle}>{item.login}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            style={styles.searchResultsContainer}
          />

        </View>
        <ErrorModal
          title="Erreur!"
          subTitle={this.state.error}
          show={this.state.errorModal}
          toggle={() => { (this.setState({ errorModal: false })), closeOverlay() }}
        />
        <EmptyModal
          title="Utilisateur non trouvé!"
          subTitle={this.state.error}
          show={this.state.emptyModal}
          toggle={() => { (this.setState({ emptyModal: false })), (this.state.Keyword = ""), closeOverlay() }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: "#fff",
    flex: 1,
  },
  containerBody: {
    justifyContent: 'center',
    backgroundColor: "#000",
    justifyContent: "center",
    alignContent: "center",
    alignContent: "center",
    flex: 1
  },
  header: {
    height: Pixel * 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#5ce2fd",
    paddingLeft: 20 * Pixel,
    marginBottom: Pixel * 10
  },
  headerText: {
    flex: 1,
    fontSize: 17,
    fontStyle: "normal",
    lineHeight: 24,
    letterSpacing: 0,
    marginRight: 20 * Pixel,
    textAlign: "center",
    color: Colors.white,
    alignItems: 'center',

  },


  autocompleteContainer: {
    flex: 1,
  },
  searchResultsContainer: {
    margin: 20 * Pixel,
    paddingBottom: 20 * Pixel,
    marginBottom: 40
  },

  resultItem: {
    justifyContent: 'center',
    height: 40,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ececec",
    paddingLeft: 15,
  },
  searchBox: {
    marginTop: 10 * Pixel,
    fontSize: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#ececec",
    color: '#000',
    backgroundColor: '#fff',
    flex: 1,
    marginHorizontal: 20 * Pixel,
  },
  btnStyleEnabled: {
    backgroundColor: Colors.PINK,
    marginRight: 40,

  },
  btnStyleDisbaled: {
    backgroundColor: Colors.PINK_INVALIDE,
    marginRight: 40,
  },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  itemStyle: {
    color: "#000"
  }
});

export default SearchUser;