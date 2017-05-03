import React, {Component} from 'react';

export default class ModeController extends Component {

  constructor(props){
    super(props);

    this.startEdit = this.startEdit.bind(this);
    this.startPresentation = this.startPresentation.bind(this);
  }

  startEdit(){
    this.props.editMode(true);
  }

  startPresentation(){
    this.props.editMode(false);
  }

  render(){
    return(
      <div>
        <div className="mode-controller">
          <a href="javascript:void(0);" onClick={this.startEdit}><span className="glyphicon glyphicon glyphicon-pencil"></span></a>
          <a href="javascript:void(0);" onClick={this.startPresentation}><span className="glyphicon glyphicon-film"></span></a>
        </div>
      </div>
    );
  }
}
