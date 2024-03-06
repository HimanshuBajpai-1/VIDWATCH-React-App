import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container  >
        <VStack w={'80%'} h={'80vh'} alignItems={'stretch'} justifyContent={'center'} m={'auto'} spacing={10}>
            <Heading alignSelf={'center'}>Welcome Back</Heading>
            <form>
                <VStack spacing={5}>
                    <Input placeholder='Enter your email' type='email' focusBorderColor='purple.500'/>
                    <Input placeholder='Enter your password' type='password' focusBorderColor='purple.500'/>
                    <Button alignSelf={'end'} variant={'link'} colorScheme='purple'>forget password?</Button>
                    <Button  colorScheme='purple'>Login</Button>
                    <Button alignSelf={'end'} variant={'link'} colorScheme='purple'>{<Link to={'/signup'}>create a new account</Link>}</Button>
                </VStack>                
            </form>
        </VStack>
    </Container>
  )
}

export default Login