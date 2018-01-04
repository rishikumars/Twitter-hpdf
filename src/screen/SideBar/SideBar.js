import React from "react";
import { Image, StatusBar, Settings } from "react-native";
import {
  Header,
  Footer,
  Left,
  Right,
  Card,CardItem,
  Text,Body,
  Container,
  Thumbnail,
  List,
  ListItem,
  Content,
  View,
  Icon
} from "native-base";


export default class SideBar extends React.Component {
 
  
  render() {

   
    return (
      <Container style={{paddingTop:15}}>
				<Content>
					<Card>
						<CardItem>
						<View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
							<Thumbnail medium source={{uri: 'http://vignette3.wikia.nocookie.net/voice-actors-from-the-world/images/3/37/Zeno-Sama.png/revision/latest?cb=20160514013139'}} />
							<Text style={{fontWeight:'bold',paddingTop:10,fontSize:20}}>ZENO</Text>
									<Text note style={{width:1000,fontSize:17}}>@Zeno_Sama </Text>
							<View style={{flexDirection:'row',paddingTop:10}}>
							<Text style={{fontWeight:'bold',fontSize:17}}>690</Text>
							<Text note style={{fontWeight:'bold',fontSize:17,marginLeft:5}}>Following</Text>
							<Text style={{fontWeight:'bold',fontSize:17}}> 650</Text>
							<Text note style={{fontWeight:'bold',fontSize:17,marginLeft:5}}>Followers</Text>
								</View>
								</View>
						</CardItem>
						<CardItem style={{elevation:2,borderBottomWidth:4,borderTopWidth:2}}>
							<List>
							<ListItem style={{borderColor:'white'}}>
							<Icon name="ios-person-outline"/>
							<Text style={{marginLeft:10,fontWeight:'bold',fontSize:18,color:'#565656'}}>Profile</Text>
							</ListItem>
							<ListItem style={{borderColor:'white'}}>
							<Icon name="ios-list-box-outline"/>
							<Text style={{marginLeft:10,fontWeight:'bold',fontSize:18,color:'#565656'}}>Lists</Text>
							</ListItem>
							<ListItem style={{borderColor:'white'}}>									
							<Icon name="ios-thunderstorm-outline"/>
							<Text style={{marginLeft:10,fontWeight:'bold',fontSize:18,color:'#565656'}}>Moments</Text>
							</ListItem>
							<ListItem style={{borderColor:'white'}}>
							<Icon name="ios-copy-outline"/>
							<Text style={{marginLeft:10,fontWeight:'bold',fontSize:18,color:'#565656'}}>Highlights</Text>
							</ListItem>
							</List>
						</CardItem>
						<CardItem style={{elevation:3}}>
						<List>
							<ListItem style={{borderColor:'white'}}>
							<Text style={{fontWeight:'bold',fontSize:18,color:'#565656'}}>Settings and Privacy</Text>
							</ListItem>
							<ListItem style={{borderColor:'white'}}>
							<Text style={{fontWeight:'bold',fontSize:18,color:'#565656'}}>Help Center</Text>
							</ListItem>
							<ListItem style={{borderColor:'white'}}>
							</ListItem>
							</List>
						</CardItem>
						<CardItem style={{elevation:4}}>
							<Left> 
							<Icon style={{marginLeft:20,color:'#4885ed'}} name='ios-moon-outline'/>
						</Left>
						<Right>
							<Icon style={{marginRight:20,color:'#4885ed'}} name='qr-scanner'/>
						</Right>
						</CardItem>
					</Card>
				</Content>
				
					
						
			</Container>
    );
  }
}
