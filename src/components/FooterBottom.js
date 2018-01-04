import React from 'react';
import { Footer, Button, Text, Right, Icon,View } from 'native-base';

const FooterBottom = () => {

    return (
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
};

export { FooterBottom };