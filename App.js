import React, { Component } from 'react';
import { Text, TextInput, 
  View, Button,
  StyleSheet,Alert,
  ScrollView, Image,
  FlatList, SectionList } from 'react-native';

export default class InputLine extends Component {

  _onPressButton(){
    Alert.alert('you tapped o the button..!')
  }
  _onPressButton1(){
    Alert.alert('click first then second..!')
  }

  render() {
    return(
      <ScrollView>
            <View style={{ padding:10 }}>
              <TextInput 
              style={{height: 40}}
              placeholder = "type somthing..!" 
              onChangeText = {(text) => this.setState({text}) } 
              />
              <Text style={{padding:10, fontSize:40}}>
              </Text>
            
              <View style={styles.buttonContainer}>
                  <Button 
                    onPress={this._onPressButton}
                    title = 'press me'
                    />
              </View>

              <View style={styles.buttonContainer}>
                  <Button 
                    onPress={this._onPressButton1}
                    title = 'click me'
                    color='#000'
                    />
              </View>
                    <Text style={{fontSize: 50}}>scroll me plzzzz</Text>
                    <Image source={require('./img/stud.png') } 
                    style={{alignItems:'center', width: 250, height: 400}} ></Image>
            </View>

            <View>
              <FlatList
                data={[
                  {key: 'akash'},
                  {key: 'avinash'},
                  {key: 'cakash'},
                  {key: 'dakash'},
                  {key: 'eakash'},
                  {key: 'fakash'},
                  {key: 'gakash'},
                  {key: 'hakash'},
                ]}
                
                renderItem = {({item}) =>
                <Text style={styles.item}>{item.key}</Text> }>
              </FlatList>
            </View>
            <View>
              <Text style={{width:10, alignItems: 'center'}}>
                end of FlatList..!
              </Text>
            </View>
                <View>
                  <SectionList
                    sections={[
                      {title: 'a', data: ['astro','akash','avinash']},
                      {title: 'b', data: ['banana','blender']},
                      {title: 'c', data: ['cucpcake','cat']},
                      {title: 'd', data: ['donat','damru']},
                      {title: 'e', data: ['eclair','eliachi']},
                      {title: 'f', data: ['froyo 1.0','froyo 1.2','froyo 2.0']},
                      {title: 'g', data: ['ginger bread','gavani deevani']},
                      {title: 'h', data: ['honeycomb','honey']},
                      {title: 'i', data: ['ice-cream sandwich','icecream']},
                      {title: 'j', data: ['jellybean','jallebi']},
                      {title: 'k', data: ['kitkat','kites']},
                      {title: 'l', data: ['lollypop','london']},
                      {title: 'm', data: ['marshmellow','marry com']},
                      {title: 'n', data: ['noget','neutron']},
                    ]}

                    renderItem = {({item}) =>
                    <Text style={styles.item}>{item}></Text> }

                    renderSectionHeader = {({section}) =>
                    <Text style={styles.sectionHeader}>{section.title} ></Text> }

                    keyExtractor = {(item, index)=> index}
                  />
                  
                </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
      margin: 20,
      paddingHorizontal: 20,
      backgroundColor: '#2196F3'
    },
    item:{
      textAlign: 'center',
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    sectionHeader:{
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    }
  });