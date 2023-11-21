import React, { useContext, useEffect, useState } from 'react'
import {Box, Heading,Input,Button, Flex}from '@chakra-ui/react'
import axios from "axios"
import githubContext from './Context'
import "./style.css"
function Search() {
  const[username,setUsername]=useState("")
  const{setUser}=useContext(githubContext)
  const getUserData=()=>{
    axios.get("https://api.github.com/users/"+username)
    .then((res)=>
    {
          setUser(res.data)
    })
    .catch((err)=>alert("failed to get data"))
  }

  return (
    
    <Box >
    <Box mb="20px">
      <Heading color="white" textShadow="0 0 5px red">Github User Search</Heading>
    </Box>
      <Flex mb="10px" gap="5px">
      <Input fontSize="2xl" color="white" placeholder='Enter Github Id' type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}></Input>
      <Button className='searchbtn'  color='black' colorScheme='white' bgColor='red.200' fontSize="2xl" variant="outline" p="10px 70px"
        onClick={()=>getUserData()}>Search</Button>
      </Flex>
    </Box> 
  )
}

export default Search


