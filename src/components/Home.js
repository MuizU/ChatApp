import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
}from 'react-native';
class Home extends React.Component{
  state = {
    name:'',
  }
  render(){
    return(
    <View>
    <Text style={styles.title}>
    Enter your name:
    </Text>
    <TextInput
      style={styles.nameInput}
      placeholder='Muiz Uvais'
      onChangeText={(text) => {
        this.setState({
          name:text,
        });
      }
      }
    />
    <TouchableOpacity
    onPress>
    <Text style={styles.button}>
      Next
    </Text>
    </TouchableOpacity>
    </View>
  );
  }
}
var styles = StyleSheet.create({
  title:{
    marginTop:20,
    marginLeft:20,
    fontSize:20,
  },
  nameInput: {
    height:40,
    borderWidth:2,
    borderColor:'black',
    margin:20,
  },
  button:{
    marginLeft:20,
    fontSize:20,
  }
})
export default Home;
