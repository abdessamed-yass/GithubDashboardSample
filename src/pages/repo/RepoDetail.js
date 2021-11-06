
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, AppState, Image, Linking } from "react-native";
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

export default class RepoDetail extends Component {
 

    render() {
        const repo = this.props.route.params.myRepo
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={{ color: Colors.BLACK ,fontWeight: 'bold',fontStyle: 'italic'}}>{repo.owner.login}</Text>
                    <Image
                        style={{ width: 70, height: 70, marginHorizontal: 10, marginVertical: 10, borderRadius: 70 }}
                        source={{ uri: repo.owner.avatar_url }}
                    />
                    <TouchableOpacity onPress={() =>
                           Linking.canOpenURL(repo.html_url).then(supported => {
                            if (supported) {
                              Linking.openURL(repo.html_url);
                            } else {
                              console.log("Don't know how to open URI: " + this.props.url);
                            }
                          })
                    }>
                        <Text style={styles.styleUrl}>{repo.html_url}</Text>

                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.styleNameProject}>{repo.name}</Text>
                    <Text  style={styles.styleDescription}>{ repo.description}</Text>
                    <Text style={styles.styleNameProject}>{repo.language}</Text>
                </View>
                <View style={{ justifyContent: "center", justifyContent: "center", alignItems: "center" }}>

                    <Text style={styles.styleDate}>{'Date creation :  ' + repo.created_at}</Text>
                    <Text style={styles.styleDate}>{'Date de modificaion : ' + repo.updated_at}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 20
    },
    head: {
        marginVertical:30,
        maxHeight: 150,
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 20
    },
    styleNameProject: {
        marginHorizontal:20,
        textAlign:"center",
        marginTop:5,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        color: Colors.RED,
        fontSize: 20
    },
    styleDescription: {
        marginTop:10,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        textAlign:"center",
        color: Colors.BLACK,
        fontSize: 14,
        marginHorizontal:20
    },
    styleDate: {
        marginTop:10,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        textAlign:"center",
        color: Colors.BLACK,
        fontSize: 9,
        marginHorizontal:20
    },
    styleUrl:{
        marginTop:10,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: "center",
        textAlign:"center",
        color: Colors.BLUE,
        fontSize: 14,
        textDecorationLine: 'underline',
        marginHorizontal:20
    }
});