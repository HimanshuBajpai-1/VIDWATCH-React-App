import React from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <Container  >
        <VStack w={'80%'} h={'80vh'} alignItems={'stretch'} justifyContent={'center'} m={'auto'} spacing={10}>
            <Heading alignSelf={'center'}>Contact Us</Heading>
            <form>
                <VStack spacing={5}>
                    <Input placeholder='Enter your email' type='email' focusBorderColor='purple.500'/>
                    <Input placeholder='Enter your query' type='text' focusBorderColor='purple.500'/>                    
                    <Button  colorScheme='purple' rightIcon={<IoMdSend />}>send</Button>                    
                </VStack>                
            </form>
        </VStack>
    </Container>
  )
}

export default Contact