import React from 'react';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import {ReactComponent as Logo} from '../../assets/strapi-logo.svg'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <>
        <Box display="flex" justifyContent="space-between" alignItems='center' py='2rem'>
            <Link to='/'>
            <Box display='flex' flexDirection='row' gap='4' alignItems='center'>
                <Logo />
                <Heading fontSize='2xl'>Strapi</Heading>
            </Box>
            </Link>
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
        </>
    );
}

export default Navbar;