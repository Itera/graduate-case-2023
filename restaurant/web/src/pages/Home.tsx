import { useAccount, useMsal } from '@azure/msal-react';
import { Box, Button, Heading, Image, Text, VStack} from '@chakra-ui/react';
import { Guest, Room } from 'cms-types';
import { useEffect } from 'react';
import useAccessToken from '../auth/useAccessToken';
import { useGet } from '../hooks/useGet';
import theme from '../theme';
// import { Link as ReactLink } from 'react-router-dom';
import sourceWhite from '../assets/LogoWhite.png';

const Home = () => {  
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const accessToken = useAccessToken();

  const {
    data: guest,
    isLoading,
    mutate
  } = useGet<Guest>(`/guests/${account?.localAccountId}`);

  const { data: room } = useGet<Room>(
    `/rooms/${guest?.roomId}`,
    guest?.roomId != undefined && guest?.roomId != ''
  );

  useEffect(() => {
    if (isLoading) return;

    const checkAndCreateGuest = async () => {
      if (guest?.id == '' && account) {
        const newGuestData = {
          firstName: account?.name?.split(' ').slice(0, -1).join(' '),
          lastName: account?.name?.split(' ').slice(-1).join(' '),
          id: account?.localAccountId,
          email: account?.username
        };

        try {
          const response = await fetch(
            import.meta.env.VITE_API_BASE_URL + '/guests',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
              },
              body: JSON.stringify(newGuestData)
            }
          );

          const createdGuest = await response.json();

          mutate(createdGuest, false);
        } catch (e) {
          console.log(e);
        }
      }
    };

    checkAndCreateGuest();
  }, [guest, account, accessToken, mutate, isLoading]);

  return (
    <VStack
      width="100vw"
      height="100vh"
      alignContent="center"
      justifyContent="center"
      backgroundColor={theme.colors['explore-blue'].main}
    >
      <Box mt={6}>
        <Image src={sourceWhite}></Image>
      </Box>
      <Box 
        m="0 auto"
        mb={10}
      >
        <Heading as="h1" textAlign="center" fontSize="5xl" mt="100px" color='white'>
          Welcome, {account?.name}!
        </Heading>
        <Text fontSize="xl" textAlign="center" mt="30px" color='white'>
          {guest && guest.id == ''
            ? 'Hang on, we are creating a guest account for you...'
            : room && room.roomNumber == ''
            ? 'Hang on, your room is not ready yet...'
            : 'Your room number is ' + room?.roomNumber}
        </Text>
      </Box>
      
      <Box 
        m="0 auto"
        mb={6}
        >
        <VStack>
          <Button m={3} variant='solid' colorScheme='gray'>Spa</Button>
          <Button m={3} variant='solid' colorScheme='gray'>Restaurants</Button>
          <Button m={3} variant='solid' colorScheme='gray'>Excursions</Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Home;