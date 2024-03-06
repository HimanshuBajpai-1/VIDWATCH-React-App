import { Avatar, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container  >
        <VStack w={'80%'} h={['100vh','110vh']} alignItems={'stretch'} justifyContent={'center'} m={'auto'} spacing={10}>
            <Heading alignSelf={'center'}>VIDWATCH</Heading>
            <Avatar size={['xl','2xl']} alignSelf={'center'} />
            <form>
                <VStack spacing={5}>
                    <Input placeholder='Enter your name' type='text' focusBorderColor='purple.500'/>
                    <Input placeholder='Enter your email' type='email' focusBorderColor='purple.500'/>
                    <Input placeholder='Enter your password' type='password' focusBorderColor='purple.500'/>
                    <Button  colorScheme='purple'>Sign Up</Button>
                    <Button alignSelf={'end'} variant={'link'} colorScheme='purple'>{<Link to={'/login'}>already have an account?</Link>}</Button>
                </VStack>                
            </form>
        </VStack>
    </Container>
  )
}



export default Signup