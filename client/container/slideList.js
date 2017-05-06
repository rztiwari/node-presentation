import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSlideList} from '../action/index'

class SlideList extends Component {

  componentWillMount() {
    this.props.fetchSlideList();
  }

  renderList() {
    if (this.props.slides && this.props.slides.data && this.props.slides.data.length > 0) {
      return this.props.slides.data.map((slide) => {
        return (
          <li key={slide} className="list-group-item">
            {slide}
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

export default connect(mapStateToProps, {fetchSlideList: fetchSlideList})(SlideList);
