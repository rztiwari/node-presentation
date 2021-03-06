import React, {Component} from 'react';

class EditableText extends Component {
  constructor(props){
    super(props);

    this.editText = this.editText.bind(this);
    this.textEntered = this.textEntered.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeLine = this.removeLine.bind(this);
    this.addSubline = this.addSubline.bind(this);

    this.state = {
      editable : this.props.editMode,
      enteredText: this.props.value,
      dataId: this.props.dataId
    };
  }

  textEntered(){
    if(this.state.enteredText){
      this.setState({editable: true});
    }
  }

  removeLine(evt){
    this.props.remove(this.state.dataId);
  }

  addSubline(){
    this.props.addSubline(this.state.dataId);
  }

  editText(){
    if(this.props.editMode){
      this.setState({editable: false});
    }
  }

  handleChange(event){
     this.setState({enteredText: event.target.value});
     this.props.updateLine(this.state.dataId, this.state.enteredText);
  }

  render(){
    let dataId = {dataId: this.state.dataId};
    console.log(this.state.enteredText);
    return (
      <div value={this.state.enteredText}>
        <div className="inline line-content">
          <div onDoubleClick={this.editText} hidden={this.state.editable}>{this.state.enteredText}</div>
          <textarea placeholder="Enter text" hidden={!this.state.editable}  value={this.state.enteredText}
            onBlur={this.textEntered}
            onChange={this.handleChange}></textarea>
        </div>
        <div className="inline line-cta">
          <button type="button" className="btn btn-link" aria-label="Remove" onClick={this.removeLine}>
            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </button>
          <button type="button" className="btn btn-link" aria-label="Add" onClick={this.addSubline}>
            <span className="glyphicon glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default EditableText;
