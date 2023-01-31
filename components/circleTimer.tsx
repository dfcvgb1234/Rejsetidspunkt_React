import { Component, useRef } from 'react';
import { StyleSheet,View,Text } from "react-native";
import { CircularProgressBase } 
from 'react-native-circular-progress-indicator'; 
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2
  };

class CircleTimer extends Component {
    render() {
        
        const duration = GetDuration()

        return (
            <View style={[styles.content, styles.allBorders]}>
                <CircularProgressBase value={50}/>
            </View>
        );
    }
}

function GetDuration() : Int32 {

    return 60000;
}

const styles = StyleSheet.create({
    content: {
        position: "absolute",
        left: "15%",
        top: "30%",
        padding: 10,
        height: "30%",
        width: "70%",
        backgroundColor: "white",

        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    allBorders: {
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 25
    },

    headerText: {
        fontWeight: 'bold'
    }
});

const circleStyles = StyleSheet.create({
    circleWrap: {
        width: 220,
        height: 220,
        backgroundColor: "green",
        borderRadius: 220/2,
        borderColor: "black"
    },
    fillMask: {
        width: 220,
        height: 220,
        position: 'absolute',
        borderRadius: 220/2,
    },
    fill: {
        backgroundColor: "blue"
    }
})

export default CircleTimer;
