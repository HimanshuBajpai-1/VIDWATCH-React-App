import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.svg'

const headingOptions = {
  position:"absolute",
  top:'50%',
  left:'50%',
  transform:'translate(-50%,-50%)',
  textTransform:'uppercase',
  fontSize:'3rem',
  opacity:"0.6"
}

const Home = () => {
  return (
    <Box id='home'>
        <CarouselComponent />     
        <Container maxW={'container.xl'} mt={'8'}>
          <Heading w={'fit-content'} margin={'auto'} borderBottom={'2px solid'}>
              Services
          </Heading>
          <Stack direction={['column','row']} alignItems={'center'} h={'full'} mt={'8'} gap={'6'} padding={'8'}>
            <Image src={img5} h={['250px','400px']}/>
            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'}>Time to reach the interaction rates you deserve faster for the content you produce on VIDWATCH! We are ready to offer you more with our fast, effective, guaranteed, and powerful VIDWATCH Services!</Text>
          </Stack>
        </Container>   
    </Box>
  )
}


const CarouselComponent = () => {
  return <Carousel autoPlay={true} infiniteLoop={true} interval={2000} showArrows={false} showStatus={false} showThumbs={false}>
      <Box>
          <Image src={img1} alt='carousel' h={['50vh','100vh']} objectFit={'cover'} />
          <Heading color={'white'} bg={'Black'} {...headingOptions}>amazing experience</Heading>
      </Box>
      <Box>
          <Image src={img2} alt='carousel' h={['50vh','100vh']} objectFit={'cover'} />
          <Heading color={'white'} bg={'Black'} {...headingOptions}>uninterrupted</Heading>
      </Box>
      <Box>
          <Image src={img3} alt='carousel'h={['50vh','100vh']} objectFit={'cover'}/>
          <Heading color={'white'} bg={'Black'} {...headingOptions}>amazing sound</Heading>
      </Box>
      <Box>
          <Image src={img4} alt='carousel' h={['50vh','100vh']} objectFit={'cover'}/>
          <Heading color={'white'} bg={'Black'} {...headingOptions}>one click and enjoy</Heading>
      </Box>
  </Carousel>
}

export default Home