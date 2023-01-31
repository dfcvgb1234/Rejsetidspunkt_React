import {View, Text, StyleSheet} from "react-native"
import Home from "./screens/Home"

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Home/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  }
})

export default App;