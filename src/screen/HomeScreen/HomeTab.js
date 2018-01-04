import React from 'react';
import {  Content,Container } from 'native-base';
import  { TwitterCard }  from '../../components';
const HomeTab = () => {
    return (
   <Container>
   <Content>
      <TwitterCard />
	 <TwitterCard />
	 <TwitterCard />
      </Content>
	  </Container>
);
  };
export default HomeTab;
