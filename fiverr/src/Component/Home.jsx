import { Box, Button, Flex, Grid, GridItem, HStack, Image, Input,InputGroup,InputLeftAddon,List,ListIcon,ListItem,Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import React from 'react';
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {SearchIcon,CheckCircleIcon} from '@chakra-ui/icons';
import { market, service } from "./Service";

export default function Home(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };

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
   <Slider {...settings}>
   
    {service.map((el,i)=>{
    return <div><Image display='block' m='auto' alt='err' src={el.img}/></div>})}
    </Slider>
   </Stack>
<HStack bgColor='rgb(223, 250, 250)' mt='3rem' mb='3rem' p='3rem'>
    <VStack width='48%' textAlign='left' fontSize='1.5xl' fontWeight='bold'>
        <Text fontSize='5xl' fontWeight='bold'>A whole world of freelance talent at your fingertips</Text>
    <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    The best for every budget
  </ListItem>
  <Text>Find high-quality services at every price point. No hourly rates,just project-based pricing</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Quality work done quickly
  </ListItem>
  <Text>Find the right freelancer to begin working on your project within minutes.</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Protected payments, every time
  </ListItem>
  <Text>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    24/7 support
  </ListItem>
  <Text>Questions? Our round-the-clock support team is available to help anytime, anywhere.</Text>
</List>
    </VStack>
    <VStack>
<video controls poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png">
<source src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7' 
type="video/mp4"/>
</video>
   </VStack>
</HStack>
<Box>
    <Text ml='10' mb='4' fontSize='3xl' textAlign='left' fontWeight='medium'>Explore the marketplace</Text>
    <Grid templateColumns='repeat(5, 1fr)' gap={10} mb='4rem'>
        {market.map((el,i)=>{return<GridItem >
           <a href={el.a}>
            <Image alt='error' display='block' height='5rem' margin="auto" width='27%'  src={el.img} />
            <Text fontSize='1xl'>{el.title}</Text>
            </a>
            </GridItem>})}
    </Grid>
</Box>
<Stack>

</Stack>
</Box>
    )   
}