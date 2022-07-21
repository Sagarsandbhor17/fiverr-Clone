import { Box, Button, Flex, Image, Input,InputGroup,InputLeftAddon,Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import React from 'react';
import { useRef } from "react";
import { Link } from "react-router-dom";
import {SearchIcon} from '@chakra-ui/icons'
export default function Home(){
const bgBox=useRef(null);
const social=["https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png",
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png']

var i=0;
function change() {
    var doc = bgBox.current;
    var color = ["pink","rgb(58, 247, 58)","orange"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  setInterval(change,5000);

return (<Box>
<Box height='600px' ref={bgBox} bg='burlywood'>
<Flex width='90%' m='auto' >
<Link to="/"><Image width="20%" src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo-500x281.png" /></Link>
<Spacer/>
<Stack direction='row' gap={2} alignItems='center'>
    <Button variant="ghost" colorScheme='none' >Fiverr Business</Button>
    <Button variant='ghost' colorScheme='none'>Explore</Button>
    <Button variant='ghost' colorScheme='none'><Image width="22%" src='https://img.icons8.com/material-two-tone/2x/rupee.png'/>INR</Button>
<Button variant='ghost' colorScheme='none'>Become a Seller</Button>
<Button variant='ghost' colorScheme='none'>Sign In</Button>
<Button variant='outline' colorScheme='green'>Join</Button>
</Stack>
</Flex>

<Stack width='60%' m='auto' mt='7rem'>
    <Text fontSize='6xl' fontWeight='extrabold' color='white' lineHeight='5rem'>
        Find the perfect <Text as='i'>freelance</Text> services for your business</Text>
        <Box>
        <InputGroup>
    <InputLeftAddon as={SearchIcon} bg='none' />
    <Input type='text' placeholder='Try "building mobile app"' border='1px solid white' />
    <Button colorScheme='gray'>Search</Button>
  </InputGroup>

<Flex gap='3rem' fontSize='3xl' fontWeight='bold' mt='1rem' alignItems='center'>
    <Text color='white'>Papular  :</Text>
<Button variant='outline'>Website Design</Button><Button variant='outline'>Wordpress</Button>
<Button variant='outline'>LogoDesign</Button><Button variant='outline'>NFT Art</Button></Flex>
</Box>
</Stack>
    </Box>
    <Flex gap='12' justifyContent='center' alignItems='center' mb='1rem'>
        <Text fontWeight='bold' color='grey'>Trusted By :</Text>
    {social.map((item,index)=><Image src={item} key={index}/>)}
    </Flex>
    <Stack>
<Text textAlign='left' fontSize='3xl' fontWeight='medium' color='black'>
    Popular professional services</Text>
    </Stack>
</Box>
    )
   
    
   
    
}