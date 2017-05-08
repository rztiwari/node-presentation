import React, {Component} from 'react';
import {connect} from 'react-redux';

import ModeController from '../component/modeController';
import SlideDetail from './slideDetail';
import SlideList from './slideList';
import {fetchSlideDetails} from '../action/index';

class DisplayContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      currentSlide: ''
    };
    this.updateEditMode = this.updateEditMode.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
  }

  updateEditMode(value) {
    this.setState({editMode: value});
  }

  updateCurrentSlide(value){
    this.setState({currentSlide: value});
    if(value){
      this.props.fetchSlideDetails(value);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-2 ">
            <SlideList currentSlide={this.updateCurrentSlide}/>
          </div>
          <div className="col-xs-10">
            <div className="row">
              <ModeController editMode={this.updateEditMode}/>
            </div>
            <SlideDetail editMode={this.state.editMode} slideContent={this.props.slideContent} slideId={this.state.currentSlide}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned will be shown as props for the component
  return {
    slideContent: state.slideContent //This will be available as this.props.slideDetail
  };
}

export default connect(mapStateToProps, {
  fetchSlideDetails: fetchSlideDetails
})(DisplayContainer);
