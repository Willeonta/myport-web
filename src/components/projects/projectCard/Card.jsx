const Card = ({ imgUrl, title, url }) => {
  return (
    <div className="p">
        <div className="p_browser">
            <div className="p_circle"></div>
            <div className="p_circle"></div>
            <div className="p_circle"></div>
        </div>
        <div>
            <img src={imgUrl} alt={title} className="p_img" />
            <div className="projects_content">
                <div className="content_top">
                    <h5>{title}</h5>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">Watch</a>
            </div>
        </div>
    </div>
  )
}
export default Card