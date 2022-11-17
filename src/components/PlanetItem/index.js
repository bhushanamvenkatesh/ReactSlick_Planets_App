import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each

  return (
    <div>
      <img src={imageUrl} className="planet-image" alt={`planet ${name}`} />
      <h1 className="heading">{name}</h1>
      <p className="heading">{description}</p>
    </div>
  )
}

export default PlanetItem
