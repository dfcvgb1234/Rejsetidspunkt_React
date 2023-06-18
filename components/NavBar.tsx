import { Component, useRef } from 'react';
import { StyleSheet,View,Text } from "react-native";

class NavBar extends Component {
    render() {
        return (
            <View style={styles.content}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        bottom: "0%",
        height: "10%",
        width: "100%",
        backgroundColor: "blue",
    }
});


export default NavBar;