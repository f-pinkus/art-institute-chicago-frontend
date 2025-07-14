export function ArtworksIndex ({ artworks }) {
  return (
    <div>
      <h1>Art Institute of Chicago</h1>

      {artworks.map((art) => (
        <div key={art.id}>
          <h2>{art.title}</h2>
          <p>{art.artist_display}</p>
          {art.image_id && (
            <img src="https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg" alt={art.alt_text} width={300}/>
          )}
        </div>
      ))}
    </div>
  )
}