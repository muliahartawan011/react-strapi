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
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          py="2rem"
        >
          <Text fontSize="2xl" fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          <Text fontStyle='italic' fontSize='xs' mr='auto' mb='2rem'>{moment("05/06/2000").format("LL")}</Text>
          <Image src='https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' mb='1rem' />

          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad eum quaerat eos consequuntur vel sint cupiditate, ut mollitia cumque! Natus similique rem nostrum omnis assumenda, molestias sint esse quidem.</Text>
        </Box>
      </>
    );
  }


export default Blog;
