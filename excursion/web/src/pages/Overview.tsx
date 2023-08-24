'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Button,
  SimpleGrid
} from '@chakra-ui/react'

'use client'

const IMAGE =
  'https://stexploreitera001.blob.core.windows.net/images/Rib.jpeg'

export default function OverviewCard() {
  return (
    <Center py={12} minW={'100%'} backgroundColor={''}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('#091E3B')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={700} Text color={'#FFB46D'} textTransform={'uppercase'}>
            Rib Trip
          </Heading>
          <Text color={'#FFB46D'} fontSize={'sm'} fontWeight={700} textTransform={'uppercase'}>
          Embark on an Arctic Adventure: 
          </Text>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>The Thrilling Rib Boat Excursion</Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} Text color={'white'}>
              1000NOK
            </Text>
          </Stack>
          <Button backgroundColor={'#FFB46D'} variant='solid'>
           View Here
          </Button> 
        </Stack>
      </Box>
    </Center>
  )
}
