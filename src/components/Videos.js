import { VStack,Stack,Heading,Text, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import videoData from '../assets/videoData'

const Videos = () => {
    const [videoInfo,setVideoInfo] = useState(videoData[0])

  return (
    <Stack direction={['column','row']} width={'100%'} gap={[10,20]} height={'120vh'}>
        <VStack width={'full'} alignItems={'flex-start'} mb={[1,5]} height={[' 50vh','120vh']}>
            <video src={videoInfo.videoUrl} width={'100%'} controls controlsList='nodownload'>
                your browser does not support this video format
            </video>
            <Heading pl={5}>{videoInfo.title}</Heading>
            <Stack direction={["column","row"]} width={'100%'} justifyContent={'space-between'}>
                <p style={{paddingLeft:"20px"}}>{videoInfo.views}{" "}views</p>
                <p style={{paddingLeft:"20px",paddingRight:"20px",fontWeight:"bold"}}>{videoInfo.subscriber}</p>
            </Stack>
            <Text width={'100%'} pl={5} pr={5} overflowY={'scroll'} textAlign={'left'}>{videoInfo.description}</Text>
        </VStack>
        <VStack width={['100%','xl']} overflowY={'scroll'} alignItems={'stretch'} spacing={5} mt={[1,5]} mb={5}>
            <Heading textAlign={'center'}>Next Video</Heading>
            <VStack overflowY={'scroll'} alignItems={'stretch'} spacing={5}>
                {videoData.map((video,id)=>{
                    return <Button key={id} minH={'10'} width={'100%'} colorScheme='blue' onClick={(id)=>{setVideoInfo(video)}}>{video.title}</Button>
                })}
            </VStack>
        </VStack>
    </Stack>
  )
}

export default Videos