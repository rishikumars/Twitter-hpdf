import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';

const Item = Picker.Item;

//showing one tweet info
const TwitterCard = () => {

    return (   
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
					
     );
   };

     

export { TwitterCard };