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
} from '@chakra-ui/react'

export default function Simple() {
  return (
    <Container maxW={'7xl'} minW={"100%"} backgroundColor={'#091E3B'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://stexploreitera001.blob.core.windows.net/images/Rib.jpeg'
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
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              color={'#FFB46D'}>
              Book Your RIB Trip!
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={'#FFB46D'}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Select Date
              </Text>
              
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={'#FFB46D'}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Packing List
              </Text>

              <List spacing={2}> 
                <ListItem color={'white'}>
                  <Text as={'span'} fontWeight={'bold'}>
                    Lunch
                  </Text>{' '}
                  {/* 20 mm */}
                </ListItem>
                <ListItem color={'white'}>
                  <Text as={'span'} fontWeight={'bold'}>
                    Something to drink
                  </Text>{' '}
                  {/* leather strap */}
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
            BOOK HERE
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}