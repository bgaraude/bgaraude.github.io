import  { useEffect } from "react";

type Props = {
    children?: Object
  }


const Carousel = ({ children }: Props) => {

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
      }, []);
    

    const carouselId = 'carousel'

    var images 
    if(Array.isArray(children)) {
        images = children;
    } else {
        images = [children];
    }

    return (
            <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {images.map((img, index) => {
                    if(index == 0){
                        return <button key={index} type="button" data-bs-target={img.props.alt} data-bs-slide-to={index} className="active" aria-current="true" aria-label={'Slide '+index}></button>
                    }else{
                        return <button key={index} type="button" data-bs-target={img.props.alt} data-bs-slide-to={index} aria-label={'Slide '+index}></button>
                    }
                    })}
                </div>
                <div className="carousel-inner">
                {images.map((img, index) => {
                    if(index == 0){
                        return (
                            <div key={index}  className="carousel-item active">
                                <div className="ratio ratio-16x9">
                                    <img src={img.props.src} className="d-block w-100" alt={img.props.alt}  />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{img.props.alt}</h5>
                                    <p></p>
                                </div>
                            </div>
                        )
                    }else {
                        return (
                            <div key={index}  className="carousel-item">
                                <div className="ratio ratio-16x9">
                                    <img src={img.props.src} className="d-block w-100" alt={img.props.alt}   />
                                </div>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{img.props.alt}</h5>
                                    <p></p>
                                </div>
                            </div>
                        )
                    }
                 })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={'#'+carouselId} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={'#'+carouselId} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

);
}



export default Carousel
