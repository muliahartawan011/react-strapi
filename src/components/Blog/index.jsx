import React, { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';

function Blog() {
  const [post, setPost] = useState();
  const { id } = useParams();
  useState(() => {
    axios
      .get(`http://localhost:1337/api/blogs/${id}?populate=*`)
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
          py="2rem"
        >
          <Text fontSize="2xl" fontWeight='bold'>{post.attributes.title}</Text>
          <Text fontStyle='italic' fontSize='xs' mr='auto' mb='2rem'>{moment(post.attributes.date).format("LL")}</Text>
          <Image src={`http://localhost:1337${post.attributes.cover.data.attributes.url}`} mb='1rem' />

          <Text>{post.attributes.description}</Text>
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
