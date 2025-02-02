import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import theme from '../theme';


const Links = [['Home', '/'], ['My Bookings', '/mybookings'] , ['Restaurants', '/restaurants'], ['Spa', '/'] , ['Trips', '/']];


const SimpleNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={theme.colors['explore-blue'].main} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <ChakraLink as={ReactRouterLink} to="/"><Box textColor={theme.colors['explore-gray'].main}>Explore</Box></ChakraLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Text>
                <ChakraLink as={ReactRouterLink} to="/">
                    Home
                </ChakraLink>
              </Text>
              <Text>
                <ChakraLink as={ReactRouterLink} to="/mybookings">
                  My Bookings
                </ChakraLink>
              </Text>
              <Text>
                <ChakraLink as={ReactRouterLink} to="/restaurants">
                  Restaurants
                </ChakraLink>
              </Text>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                <ChakraLink as={ReactRouterLink} to="/mybookings">
                    My Bookings
                  </ChakraLink></MenuItem>
                <MenuItem>Spa</MenuItem>
                <MenuItem>
                  <ChakraLink as={ReactRouterLink} to="/restaurants">
                    Restaurants
                  </ChakraLink>
                </MenuItem>
                <MenuItem>Excursions</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(([title, link]) => (
                <ChakraLink as={ReactRouterLink} to={link} color={theme.colors['explore-gray'].main} >{title}</ChakraLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default SimpleNav;
