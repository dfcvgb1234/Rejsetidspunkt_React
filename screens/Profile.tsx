import { Component } from 'react'
import { StyleSheet,View,Text } from "react-native"

class Profile extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>This is a profile page</Text>
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
    }
});

export default Profile;