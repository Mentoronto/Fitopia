import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {

  const [clicked, setClicked] = useState(false)
  const [searchPhrase, setSearchPhrase] = useState("")
  return (
    <View style={styles.container}>
      <SearchBar setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} clicked={clicked} setClicked={setClicked}/>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.tsxasa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
