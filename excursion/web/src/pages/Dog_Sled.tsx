'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useColorMode
} from '@chakra-ui/react'
import { MdGavel, MdLocalShipping } from 'react-icons/md'

export default function Simple() {
  //const {ColorMode} = useColorMode();
  const bgcolor = ""
  return (
    <Container maxW={'7xl'} bg={bgcolor}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://stexploreitera001.blob.core.windows.net/images/Dog%20Sled.jpeg'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Dog Sledding
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Adult: 1250 NOK 
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Child: 800 NOK 
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Are you ready for the adventure of a life time while experiencing the endurance of our well trained dogs and the fantastic 
                visuals that the arctics can offer?
                Sign up for one of our tours today!
              </Text>
              <Text fontSize={'lg'}>
                Our experienced crew will make sure that your tour is entirely safe
                and full of experiences. We do recommend bringing warm clothes to ensure that you
                will not become cold. It is also possible to rent jackets and pants well suited for the climate.

                Please not that dog sledding is only possible in near vicinity of towns, a complete list of offerings can be found 
                at the ordering page.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                You will be provided with
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>An experienced instructor</ListItem>
                  <ListItem>A sled with all the required equipement</ListItem>{' '}
                  <ListItem>Something to eat and drink during the trip</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Free photographs/video to remember your adventure</ListItem>
                  <ListItem>Flashlight, for when it gets dark</ListItem>
                  <ListItem>Friends for life!</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                You need to bring/rent
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Warm clothing:
                  </Text>{' '}
                  Remember to dress in layers
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Snacks:
                  </Text>{' '}
                  Bring additional snacks as you wish
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Camera:
                  </Text>{' '}
                  To take your own pictures
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Change of clothes:
                  </Text>{' '}
                  To help you keep dry and warm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Good attitude:
                  </Text>{' '}
                  Helps with the already great experience
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Filler:
                  </Text>{' '}
                  Fill
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Filler:
                  </Text>{' '}
                  Fill
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Book here
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdGavel /> 
            <Text>By booking you also agree to the terms of service</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}