import axios from 'axios'
import './App.css'
import { Header } from './Header';
import { ArtworksPage } from './ArtworksPage'
import { Footer } from './Footer';

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <ArtworksPage />
      <Footer />
    </div>
  )
}

export default App
