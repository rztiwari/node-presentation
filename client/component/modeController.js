import React, {Component} from 'react';

export default class ModeController extends Component {

  constructor(props) {
    super(props);

    this.editSlide = this.editSlide.bind(this);
    this.presentSlide = this.presentSlide.bind(this);
    this.saveSlide = this.saveSlide.bind(this);
    this.deleteSlide = this.deleteSlide.bind(this);
  }

  editSlide() {
    this.props.editMode(true);
  }

  presentSlide() {
    this.props.editMode(false);
  }

  saveSlide() {
    this.props.saveCurrentSlide(false);
  }

  deleteSlide() {
    this.props.deleteCurrentSlide(false);
  }

  render() {
    return (
      <div>
        <div className="mode-controller">
          <a href="javascript:void(0);" onClick={this.editSlide}>
            <span className="glyphicon glyphicon glyphicon-pencil"></span>
          </a>
          <a href="javascript:void(0);" onClick={this.presentSlide}>
            <span className="glyphicon glyphicon-facetime-video"></span>
          </a>
          <a href="javascript:void(0);" onClick={this.saveSlide}>
            <span className="glyphicon glyphicon glyphicon-ok"></span>
          </a>
          <a href="javascript:void(0);" onClick={this.deleteSlide}>
            <span className="glyphicon glyphicon-remove"></span>
          </a>
        </div>
      </div>
    );
  }
}
