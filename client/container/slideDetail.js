import React, {Component} from 'react';
import {connect} from 'react-redux';

import EditableText from '../component/EditableText';
import ButtonContainer from './buttonContainer';
import {fetchSlideDetails, deleteLine, addSubLine, saveSlide, editLine, deleteSlide} from '../action/index'

class SlideDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editSlide: false,
      deleteSlide: false,
      editMode: this.props.editMode
    }

    this.saveSlideDetails = this.saveSlideDetails.bind(this);
    this.updateButtonStates = this.updateButtonStates.bind(this);
    this.deleteCurrentSlide = this.deleteCurrentSlide.bind(this);
  }

  // componentWillMount() {
  //   if(this.props.slide){
  //     this.props.fetchSlideDetails(this.props.slide);
  //   }
  // }

  saveSlideDetails(){
    this.props.saveSlide(this.props.slideId, this.props.slideContent.slide)
  }

  deleteCurrentSlide(){
    this.props.deleteSlide(this.props.slideId);
  }

  updateButtonStates(states) {
    if (states.editSlide === true) {
      this.setState({editSlide: true});
    } else {
      this.setState({editSlide: false})
    }
  }
  render() {
    if (this.props.slideContent && this.props.slideContent.slide && this.props.slideContent.slide.body) {
      return (
        <div className="container-fluid">
          <h2 className="text-center">{this.props.slideContent.slide.heading}</h2>
          <ul>
            {this.renderLines(this.props.slideContent.slide.body.data)}
          </ul>
          <div className="slide-footer container">
            <div className="col-xs-2 previous-slide">
              <a href="javascript:void(0);" onClick={this.editSlide}>
                <span className="glyphicon glyphicon-arrow-left"></span>
              </a>
            </div>
            <ButtonContainer
              updateButtonContainerState={this.updateButtonStates}
              saveSlide={this.saveSlideDetails}
              deleteSlide={this.deleteCurrentSlide}/>
            <div className="col-xs-2 next-slide">
              <a href="javascript:void(0);" onClick={this.editSlide}>
                <span className="glyphicon glyphicon-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }

  getLineText(content, id) {
    return (
      <div>
        <EditableText value={content}
          editMode={this.state.editMode} remove={this.props.deleteLine}
          addSubline={this.props.addSubLine} dataId={id}
          editable={this.state.editSlide} updateLine={this.props.editLine}/>
      </div>
    );
  }

  getLineContent(line) {
    if (line && line.value) {
      if (!line.value.type || line.value.type === 'text') {
        if (!line.children || !line.children.length) {
          return (
            <div>
              {this.getLineText(line.value.content, line.id)}
            </div>
          );
        } else {
          return (
            <div>
              {this.getLineText(line.value.content, line.id)}
              <ul>
                {this.renderLines(line.children)}
              </ul>
            </div>
          );
        }
      }
    }
  }

  renderLines(data) {
    return data.map((line) => {
      if (line.id) {
        return (
          <li key={line.id}>
            {this.getLineContent(line)}
          </li>
        );
      }
    });
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
  deleteLine: deleteLine,
  addSubLine: addSubLine,
  saveSlide: saveSlide,
  editLine: editLine,
  deleteSlide: deleteSlide
})(SlideDetail);
