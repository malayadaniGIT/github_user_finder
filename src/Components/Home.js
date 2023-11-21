import React from 'react';
import Search from './Search';
import Details from './Details';
import Profile from './Profile';
import { Box, Container, Flex } from '@chakra-ui/react';
import './style.css';

function Home() {
  return (
    <Container className='homebox'  bgColor="black" borderRadius="10" boxShadow="dark-lg" maxW="1200px" mb="50px" p="30px">
      <Box mb="20px">
        <Search />
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
        <Box borderRadius="8" w={{ base: '100%', md: '40%' }} boxShadow="dark-lg white" mb={{ base: '20px', md: '0' }}>
          <Profile />
        </Box>
        <Box w={{ base: '100%', md: '60%' }} p="5px" boxShadow="2xl" color="white">
          <Details />
        </Box>
      </Flex>
    </Container>
  );
}

export default Home;
