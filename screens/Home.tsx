import { Component } from 'react'
import { StyleSheet,View,Text } from "react-native"
import CircleTimer from "../components/circleTimer"
import CircularProgress from 'react-native-circular-progress-indicator'; 

class Home extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.topBackContent}>
                </View>
                <CircleTimer/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    main: {
        flex: 0,
        justifyContent: 'flex-start',
        height: "100%",
        width: "100%",
        backgroundColor: "white",
    },
    topBackContent: {
        height: "50%",
        width: "100%",
        backgroundColor: "red",
        borderBottomColor: "black",
        borderBottomWidth: 5
    }
})

export default Home;