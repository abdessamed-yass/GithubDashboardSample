
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, AppState, Image } from "react-native";
import _ from "lodash";
import { FlatList } from "react-native-gesture-handler";
import searchService from "../../services/searchService";
import Loading from "../../views/Loading";
import { Icon } from 'react-native-eva-icons';
import { Pixel } from "../../Config";
import { Colors } from "../../Colors";
import { closeOverlay, openOverlay } from 'react-native-blur-overlay';
import ErrorModal from "../../views/ErrorModal";
import EmptyModal from "../../views/EmptyModal";

export default class UserRepo extends Component {
    state = {
        page: 1,
        hasMoreResult: true,
        isFetching: false,
        data: [],
        error: '',
        emptyModal: false,
        errorModal: false
    };


    async loadData(page, user) {
        //check s'il reste encore des repos à recupérer
        if (this.state.hasMoreResult) {
            searchService.getRepos(page, user, this.state, (p) => this.setState(p), openOverlay)
        }else{
            console.log("no more result")
        }
    }

    async componentDidMount() {
        //get user login
        const user = this.props.route.params.myUser.login
         this.loadData(this.state.page, user);
    }

    footer = () => {
        return (
            <View style={styles.loadingStyle}>
                <Loading show={this.state.isFetching} />
            </View>
        );
    };

    render() {
        const user = this.props.route.params.myUser.login
        const avatar_url = this.props.route.params.myUser.avatar_url
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={{ color: Colors.BLACK, fontWeight: 'bold', fontStyle: 'italic' }}>{user}</Text>
                    <Image
                        style={{ width: 70, height: 70, marginHorizontal: 10, marginVertical: 10, borderRadius: 70 }}
                        source={{ uri: avatar_url }}
                    />
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.resultItem}
                                    onPress={() =>
                                        this.props.navigation.navigate("Detail", { myRepo: item })
                                    }>

                                    <Icon style={styles.iconStyle} name='folder-outline' width={Pixel * 20} height={Pixel * 20} fill={Colors.BLACK} />
                                    <View style={styles.viewStyle}>
                                        <Text style={styles.textStyle}>{item.full_name}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReached={async () => this.loadData(this.state.page, user)}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={this.footer}

                    />
                </View>
                <ErrorModal
                    title="Erreur!"
                    subTitle={this.state.error}
                    show={this.state.errorModal}
                    toggle={() => { (this.setState({ errorModal: false })), closeOverlay() }}
                />

                <EmptyModal
                    title="Aucun dépot trouvé !"
                    subTitle={this.state.error}
                    show={this.state.emptyModal}
                    toggle={() => { (this.setState({ emptyModal: false })), closeOverlay(), this.props.navigation.goBack() }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultItem: {
        marginHorizontal: 20 * Pixel,
        flex: 1,
        flexDirection: "row",
        marginVertical: 20
    },
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    iconStyle: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
    },
    textStyle: {
        color: '#000',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    container: {
        flexDirection: "column",
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 20
    },
    list: {
        backgroundColor: "#fff",
        flex: 1,
    },
    head: {
        maxHeight: 150,
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 20
    },
    loadingStyle: {
        paddingVertical: 10,
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});