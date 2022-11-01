import { useState } from "react"

export default function AddAlbum({ setToggle, toggle }) {
  const [album, setAlbum] = useState('')
  const [artist, setArtist] = useState('')
  const [year, setYear] = useState(1970)
  const handleSubmit = (e) => {
    e.preventDefault()
    // check that all fields are filled
    if (!album || !artist || !year) {
      alert('Please fill in all fields')
      return
    }
    const newAlbum = { artist, album, year }
    fetch('https://albums-api-tj.web.app/albums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAlbum)
    })
      .then(() => {
        setToggle(!toggle)
        setAlbum('')
        setArtist('')
        setYear(1970)
      })
      .catch(alert)
  }
  return (
    <section className="add-album">
      <h3>Add New Album</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="album">Album:
          <input type="text" name="album" required
            onChange={e => setAlbum(e.target.value)}
            value={album} />
        </label>
        <br />
        <label htmlFor="artist">Artist:
          <input type="text" name="artist" required
            onChange={e => setArtist(e.target.value)}
            value={artist} />
        </label>
        <br />
        <label htmlFor="year">Year:
          <input type="number" name="year" required
            onChange={e => setYear(e.target.value)}
            value={year} />
        </label>
        <br />
        <input type="submit" value='Add Album' />
      </form>
    </section>
  )
}