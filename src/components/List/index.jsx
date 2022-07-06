import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
 
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import {Link} from 'react-router-dom'

function ListBlogs() {
  const color = useColorModeValue('gray.100', 'gray.600');
  return (
    <>
      <Divider mb="5" />
      <List mb="8">
            <ListItem
            display="flex"
            flexDirection="column"
            gap="4"
            my="4"
            p="2"
            _hover={{
              background: color,
              rounded: 'lg',
            }}
          >
            <Flex justifyContent="space-between" alignContent="center">
              <Heading size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            </Flex>
            <HStack justifyContent="space-between">
              <Text fontSize="xs" fontStyle="italic">
                {moment("03/02/2013").format('LL')}
              </Text>
            </HStack>

            <Text noOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam animi quae. Cumque quidem quam aliquam, quaerat odit fuga aliquid saepe, expedita provident voluptate sit sint fugit eveniet cupiditate facilis!
            </Text>

            <Flex flexDirection="row" alignItems='center' gap='2' justifyContent="end">
              <Link
                to={`/blog/1`}
              >
                Read More 
              </Link>
              <ArrowRight mx="10px" />
            </Flex>
          </ListItem>        
      </List>
    </>
  );
}

export default ListBlogs;
