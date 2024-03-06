import { Box, Button, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box id='contactus' minH={'40'} bg={'Black'} color={'white'} pt={'10'} pb={'10'} >
        <Stack direction={['column','row']} alignItems={'center'} justifyContent={'space-around'}  >
            <VStack width={'full'} alignItems={'center'} justifyContent={'center'} >
                <Heading>Follow us on :</Heading>
                <HStack justifyContent={'space-evenly'}>
                    <Link to={'https://facebook.com'} target='blank'>
                        <Button colorScheme='twitter' padding={'0'}>
                            <FaFacebook />
                        </Button>
                    </Link>
                    <Link to={'https://twitter.com'} target='blank'>
                        <Button colorScheme='twitter' padding={'0'}>
                            <FaTwitter />
                        </Button>
                    </Link>                        
                    <Link to={'https://instagram.com'} target='blank'>
                        <Button colorScheme='twitter' padding={'0'}>
                            <FaInstagram />
                        </Button>
                    </Link>       
                    <Link to={'https://linkedin.com'} target='blank'>
                        <Button colorScheme='twitter' padding={'0'}>
                            <FaLinkedin />
                        </Button>
                    </Link>                    
                </HStack>                
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer