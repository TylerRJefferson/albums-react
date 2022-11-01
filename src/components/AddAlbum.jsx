import { useState } from "react"

export default function AddAlbum() {
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [year, setYear] = useState(1960)
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="add-album">
      <h3>Add New Album</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="album">Album:
          <input type="text" name="album"
            onChange={e => setAlbum(e.target.value)}
            value={album} />
        </label>
        <br />
        <label htmlFor="artist">Artist:
          <input type="text" name="artist"
            onChange={e => setArtist(e.target.value)}
            value={artist} />
        </label>
        <br />
        <label htmlFor="year">Year:
          <input type="number" name="year"
            onChange={e => setYear(e.target.value)}
            value={year} />
        </label>
        <br />
        <input type="submit" value='Add Album' />
      </form>
    </section>
  )
}