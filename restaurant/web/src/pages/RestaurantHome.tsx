import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react"
import data from "./menu.json";
import Menu from "./Menu";
import theme from "../theme";
import { Link as ReactLink } from "react-router-dom";



const RestaurantHome = () => {

    
      

    return (
        <Stack spacing={4} direction="column" align="center" bgColor={theme.colors["explore-blue"].main} >

        <Box p={4} alignContent="center">
            <Heading as="h1" size="2xl" color={theme.colors["explore-yellow"].main}>
                    The Arctic Penguin
                </Heading>
                <Text mt={4} color={theme.colors["explore-yellow"].main}>
                Step aboard our luxurious cruise ship restaurant, The Arctic Penguin, and embark on a culinary journey like no other. Nestled within the heart of the ocean, our restaurant offers a dining experience that combines the thrill of exploration with the elegance of fine cuisine. As you indulge in our delectable dishes, you'll be surrounded by breathtaking panoramic views of the open sea, creating an unforgettable atmosphere for your dining pleasure.
                </Text>
                
                <Link as={ReactLink} to="/restaurant/1/reserve">
                    <Button mt={4} bgColor={theme.colors["explore-yellow"].main} textColor={theme.colors["explore-blue"].main}>
                    Book a Table
                </Button></Link>
                
            </Box>
  

        <Menu courses={data.courses} />

        </Stack>

    )
}

export default RestaurantHome;