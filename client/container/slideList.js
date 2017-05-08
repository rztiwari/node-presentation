import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSlideList, deleteSlide} from '../action/index'

class SlideList extends Component {
  constructor(props){
    super(props);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
  }
  componentWillMount() {
    this.props.fetchSlideList();
  }
  updateCurrentSlide(evt){
    this.props.currentSlide(evt.target.innerText);
  }
  renderList() {
    if (this.props.slides && this.props.slides.data && this.props.slides.data.length > 0) {
      return this.props.slides.data.map((slide) => {
        return (
          <li key={slide} className="list-group-item">
            <a href="javascript:void(0);" onClick={this.updateCurrentSlide}>{slide}</a>
          </li>
        );
      });
    }
    return <li></li>;
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
