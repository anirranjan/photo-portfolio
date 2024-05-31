import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ImageGallery from './components/ImageGallery';
import AboutPage from './components/AboutPage'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageGallery/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
