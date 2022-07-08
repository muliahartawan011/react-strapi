import React, { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  VStack,
  Icon,
  HStack,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from 'react-avatar';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg'
import {ReactComponent as Facebook} from '../../assets/facebook.svg'
import {ReactComponent as Link} from '../../assets/link.svg'
import {ReactComponent as Saved} from '../../assets/saved.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'

function Blog() {
  const [post, setPost] = useState();
  const { id } = useParams();
  useState(() => {
    axios
      .get(`http://localhost:1337/api/blogs/${id}?populate=%2A`)
      .then(res => setPost(res.data.data))
      .catch();
  });

  if (!!post) {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py="1rem"
        >
          <HStack justifyContent="space-between" w="100%">
            <HStack alignItems="center">
              <Avatar name={post.attributes.author.data.attributes.username} round={true} size="50px"/>
              <VStack alignItems='left'>
                <Text>{post.attributes.author.data.attributes.username}</Text>
                <Text fontStyle='italic' fontSize='xs' color='gray.500'>{moment(post.attributes.date).format("LL")}</Text>
              </VStack>
            </HStack>
            <HStack gap="7">
                <HStack gap="2">
                  <Icon as={Twitter} w="4" h="4" color='gray.500' _hover={{color:'gray.700', transition:'ease-out, 0.5s', cursor:"pointer"}}   />
                  <Icon as={Facebook} w="4" h="4" color='gray.500' _hover={{color:'gray.700', transition:'ease-out, 0.5s', cursor:"pointer"}} />
                  <Icon as={Linkedin} w="4" h="4" color='gray.500'_hover={{color:'gray.700', transition:'ease-out, 0.5s', cursor:"pointer"}} />
                  <Icon as={Link} w="5" h="5" color='gray.500' mr="rem" _hover={{color:'gray.700', transition:'ease-out, 0.5s', cursor:"pointer"}} />
                </HStack>
                <Icon as={Saved} _hover={{color:'gray.700', transition:'ease-out, 0.5s', cursor:"pointer"}} />
            </HStack>
          </HStack>
          <Text fontSize="2xl" fontWeight='bold' my="2rem">{post.attributes.title}</Text>
          <Image src={`http://localhost:1337${post.attributes.cover.data.attributes.url}`} mb='1rem' />
          <Text>{post.attributes.body}</Text>
        </Box>
      </>
    );
  }

  return (
    <>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </>
  );
}

export default Blog;
