import { useAccount, useMsal } from '@azure/msal-react';
import { Box, Button, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Select} from '@chakra-ui/react';
import { Guest } from 'cms-types';
import { useEffect, useState } from 'react';
import useAccessToken from '../auth/useAccessToken';
import { useGet } from '../hooks/useGet';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import hydrotherapyImage from '../assets/images/hydrotherapy.png';
import mudbathImage from '../assets/images/mudbath.png';
import saunaImage from '../assets/images/sauna.png';
import massageImage from '../assets/images/massage.png';
import acupunctureImage from '../assets/images/acupuncture.png';

const TreatmentPage = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const accessToken = useAccessToken();
  const [isOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const navigate = useNavigate();

  const navigateToConfirmation = () => {
    // Check if time and treatment is selected
    if (selectedTime != "" && selectedTreatment != "") {
      navigate('/confirmation', {state: {time: selectedTime, treatment: selectedTreatment, place: selectedPlace}});
    }
  };

  const changeTreatment = (treatment: string, place: string) => {
    setSelectedTime('')
    setSelectedPlace(place)
    setSelectedTreatment(treatment);
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedTime('');
    }
  }, [isOpen]);

  const {
    data: guest,
    isLoading,
    mutate
  } = useGet<Guest>(`/guests/${account?.localAccountId}`);

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
    <div>
    <Navbar/>
    <Flex
      width="100vw"
      height="100vh"
      alignContent="center"
      flexDirection="column"
      backgroundColor="#f0f0f0"
    >
      <Box m="0 auto">
        <Heading as="h1" textAlign="center" fontSize="2xl" mt="100px">
          What treatments would you like to book, {account?.name}?
        </Heading>
      </Box>
      <Box m="0 auto" p={4} marginTop={4}>
      <Accordion allowToggle>
        <AccordionItem>
    <h2>
      <AccordionButton style={{
          backgroundImage: `url(${saunaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: "95vw",
          justifyContent: "center"
        }}
        onClick={() => changeTreatment("Sauna", "Deck 11 - Wellness Deck")}>
        <Box as="span" flex='1' textAlign='left' fontSize='2xl'color="white">
        Sauna
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor="white">
    Step into the Sauna Sanctuary, a spacious haven that can accommodate up to 12 
    visitors. Allow the dry heat to cleanse your body, ease muscle tension, and promote relaxation.
    <Box p={1} fontSize='sm'>
            Location: Deck 11 - Wellness Deck
          </Box>
          <Box p={1} fontSize='sm'>
            Price: $30 (per person)
          </Box>
          <Box p={1} fontSize='sm'>
            Duration: 30 minutes
          </Box>
          <Box fontSize="sm">
          Choose an available time slot in the next 7 days
          </Box>
      <Select value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} placeholder="Choose time">
        <option value="24 Aug 15:00">24 Aug 15:00</option>
        <option value="24 Aug 15:30">24 Aug 15:30</option>
        <option value="24 Aug 16:00">24 Aug 16:00</option>
        <option value="24 Aug 16:30">24 Aug 16:30</option>
      </Select>
      <Box p={2}></Box>
      <Box fontSize="sm" fontStyle={"italic"}>
        The cost will be added to your room bill
      </Box>
      <Button
      w="fit-content"
      p="1"
      px="50px"
      colorScheme="explore-blue"
      borderRadius="10px"
      m="0 auto"
      mt="1"
      fontWeight="bold"
      fontSize="l"
      onClick={navigateToConfirmation}
      >Book</Button>
    </AccordionPanel>
  </AccordionItem>
        <AccordionItem>
    <h2>
      <AccordionButton style={{
          backgroundImage: `url(${mudbathImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
        }}
        onClick={() => changeTreatment("Mudbath", "Deck 12 - Oasis Wing")}>
        <Box as="span" flex='1' textAlign='left' fontSize='2xl'color="white">
          Mudbath
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor="white">
    Experience the ultimate rejuvenation with our signature Mudbath. Indulge in the healing properties of natural mud 
    as it's applied as a mask for your face or as a treatment for your entire body.
    <Box p={1} fontSize='sm'>
          Location: Deck 12 - Oasis Wing
          </Box>
          <Box p={1} fontSize='sm'>
          Price: $75
          </Box>
          <Box p={1} fontSize='sm'>
          Duration: 30 minutes to 60 minutes
          </Box>
          <Box fontSize="sm">
          Choose an available time slot in the next 7 days
          </Box>
      <Select value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} placeholder="Choose time">
        <option value="24 Aug 15:00">24 Aug 15:00</option>
        <option value="24 Aug 16:00">24 Aug 16:00</option>
        <option value="24 Aug 17:00">24 Aug 17:00</option>
        <option value="24 Aug 18:00">24 Aug 18:00</option>
      </Select>
      <Box p={2}></Box>
      <Box fontSize="sm" fontStyle={"italic"}>
        The cost will be added to your room bill
      </Box>
      <Button
      w="fit-content"
      p="7"
      px="50px"
      colorScheme="explore-blue"
      borderRadius="10px"
      m="0 auto"
      mt="1"
      fontWeight="bold"
      fontSize="l"
      onClick={navigateToConfirmation}
      >Book</Button>
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton style={{
          backgroundImage: `url(${hydrotherapyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        
        onClick={() => changeTreatment("Hydrotherapy", "Deck 12 - Oasis Wing")}>
        <Box as="span" flex='1' textAlign='left' fontSize='2xl'color="white">
        Hydrotherapy
        </Box>
        <AccordionIcon />
      </AccordionButton >
    </h2>
    <AccordionPanel pb={4} backgroundColor="white">
    Immerse yourself in the therapeutic Hydrotherapy session, where a range of water-based treatments promotes relaxation, eases
    muscle tension, and enhances circulation.
    <Box p={1} fontSize='sm'>
          Location: Deck 12 - Oasis Wing
            </Box>
            <Box p={1} fontSize='sm'>
            Price: $60 
            </Box>
            <Box p={1} fontSize='sm'>
            Duration: 45 minutes
            </Box>
            <Box fontSize="sm">
          Choose an available time slot in the next 7 days
          </Box>
      <Select value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} placeholder="Choose time">
        <option value="24 Aug 15:00">24 Aug 15:00</option>
        <option value="24 Aug 15:45">24 Aug 15:45</option>
        <option value="24 Aug 16:30">24 Aug 16:30</option>
        <option value="24 Aug 17:15">24 Aug 17:15</option>
      </Select>
      <Box p={2}></Box>
      <Box fontSize="sm" fontStyle={"italic"}>
        The cost will be added to your room bill
      </Box>
      <Button
      w="fit-content"
      p="7"
      px="50px"
      colorScheme="explore-blue"
      borderRadius="10px"
      m="0 auto"
      mt="1"
      fontWeight="bold"
      fontSize="l"
      onClick={navigateToConfirmation}
      >Book</Button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{
          backgroundImage: `url(${massageImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => changeTreatment("Massage", "Deck 11 - Wellness Deck")}>
        <Box as="span" flex='1' textAlign='left' fontSize='2xl'color="white">
        Massage
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor="white">
    Choose between a luxurious Full Body Massage for overall relaxation or a targeted Spot Massage to address 
    specific areas of tension. Our skilled therapists will tailor the treatment to your preferences.
    <Box p={1} fontSize='sm'>
        Location: Deck 11 - Wellness Deck
          </Box>
          <Box p={1} fontSize='sm'>
          Price: $85
          </Box>
          <Box p={1} fontSize='sm'>
          Duration: 60 minutes (Full Body), 30 minutes (Spot)
          </Box>
          <Box fontSize="sm">
          Choose an available time slot in the next 7 days
          </Box>
      <Select value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} placeholder="Choose time">
        <option value="24 Aug 15:00">24 Aug 15:00</option>
        <option value="24 Aug 16:00">24 Aug 16:00</option>
        <option value="24 Aug 17:00">24 Aug 17:00</option>
        <option value="24 Aug 18:00">24 Aug 18:00</option>
      </Select>
      <Box p={2}></Box>
      <Box fontSize="sm" fontStyle={"italic"}>
        The cost will be added to your room bill
      </Box>
      <Button
      w="fit-content"
      p="7"
      px="50px"
      colorScheme="explore-blue"
      borderRadius="10px"
      m="0 auto"
      mt="1"
      fontWeight="bold"
      fontSize="l"
      onClick={navigateToConfirmation}
      >Book</Button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton style={{
          backgroundImage: `url(${acupunctureImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={() => changeTreatment("Acupuncture", "Deck 7 - Tranquility Plaza")}>
        <Box as="span" flex='1' textAlign='left' fontSize='2xl'color="white">
        Acupuncture
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor="white">
    Experience the ancient art of Acupuncture, a practice that stimulates specific points on the body to 
    promote energy flow and balance. This holistic therapy offers numerous potential benefits.
    <Box p={1} fontSize='sm'>
        Location: Deck 7 - Tranquility Plaza
          </Box>
          <Box p={1} fontSize='sm'>
          Price: $70
          </Box>
          <Box p={1} fontSize='sm'>
          Duration: 60 minutes 
          </Box>
          <Box fontSize="sm">
          Choose an available time slot in the next 7 days
          </Box>
      <Select value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)} placeholder="Choose time">
        <option value="24 Aug 15:00">24 Aug 15:00</option>
        <option value="24 Aug 16:00">24 Aug 16:00</option>
        <option value="24 Aug 17:00">24 Aug 17:00</option>
        <option value="24 Aug 18:00">24 Aug 18:00</option>
      </Select>
      <Box p={2}></Box>
      <Box fontSize="sm" fontStyle={"italic"}>
        The cost will be added to your room bill
      </Box>
      <Button
      w="fit-content"
      p="7"
      px="50px"
      colorScheme="explore-blue"
      borderRadius="10px"
      m="0 auto"
      mt="1"
      fontWeight="bold"
      fontSize="l"
      onClick={navigateToConfirmation}
      >Book</Button>
    </AccordionPanel>
  </AccordionItem>
        </Accordion>

  </Box>
  </Flex>
  </div>
  );
};

export default TreatmentPage;
