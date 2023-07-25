const Countries = props => {
  const {country, handleVisit} = props
  const {id, imageUrl, name, isVisited} = country

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={() => handleVisit(id)}>
          <p>Visit</p>
        </button>
      )}
    </li>
  )
}

export default Countries
