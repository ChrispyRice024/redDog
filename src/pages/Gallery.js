import React from "react";

export default class Gallery extends React.Component {
  render() {

    const images = [
        {
            img:"./assets/small_black_kitchen.JPG",
            name:'Small Black Kitchen'
        },
        {
            img:"./assets/unfinished_kitchen.jpg",
            name:'Unfinished Kitchen'
        },
        {
            img:"./assets/unfinished_kitchen2.jpg",
            name:'Unfinished Kitchen'
        },
        {
            img:"./assets/white_kitchen.jpg",
            name:'White Kitchen'
        },
        {
            img:'./assets/blue_kitchen_marble.jpg',
            name:'Blue Marble Kitchen'
        },
        {
            img:'./assets/blue_mini_bar.jpg',
            name:''
        },
        {
            img:'./assets/',
            name:''
        },
    ]

    return (

        <div id='gallery'>
            {images.map((image, index) => (
                <div key={index}>
                <img className='gallery-img' src={image.img} alt={image.name} />
          </div>
        ))}
        </div>

    );
  }
}
