import React, {Component} from 'react';
import {connect} from 'react-redux';

import ModeController from '../component/modeController';
import SlideDetail from './slideDetail';
import SlideList from './slideList';
import ButtonContainer from './buttonContainer';

import {fetchSlideDetails, saveSlide, deleteSlide} from '../action/index';

class DisplayContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      currentSlide: null
    };
    this.updateEditMode = this.updateEditMode.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
    this.saveSlideDetails = this.saveSlideDetails.bind(this);
    this.deleteCurrentSlide = this.deleteCurrentSlide.bind(this);
    // this.editCurrentSlide = this.editCurrentSlide.bind(this);
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

  saveSlideDetails(){
    debugger;
    this.props.saveSlide(this.props.slideContent.slide)
  }

  deleteCurrentSlide(){
    this.props.deleteSlide(this.props.slideContent.slide.slideId);
  }

  render() {
    return (
      <div className="display-container">
          <section className="slide-list">
            <SlideList currentSlide={this.updateCurrentSlide}/>
          </section>
          <section className="slide-content">
            <div className="mode-controller">
              <ModeController
                editMode={this.updateEditMode}
                saveCurrentSlide={this.saveSlideDetails}
                deleteCurrentSlide={this.deleteCurrentSlide}/>
            </div>
            <SlideDetail editMode={this.state.editMode} />
          </section>
          {/* <ButtonContainer
            saveSlide={this.saveSlideDetails}
            deleteSlide={this.deleteCurrentSlide}
            editSlide={this.editCurrentSlide}/> */}
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
  fetchSlideDetails: fetchSlideDetails,
  saveSlide: saveSlide,
  deleteSlide: deleteSlide
})(DisplayContainer);
