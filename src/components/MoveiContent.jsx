import React from "react";
import './movieContent.css';
import titleImg from '../images/transformer-title.png';
import Button from "./Button";

function MovieContent() {
    return (
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
        <div className="button">
           <Button 
           icon={<ion-icon name="bookmark-outline"></ion-icon>}
           name='Book'
           color='#ff3700'
           bgColor='#ffffff'
           />
           <Button icon={<ion-icon name="add-outline"></ion-icon>}
           name="My List"
           />
        </div>
    </div>
    )
}

export default MovieContent
