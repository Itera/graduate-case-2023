'use client';

import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Center,
  Image,
  Heading,
  Button
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

interface FeatureProps {
  title: string;
  subtitle: string;
  text: string;
  url: string;
  price: string;
}

const Feature = ({ title, subtitle, text, url, price }: FeatureProps) => {
  const navigate = useNavigate();
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        borderColor={'#FFB46D'}
        borderRadius={'1px'}
        borderWidth={'1px'}
        w={'full'}
        bg={'#091E3B'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
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
            backgroundImage: `url(${url})`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={url}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={700}
            color={'#FFB46D'}
            textTransform={'uppercase'}
          >
            {title}
          </Heading>
          <Text
            color={'#FFB46D'}
            fontSize={'sm'}
            fontWeight={700}
            textTransform={'uppercase'}
          >
            {subtitle}
          </Text>
          <Text color={'white'} fontSize={'sm'} textTransform={'uppercase'}>
            {text}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'} color={'white'}>
              {price}
            </Text>
          </Stack>
          <Button
            backgroundColor={'#FFB46D'}
            variant="solid"
            onClick={() => navigate('/booking')}
          >
            View Here
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} backgroundColor={'#091E3B'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          url={
            'https://stexploreitera001.blob.core.windows.net/images/Rib.jpeg'
          }
          title={'RIB Trip'}
          subtitle={'Embark on an Arctic Adventure:'}
          text={'The Thrilling RIB Boat Excursion'}
          price={'1000 NOK'}
        />
        <Feature
          url={
            'https://stexploreitera001.blob.core.windows.net/images/Dog%20Sled.jpeg'
          }
          title={'Dog Sled'}
          subtitle="Experience the Arctic Magic:"
          text={'Dog Sled Excursion'}
          price={'1250 NOK'}
        />
        <Feature
          url={
            'https://stexploreitera001.blob.core.windows.net/images/Hvalsafari.png'
          }
          title={'Whale Safari'}
          subtitle="Experience the Arctic Magic:"
          text={'A Majestic Adventure'}
          price={'800 NOK'}
        />
      </SimpleGrid>
    </Box>
  );
}
