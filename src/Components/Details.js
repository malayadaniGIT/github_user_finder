import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import githubContext from './Context'
import axios from 'axios';
import "./style.css"

function Details() {
  const [repo, setRepo] = useState([]);
  const { user } = useContext(githubContext);

  const showAllRepo = () => {
    axios.get(`https://api.github.com/users/${user.login}/repos?sort=created&direction=desc`)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      });
  }

  const backtodeatail=()=>{
    setRepo("")
  }
 
  if (repo.length === 0) {
    return (
      <Card w="100%" className='abc' bgColor="grey">
        <CardHeader>
          <Heading  size='lg' color="black" fontWeight="800" >Github User Details</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='6'>

            <Box>
              <Heading   size='md' textTransform='uppercase'>
                Name
              </Heading>
              <Text pt='2'  color="red.900" fontWeight="bold" fontSize='lg'>
                {user.name}
              </Text>
            </Box>

            <Box>
              <Heading  size='md' textTransform='uppercase'>
                Follower
              </Heading>
              <Text pt='2' color="red.900" fontWeight="bold" fontSize='lg'>
                {user.followers || 0}
              </Text>
            </Box>

            <Box>
              <Heading  size='md' textTransform='uppercase'>
                Following
              </Heading>
              <Text pt='2' color="red.900" fontWeight="bold" fontSize='md'>
                {user.following || 0}
              </Text>
            </Box>

            <Box>
              <Heading  size='md' textTransform='uppercase'>
                Email
              </Heading>
              <Text pt='2' color="red.900" fontWeight="bold" fontSize='lg'>
                {user.email || "abc@email.com"}
              </Text>
            </Box>

            <Box>
              <Heading  size='md' textTransform='uppercase'>
                Repositories
              </Heading>
              <Flex justifyContent="space-between" pt='2' color="red.900" fontWeight="bold" fontSize='lg'>
                {user.public_repos || 0}
                <Button colorScheme='red'  w="fit-content" h="30px" onClick={showAllRepo}>Show All Repo</Button>
              </Flex>
            </Box>
            
          </Stack>
        </CardBody>
      </Card>
    );
  }
else{
  return (
    <Card w="100%"  bgColor="rgb(207, 203, 203)">
      <CardHeader>
        <Flex justifyContent="space-between" >
        <Heading color="red.800" size='lg'>
        User's All Recent Repositories 
        </Heading>
        <Button colorScheme='red' w="fit-content" fontWeight="bold" fontSize="" onClick={backtodeatail}>back</Button></Flex>
        
      </CardHeader>
      <CardBody className='xyz'>
        {repo.map((e) => (
          <div className='repolink' key={e.id}>
            <a   style={{fontSize:"large",fontWeight:"500"}} href={e.html_url}>{e.name}</a>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
}

export default Details;
