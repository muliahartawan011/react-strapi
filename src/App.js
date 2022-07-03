import React from 'react';
import {
  ChakraProvider,
  theme,
  Container,
} from '@chakra-ui/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ListBlogs from './components/List'
import Blog from './components/Blog';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='2xl'>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListBlogs />} />
          <Route path='/blog/:id' element={<Blog />} />
        </Routes>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
