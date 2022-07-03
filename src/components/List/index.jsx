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
  const [posts, setPosts] = useState();

  useState(() => {
    axios
      .get('http://localhost:1337/api/blogs')
      .then(res => setPosts(res.data.data))
      .catch();
  });

  const color = useColorModeValue('gray.100', 'gray.600');
  return (
    <>
      <Divider mb="5" />
      <List mb="8">
        {!!posts ? (
          posts.map(post => (
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
              <Heading size="md">{post.attributes.title}</Heading>
            </Flex>
            <HStack justifyContent="space-between">
              <Text fontSize="xs" fontStyle="italic">
                {moment(post.attributes.date).format('LL')}
              </Text>
            </HStack>

            <Text noOfLines={3}>
              {post.attributes.description}
            </Text>

            <Flex flexDirection="row" alignItems='center' gap='2' justifyContent="end">
              <Link
                to={`/blog/${post.id}`}
              >
                Read More 
              </Link>
              <ArrowRight mx="10px" />
            </Flex>
          </ListItem>
          ))
        ) : (
          <p>kosong</p>
        )}
      </List>
    </>
  );
}

export default ListBlogs;
