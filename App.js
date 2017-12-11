import React, { Component } from 'react';
import {Image,View} from 'react-native';
import {Drawer, Container, Header, Tab, Tabs, TabHeading, Icon, Text,Card,CardItem,Thumbnail,Left,Right,Fab,Body,Content,Button,Footer,Item ,Input,InputGroup,Title,List,ListItem} from 'native-base';
class Search extends React.Component{
	render(){
		return(
		    <Container>
				<Header searchBar  style={{marginTop:25,paddingTop:10,paddingBottom:10,backgroundColor:'white'}}>
					<Item>
						<Button  transparent>
						<Icon name="md-arrow-back" style={{color:'#02a8ef'}}  />
						</Button>
						<Input placeholder="Search Twitter"  />
					</Item>
				</Header>
		    </Container>
			   );
			}
								   }
class Foot extends React.Component{
	render(){
		return(
			<Footer style={{backgroundColor:'transparent'}} >
				<View style={{flex:1}}>
					<View style={{flexDirection:'row' }}>
						<Button transparent style={{ paddingLeft:10,paddingTop:10,width:80}}>
						<Text style={{fontSize:17,color:'#02a8ef',fontWeight:'bold'}}> All</Text>
						</Button>
						<Button transparent style={{paddingTop:10, width:140}}>
						<Text style={{fontSize:17,color:'grey',fontWeight:'bold'}}> Mentions</Text>
						</Button>
						<Right>
							<Button transparent style={{paddingTop:10}} >
							<Icon active name="ios-settings-outline" style={{color:'#02a8ef'}} />
							</Button>
						</Right>
					</View>
				</View>
			</Footer>
				);
			}
									}
class Timeline extends Component{
	 render() {
		return (
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Left>
								<Thumbnail source={{uri: 'http://img.kbhgames.com/2014/09/Dragon-Ball-Advanced-Adventure.jpg'}} />
								<Body >
									<Text style={{fontWeight:'bold'}}>GOKU</Text>
									<Text note style={{width:1000}}>@goku_ultrainstinct -40m</Text>
									<Text style={{width:1000}}>Goku Vs Jiren! Who will win?</Text>
								</Body>
							</Left>
			                <Right>
								<Icon name="ios-arrow-down-outline"/>
							</Right>
						</CardItem>
						<CardItem cardBody>
							<Image source={{uri: 'https://pbs.twimg.com/media/DLuWuOyXUAE7oKA.jpg:large'}} style={{height: 200, width: null, flex: 1}}/>
						</CardItem>
						<CardItem>
							<Body style={{flexDirection:'row'}}>
								<Button transparent style={{paddingLeft:15}}>
								<Icon name="text" style={{color:'#ccc'}} />
								<Text style={{color:'#ccc'}}>52</Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon active name="git-compare" style={{color:'#ccc'}} />
								<Text style={{color:'#ccc'}}>35</Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon  name="ios-heart-outline" style={{color:'#ccc'}}/>
								<Text style={{color:'#ccc'}}>400 </Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon  name="ios-mail-outline" style={{color:'#ccc'}} />
								</Button>
							</Body>
						</CardItem>
					</Card>
					<Card>
						<CardItem>
							<Left>
								<Thumbnail source={{uri: 'https://vignette.wikia.nocookie.net/dragonball/images/b/b3/Vegeta-ssj2-picture.jpg/revision/latest?cb=20090728013947'}} />
								<Body >
									<Text style={{fontWeight:'bold'}}>VEGETA</Text>
									<Text note style={{width:1000}}>@vegeta_ultrainstinct -30m</Text>
									<Text style={{width:250}}> I am the prince of all saiyans.. I will defeat Jiren</Text>
								</Body>
							</Left>
							<Right>
								<Icon name="ios-arrow-down-outline"/>
							</Right>
						</CardItem>
						<CardItem cardBody>
							<Image source={{uri: 'https://i.redd.it/nz2qlycy9krz.jpg'}} style={{height: 200, width: null, flex: 1}}/>
						</CardItem>
						<CardItem>
							<Body style={{flexDirection:'row'}}>
								<Button transparent style={{paddingLeft:15}}>
								<Icon name="text" style={{color:'#ccc'}}/>
								<Text style={{color:'#ccc'}}>12</Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon active name="git-compare" style={{color:'#ccc'}} />
								<Text style={{color:'#ccc'}}>20</Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon  name="ios-heart-outline" style={{color:'#ccc'}} />
								<Text style={{color:'#ccc'}}>65 </Text>
								</Button>
								<Button transparent style={{paddingLeft:20}}>
								<Icon  name="ios-mail-outline" style={{color:'#ccc'}} />
								</Button>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
  }
}
class SideBar extends Component{
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
export default class HomeScreen extends Component {
	constructor() {
		super();
		this.state = {
			active: 'false'
					 };
				  }
				  closeDrawer() {
      this._drawer._root.close()
    }
    openDrawer() {
      this._drawer._root.open()
    }
  render() {
    return (
			<Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()} >
		<Container>
			<Header
				style={{
					borderColor:'white',
					marginTop:25,
					backgroundColor:'white',
					flexDirection:'row'
					   }} >
				<Left>
				<Button transparent onPress={() => this.openDrawer()}>
					<Thumbnail small source={{uri: 'http://vignette3.wikia.nocookie.net/voice-actors-from-the-world/images/3/37/Zeno-Sama.png/revision/latest?cb=20160514013139'}}  />
				</Button>
				</Left>
				<Title style={{paddingRight:230,fontWeight:'bold',paddingTop:10,paddingLeft:10,fontSize:20,color:'black'}}>Home</Title>	
			</Header>
		 <Tabs>
			<Tab heading={ <TabHeading  ><Icon name="ios-home" /></TabHeading>} >
			<Timeline/>
			<Fab
				active={this.state.active}
				direction="up"
				style={{ backgroundColor: '#02a8ef' }}
				position="bottomRight"
				onPress={() => this.setState({ active: !this.state.active })}>
				<Icon name="ios-quote" />
			</Fab>
			</Tab>
			<Tab heading={ <TabHeading  ><Icon name="ios-search" /></TabHeading>} >
			<Search/>
			</Tab>
			<Tab heading={ <TabHeading  ><Icon name="ios-notifications-outline" /></TabHeading>} >
			</Tab>
			<Tab heading={ <TabHeading  ><Icon name="ios-mail-outline" /></TabHeading>} >
			</Tab>
        </Tabs>
			<Foot/>
      </Container>
			</Drawer>
	);
  }
}