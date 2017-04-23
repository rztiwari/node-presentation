import React, {Component} from 'react';

class EditableText extends Component {
  constructor(props){
    super(props);

    this.editText = this.editText.bind(this);
    this.textEntered = this.textEntered.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {editable : !!this.props.value , enteredText: this.props.value};
  }

  textEntered(){
    if(this.state.enteredText){
      this.setState({editable: true});
    }
  }

  editText(){
    this.setState({editable: false});
  }

  handleChange(event){
     this.setState({enteredText: event.target.value});
  }

  render(){
    return (
      <div value={this.state.enteredText}>
        <div onDoubleClick={this.editText} hidden={!this.state.editable}>{this.state.enteredText}</div>
        <textarea placeholder="Enter text" onBlur={this.textEntered} hidden={this.state.editable} value={this.state.enteredText} onChange={this.handleChange}></textarea>
      </div>
    )
  }
}

export default EditableText;
