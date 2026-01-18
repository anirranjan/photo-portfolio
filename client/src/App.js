import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ImageGallery/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
