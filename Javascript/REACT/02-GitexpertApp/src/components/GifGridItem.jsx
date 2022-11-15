
export const GifGridItem = ({ title, url, id }) => {
    console.log (id, url, title)
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
