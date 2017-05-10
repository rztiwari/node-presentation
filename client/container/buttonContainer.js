import React, {Component} from 'react';

export default class ButtonContainer extends Component {

  constructor(props){
    super(props);

    this.editSlide = this.editSlide.bind(this);
    this.saveSlide = this.saveSlide.bind(this);
    this.deleteSlide = this.deleteSlide.bind(this);
    // this.updateButtonState = this.updateButtonState.bind(this);

    this.state = {
      editSlide: false,
      deleteSlide: false
    }
  }

  editSlide() {
    this.setState({editSlide: true});
    this.props.editSlide(true);
  }

  saveSlide() {
    this.setState({editSlide: false});
    this.props.saveSlide(true);
    // this.updateButtonState();
  }

  deleteSlide() {
    this.setState({deleteSlide: false});
    this.props.deleteSlide(true);
    // this.updateButtonState();
  }

  // updateButtonState(){
  //   this.props.updateButtonContainerState(this.state);
  // }

  render(){
    return(
      <div className="slide-footer container">
        <div className="col-xs-2 previous-slide">
          <a href="javascript:void(0);">
            <span className="glyphicon glyphicon-arrow-left"></span>
          </a>
        </div>
        <div className="col-xs-8 slide-buttons">
          <button type="button" className="btn btn-primary" onClick={this.editSlide}>Edit Side</button>
          <button type="button" className="btn btn-success" onClick={this.saveSlide}>Save Slide</button>
          <button type="button" className="btn btn-danger" onClick={this.deleteSlide}>Delete Slide</button>
        </div>
        <div className="col-xs-2 next-slide">
          <a href="javascript:void(0);">
            <span className="glyphicon glyphicon-arrow-right"></span>
          </a>
        </div>
      </div>
    );
  }
}
