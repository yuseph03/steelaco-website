import PropTypes from 'prop-types';

export default function Card({title, description, image}) {
    return(
          <div className="col-md-4">
            <div className="card">
              <img height="300" src={image} className="card-img-top" alt="عکس محصول"/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}