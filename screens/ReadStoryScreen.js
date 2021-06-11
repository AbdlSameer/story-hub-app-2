import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class ReadStoryScreen extends React.Component{
    render(){
      return(
        <View>
        <View style= {styles.header}>
              <Text style={styles.headerText}>
              Story Hub</Text>
            </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>ReadStory </Text>
        </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  
    container: {
    flex:1,
    backgroundColor: 'orange',
  },
  header: {
    backgroundColor: '#FF86B2',
    borderRadius: 10,
    borderWidth: 1.5,
    height: 75,
    justifyContent: 'center'
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  
})

