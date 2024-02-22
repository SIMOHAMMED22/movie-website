import React, {useState, useEffect} from "react";
import './banner.css';
import bgImg from '../images/bg-transformer.jpg';
import titleImg from '../images/transformer-title.png';

function Banner() {
    const [movie, setMovies] = useState([]);

        const fetchData = () => {
            fetch('http://localhost:3000/data/movieData.json')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(e => console.log(e.message));
        };
    
        useEffect(() => {
            fetchData();
        }, []);

    return (
      <div className="banner">
        <div className="movie">
            <img src={bgImg} alt="background Image" className="bgImg active" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="content active">
                            <img src={titleImg} alt="Movie Title" className="movie-title" />
                            <h4>
                                <span>Year</span>
                               <span>
                                <i>age</i>
                               </span>
                               <span>length</span>
                               <span>category</span>
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Maiores, nostrum voluptatem. Sunt nihil a soluta maiores,
                                numquam assumenda dicta aliquam repudiandae ipsum hic, eveniet
                                magni minus consectetur, eos aperiam quae iste ipsa sed. Et
                                optio molestiae, soluta illum ipsa harum dignissimos in dicta
                                quis! Itaque temporibus qui iusto architecto velit!
                            </p>
                            <div className="button">Button</div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="date active">
                            <h2>On 15th August</h2> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   );
}

export default Banner;
