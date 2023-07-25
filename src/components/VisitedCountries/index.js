const VisitedCountries = props => {
  const {country, handleRemove} = props
  const {id, name, imageUrl} = country
  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <p>{name}</p>
      <button type="button" onClick={() => handleRemove(id)}>
        Remove
      </button>
    </li>
  )
}

export default VisitedCountries
