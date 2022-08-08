import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default function App() {
  const [user, setUser] = useState('KIMANI')
  const [shoe,setShoe] = useState({name:'guchi',price: 8})
  const changeUser = () => {
    setUser('MBWAK')
    setShoe({name: 'ankara', price: 1200})
  }
  console.log(shoe)
  return (

    <View style={styles.container}>
      <Text style={styles.mystyles}>{user} is wearing {shoe.name} worth {shoe.price}</Text>
       <TextInput style={styles.textinput}
       placeholder='changename'
       onChange={e=>setUser(e.target.value)}
       />

      <TextInput style={styles.textinput}
       placeholder='change shoe'
       onChange={e=>setShoe({...shoe, shoe: e.target.value})}
       />
        <TextInput style={styles.textinput}
       placeholder='change price'
       onChange={e=>setShoe({...shoe, price: e.target.value})}
       multiline
       />
       
      
  <View style={{margin:10}}><Button style={styles.buttonStyle} onPress={changeUser} title='change'/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mystyles: {
    backgroundColor: 'yellow',
  
},
buttonStyle: {
  color: 'red',
  marginTop: 20,
  padding: 20,
  backgroundColor: 'green'
},
textinput: {
  borderWidth: 1,
  borderColor: 'brown',
  width: 300,
  height: 50,
  padding: 10,
  margin: 10,
  borderRadius: 20,


}


});
