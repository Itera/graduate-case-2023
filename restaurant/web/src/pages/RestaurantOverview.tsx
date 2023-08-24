import {
  Box,
  Card,
  Text,
  CardBody,
  Image,
  Stack,
  CardFooter,
  Button,
  Heading,
  Link as ChakraLink,
  HStack
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import theme from '../theme';
import penguin from './thearticpenguin.png';

const RestaurantOverview = () => {
  return (
    <Stack
      direction="column"
      align="center"
      alignContent="center"
      justifyContent="center"
      backgroundColor={theme.colors['explore-light-blue'].main}
    >

      <Box 
        height='100%'>
        <ChakraLink as={ReactRouterLink} to="/restaurant/1">

          <Card
            p={6}
            m={8}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src={penguin}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">The Arctic Penguin</Heading>

                <Text py="2">
                Step aboard our luxurious cruise ship restaurant, The Arctic Penguin, and embark on a culinary journey like no other. Nestled within the heart of the ocean, our restaurant offers a dining experience that combines the thrill of exploration with the elegance of fine cuisine. As you indulge in our delectable dishes, you'll be surrounded by breathtaking panoramic views of the open sea, creating an unforgettable atmosphere for your dining pleasure.
                </Text>
              </CardBody>

              <CardFooter>
                <HStack>
                  <Button variant="outline" color="#FFB46D">
                    Book
                  </Button>
                  <ChakraLink as={ReactRouterLink} to="/restaurant/1">
                    <Button variant="outline" color="#FFB46D">
                      See Menu
                    </Button>
                  </ChakraLink>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        </ChakraLink>

        <ChakraLink as={ReactRouterLink} to="/restaurant/1">
          <Card
            p={6}
            m={8}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src="https://imgix.swoop-arctic.com/SIL_5_SIL_RTD_Silver-Explorer_Dining-1.jpg?auto=format,enhance,compress&fit=crop&crop=entropy,faces,focalpoint&w=580&h=480&q=40"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">The South Pole</Heading>

                <Text py="2">
                Inspired by the rich culinary traditions of South America, Africa, Australia, and New Zealand, our talented team of chefs have meticulously crafted a menu that showcases the best of southern cuisine. From the succulent flavors of Argentinean steaks to the bold spices of African stews, each dish is a testament to the diverse flavors and cooking techniques that define these distinct cultures.
                </Text>
              </CardBody>

              <CardFooter>
                <HStack>
                  <Button variant="outline" color="#FFB46D">
                    Book
                  </Button>
                  <ChakraLink as={ReactRouterLink} to="/restaurant/1">
                    <Button variant="outline" color="#FFB46D">
                      See Menu
                    </Button>
                  </ChakraLink>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        </ChakraLink>

        <ChakraLink as={ReactRouterLink} to="/restaurant/1">
          <Card
            p={6}
            m={8}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">The North Pole</Heading>

                <Text py="2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  recusandae neque, velit praesentium numquam ducimus totam
                  atque illo nam qui!
                </Text>
              </CardBody>

              <CardFooter>
                <HStack>
                  <Button variant="outline" color="#FFB46D">
                    Book
                  </Button>
                  <ChakraLink as={ReactRouterLink} to="/restaurant/1">
                    <Button variant="outline" color="#FFB46D">
                      See Menu
                    </Button>
                  </ChakraLink>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        </ChakraLink>

        <ChakraLink as={ReactRouterLink} to="/restaurant/1">
          <Card
            p={6}
            m={8}
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '200px' }}
              src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody>
                <Heading size="md">The South Pole</Heading>

                <Text py="2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  recusandae neque, velit praesentium numquam ducimus totam
                  atque illo nam qui!
                </Text>
              </CardBody>

              <CardFooter>
                <HStack>
                  <Button variant="outline" color="#FFB46D">
                    Book
                  </Button>
                  <ChakraLink as={ReactRouterLink} to="/restaurant/1">
                    <Button variant="outline" color="#FFB46D">
                      See Menu
                    </Button>
                  </ChakraLink>
                </HStack>
              </CardFooter>
            </Stack>
          </Card>
        </ChakraLink>
      </Box>
    </Stack>
  );
};

export default RestaurantOverview;
