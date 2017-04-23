import React, {Component} from 'react';

const slides = ['slide1', 'slide2', 'slide3', 'slide4'];

class SlideList extends Component {

  renderList(){
      return slides.map((slide) => {
             return (
                  <li
                    key={slide}
                    className="list-group-item">
                        {slide}
                  </li>
             ) ;
      });
  }

  render(){
    return(
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

export default SlideList;
