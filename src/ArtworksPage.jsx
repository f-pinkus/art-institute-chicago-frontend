import axios from "axios"
import { useState, useEffect } from "react"
import { ArtworksIndex } from "./ArtworksIndex"

export function ArtworksPage() {
  const [artworks, setArtworks] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/artwork.json")
    .then((response) => {
      console.log(response.data.data);
      setArtworks(response.data.data)
    })
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <ArtworksIndex artworks={artworks}/>
    </main>
  )
}