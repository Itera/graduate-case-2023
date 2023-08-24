'use client';

import {
  Box,
  Container,
  Stack,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  NumberDecrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper
} from '@chakra-ui/react';
import { useAccount, useMsal } from '@azure/msal-react';

export default function Simple() {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const CreateBookingButton = async () => {
    if (!account) return;
    try {
      const response = await fetch(import.meta.env.VITE_CMS_BASE_URL + "/bookings", {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({guestId: account.localAccountId})
    });
    if (response) alert("Booking created!");
  }
    catch (e) {
      alert("Booking unsuccessful");
      console.log(e);
    }
  }
  return (
    <Container maxW={'7xl'} minW={'100%'} backgroundColor={'#091E3B'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
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
        <Stack
          spacing={{ base: 6, md: 10 }}
          // divider={
          //   <StackDivider
          //     borderColor={useColorModeValue('gray.200', 'gray.600')}
          //   />
          // }
        >
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              color={'#FFB46D'}
            >
              Book Your RIB Trip!
            </Heading>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <FormControl>
                <FormLabel
                  htmlFor="date"
                  fontWeight={'normal'}
                  color={'#FFB46D'}
                >
                  Select Date
                </FormLabel>
                <Input
                  placeholder="Select Date"
                  size="md"
                  type="date"
                  backgroundColor={'white'}
                />
              </FormControl>
            </VStack>
            <VStack>
              <FormControl>
                <FormLabel
                  htmlFor="adults"
                  fontWeight={'normal'}
                  color={'#FFB46D'}
                >
                  Number of Adults
                </FormLabel>
                <NumberInput defaultValue={0} min={1} max={10}>
                  <NumberInputField backgroundColor={'white'} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </VStack>
            <VStack>
              <FormControl>
                <FormLabel
                  htmlFor="adults"
                  fontWeight={'normal'}
                  color={'#FFB46D'}
                >
                  Number of Children
                </FormLabel>
                <NumberInput defaultValue={0} min={1} max={10}>
                  <NumberInputField backgroundColor={'white'} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </VStack>
            <VStack>
              <FormControl>
                <FormLabel
                  htmlFor="info"
                  fontWeight={'normal'}
                  color={'#FFB46D'}
                >
                  Additional Information
                </FormLabel>
                <Textarea
                  placeholder="Any additional information? Please let us know."
                  backgroundColor="white"
                />
              </FormControl>
            </VStack>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={'#FFB46D'}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg'
            }}
            onClick={() => CreateBookingButton()}//navigate('/booking')}
          >
            CONFIRM BOOKING
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

