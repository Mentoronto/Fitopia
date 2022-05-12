import { StyleSheet, TextInput, Keyboard, Button, Pressable } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  clicked: boolean;
  setClicked: (active: boolean) => void;
  searchPhrase: string;
  setSearchPhrase: (active: string)=>void
}
const SearchBar = ({clicked,searchPhrase, setSearchPhrase, setClicked}: Props ) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        {/* Search Icon  */}
        <FontAwesome
           name="search"
           size={20}
           color='black'
        />
        {/* Input Field> */}
        <TextInput
          style={styles.input}
          placeholder="Search Workout"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
         {/* cross Icon, depending on whether the search bar is clicked or not */}
         {clicked && (
        <Entypo 
          name="cross" 
          size={22} 
          color="white" 
          style={styles.cancelButton} 
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
            setSearchPhrase("");
        }}/>
        )}
      </View>
        {/* cancel button, depending on whether the search bar is clicked or not */}
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  input:{
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelButton:{
    position:'absolute',
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 25,
    right:-10,
    top:-10,
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "80%",
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 5,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
