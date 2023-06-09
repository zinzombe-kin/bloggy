import { Box, Button, Divider, Flex, Grid, Heading, Icon } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { BiBookReader, BiLogOut } from "react-icons/bi";
import { BsFillBookmarkStarFill } from "react-icons/bs"
import { FaBars, FaPlus, FaTimes, FaUserPlus } from "react-icons/fa";
import IconLink from "./IconLink";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
import { User } from "firebase/auth";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    const [display, setDisplay] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        setUser(auth.currentUser)
    }, [auth])

    return ( 
        <Grid 
        background="black"
        h={{ base: "auto", md: "100vh" }} 
        w={{ base: `full`, lg: "6vw" }}
        justifyContent="center"
        alignItems="center"
        shadow={{ lg: "dark-lg" }}
        position="relative"
        p="5"
        >
            <Flex
            display={{ base: "block", md: "none" }}
            gap="30px"
            >
            <Heading
                        color="white"
                        className="font-openSans"
                        display={ display ? "none": "block" }
                        >Bloggy</Heading>
                <Icon 
                        fill="blue.600"
                        as={FaTimes} 
                        boxSize={7}
                        onClick={() => setDisplay(!display)}
                        position="absolute"
                        right={10}
                        top={10}
                        w={{ base: "20px", md: 0 }}
                        display={{ base: display ? "block" : "none", lg: "none" }}
                        />
                        <Icon 
                        display={{ base: display ? "none" : "block", lg: "none" }}
                        as={FaBars}
                        boxSize={7} 
                        onClick={() => setDisplay(!display)}
                        position="absolute"
                        right={4}
                        top={5}
                        fill="blue.600"
                />    
            </Flex>
            <Grid
                display={{base: display ? "grid": "none", md:"grid"}}
                h="100vh"
                p="3"
            >
                <IconLink setDisplay={setDisplay} dest="/home" color="" icon={AiOutlineHome} linkText="Home" />
                <IconLink setDisplay={setDisplay} dest="/blogs/all" color="" icon={BiBookReader} linkText="Articles" />
                <IconLink setDisplay={setDisplay} dest="/blogs/favorites" color="" icon={BsFillBookmarkStarFill} linkText="Favorites" />
                <IconLink setDisplay={setDisplay} dest="/account" color="" icon={AiOutlineUser} linkText="Account" />
                <IconLink setDisplay={setDisplay} dest="/blogs/new" color="" icon={FaPlus} linkText="New blog" />
                <Divider />
                <Box
                className="text-center"
                >
                    {
                        user ?
                        window.innerWidth < 400 ?
                            <Button
                            colorScheme="red"
                            variant="link"
                            >Logout</Button> :
                            <BiLogOut fill="red" size={40}
                            />
                        : 
                        <Link to="/login">
                            <Icon 
                            ml="4px"
                            boxSize={30}
                            as={FaUserPlus} />
                        </Link>
                    }
                </Box>
            </Grid>
        </Grid> 
     );
}
 
export default NavBar;
