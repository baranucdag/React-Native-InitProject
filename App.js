import React,{useState} from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function MyCustombutton(props) {
  return (
    <TouchableOpacity style={[styles.button,props.style]} onPress={props.onPress}>
      <Text style={styles.buttontext}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function App() {

  const [count, setCount] = useState(0);  
  
  const handleİncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView >
      <View>
        <Text style={styles.text}> This is first component</Text>
        <Image
          style={styles.image}
          source={{ uri: "https://wallpapercave.com/w/wp4923981.jpg" }}
        />
        <Text style={styles.text}>Count : {count}</Text>
      </View>

      <View style={styles.buttonContainer}>
       
        <MyCustombutton title="Decrement -" onPress={handleDecrement}></MyCustombutton>
        <MyCustombutton title="Increment +" onPress={handleİncrement}></MyCustombutton>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#0314ad",
    margin: 15,
  },
  image: {
    marginHorizontal: 16,
    borderRadius: 12,
    height: 180,
  },
  button: {
    fontSize: 20,
    flex:1,
    textAlign: "center",
    margin: 15,
    backgroundColor: "lightblue",
    borderRadius: 12,
  },
  buttontext: {
    fontSize: 20,
    textAlign: "center",
    margin: 15,
  },
  buttonContainer: {
    marginTop:16,
    flexDirection:"row",

  },
});

export default App;
