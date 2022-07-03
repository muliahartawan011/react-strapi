import React from 'react';
import {
  VStack, Stack, Text, HStack
} from '@chakra-ui/react';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';


function Footer() {
  return (
    <Stack direction={['column', 'row']}  justifyContent="space-between" mt={['8', '0']} mb="10">
        <VStack align={['center', 'left']} textAlign={['center', 'left']}>
            <Text fontSize="xs" mb="2">
                Contents licensed under CC BY-NC-SA 4.0.
            </Text>
            <Text fontSize="xs">
                Made using React.js and Chara UI. Hosted on Digital Ocean.
            </Text>
            <Text fontSize="xs">
                MIT License © 2022 Mulia Hartawan N. Version 2.
            </Text>
        </VStack>
        <HStack ml="auto" justifyContent='center' pt={["5", "0"]} pb={["10", "0"]} spacing="9">
            <a href='mailto:mulia.hartawan@gmail.com' target="_blank" rel="noopener noreferrer" textDecoration="none" display="flex" alignItems="center">
                <Envelope />
            </a>

            <a href='https://github.com/MuliaHartawan' target="_blank" rel="noopener noreferrer" textDecoration="none" display="flex" alignItems="center">
                <Github />
            </a>

            <a  href='https://www.linkedin.com/in/mulia-hartawan-negara-b144881b7/' target="_blank" textDecoration="none" display="flex" rel="noopener noreferrer" alignItems="center">
                <Linkedin />
            </a>
        </HStack>  
    </Stack>
  );
}

export default Footer;
