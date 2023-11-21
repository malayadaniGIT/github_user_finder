import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import githubContext from './Context'
import "./style.css"

function Profile() {
  const {user}=useContext(githubContext)
  // console.log(user.login);
  return (

<Box  p="10px" textAlign="center">

  <img  style={{margin:"auto",width:"300px",height:"300px",borderRadius:"8px"}} src={user.avatar_url || "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/05/data_science_projects_github.png"}   alt="" />
  <Heading className='name' size="lg">{user.name || "No name"}</Heading>
  <Text  className="bio" my={2} >
  {user.bio || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab dolorum dolores animi explicabo non voluptas consequuntur! Perspiciatis dolores iste optio sit commodi, doloribus accusantium!"}
  </Text>
  <a href={`https://github.com/${user.login}`}> 
    <Button colorScheme='blue'    color="white">Profile</Button>
  </a>
</Box>

    )
}

export default Profile
