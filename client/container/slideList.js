import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSlideList, deleteSlide} from '../action/index'

class SlideList extends Component {
  constructor(props){
    super(props);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
    this.addNewSlide = this.addNewSlide.bind(this);
  }
  componentWillMount() {
    this.props.fetchSlideList();
  }
  updateCurrentSlide(evt){
    this.props.currentSlide(evt.target.innerText);
  }
  addNewSlide(){
    console.log('Add a slide');
  }

  buildSildeList(slides){
    return slides.map((slide) => {
      if(slide !== ''){
        return (
          <li key={slide} className="list-group-item">
            <a href="javascript:void(0);" onClick={this.updateCurrentSlide}>{slide}</a>
          </li>
        );
      }else{
        return(
          <li key={"slide7"} className="list-group-item">
            <a href="javascript:void(0);" onClick={this.addNewSlide}>Add Slide</a>
          </li>
        )
      }
    });
  }

  renderList() {
    let template,
    slides = this.props.slides && this.props.slides.data && this.props.slides.data.length > 0 ? this.props.slides.data : [];
    slides.push('');
    template = this.buildSildeList(slides);
    return template;
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {slides: state.slideList.slides}
}

export default connect(mapStateToProps, {fetchSlideList: fetchSlideList, deleteSlide: deleteSlide})(SlideList);
