import React from 'react';
import { TouchableWithoutFeedback,Image, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container,Thumbnail, Header, Title,Item,Input, Left, Icon, Right, Button, Body, Content, Fab, Tab, 
  Tabs, TabHeading,Text } from "native-base";

const HomeHeader = (props) => {
  const {navigation,tabKey} =props;
  let body=null;
  if(tabKey=='Search') 
  { body=<Body style={{flex:1,flexDirection:"row"}}>
    <Item rounded style={{width: 250,height:30, backgroundColor: 'lightgrey'}}>
    <Input placeholder="Search Twitter"  onChangeText={(text) => navigation.navigate("SearchScreen")}/>
   </Item>
 <Icon name="ios-person-add-outline" style={{color:'#02a8ef',marginLeft:20}}/>   
   </Body>;
  } else {
    body=<Body >
    <Title style={{color: 'black',alignContent: 'flex-start'}}>{tabKey}</Title>
    </Body>
  }
return (
    <Header hasTabs style={{backgroundColor:'white'}}>    
    <Left>   
       <Button
        transparent
        onPress={() => navigation.navigate("DrawerOpen")}>         
        <Thumbnail small source={{uri: 'http://vignette3.wikia.nocookie.net/voice-actors-from-the-world/images/3/37/Zeno-Sama.png/revision/latest?cb=20160514013139'}}  />
    </Button>
    </Left>
   {body}
    <Right/>
    </Header>
  );
};

export default HomeHeader;
