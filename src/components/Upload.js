import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload = () => {
  return (
    <Container width={'100%'}>
        <VStack height={'100vh'} justifyContent={'center'} alignItems={'center'} >
            <AiOutlineCloudUpload size={200}/>
            <form>
                <HStack>
                    <Input type='file' required css={{
                        "&::file-selector-button":{
                            border:"none",
                            width:"calc(100% + 36px)",
                            height:'100%',
                            marginLeft:'-18px', 
                            color:'purple',
                            backgroundColor:'white',
                            cursor:"pointer"
                        }
                    }}/>
                    <Button colorScheme='purple' >Upload</Button>
                </HStack>                
            </form>
        </VStack>
    </Container>
  )
}

export default Upload