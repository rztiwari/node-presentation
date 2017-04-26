import React, {Component} from 'react';

class EditableText extends Component {
  constructor(props){
    super(props);

    this.editText = this.editText.bind(this);
    this.textEntered = this.textEntered.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeLine = this.removeLine.bind(this);

    this.state = {
      editable : !!this.props.value && !this.props.editable ,
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
    // debugger;
    // console.log(evt);
    this.props.remove(this.state.dataId);
  }

  editText(){
    if(this.props.editable){
      this.setState({editable: false});
    }
  }

  handleChange(event){
    console.log(event);
     this.setState({enteredText: event.target.value});
  }

  render(){
    let dataId = {dataId: this.state.dataId};
    console.log(dataId);
    return (
      <div value={this.state.enteredText}>
        <div className="inline line-content">
          <div onDoubleClick={this.editText} hidden={!this.state.editable}>{this.state.enteredText}</div>
          <textarea placeholder="Enter text" hidden={this.state.editable}  value={this.state.enteredText}
            onBlur={this.textEntered}
            onChange={this.handleChange}></textarea>
        </div>
        <div className="inline line-cta">
          <button type="button" className="btn btn-link" aria-label="Remove" onClick={this.removeLine}>
            <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    )
  }
}

export default EditableText;
