import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'
import {Link} from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button pos={"fixed"} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} zIndex={'10'}>
            <AiOutlineMenu size={'20'} />
        </Button>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>VIDWATCH</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <HashLink to={'/#home'}>Home</HashLink>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to={'/videos'}>Videos</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to={'/upload'}>Upload Videos</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <HashLink to={'/contact'}>Contact Us</HashLink>
                        </Button>
                    </VStack>                    
                </DrawerBody>
                <DrawerFooter >
                    <HStack width={'full'} justifyContent={'center'}>
                        <Button onClick={onClose} colorScheme='purple' >
                            <Link to={'/login'}>Login</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header