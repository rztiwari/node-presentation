import React, {Component} from 'react';

class EditableText extends Component {
  constructor(props){
    super(props);

    this.editText = this.editText.bind(this);
    this.textEntered = this.textEntered.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {editable : !!this.props.value && !this.props.editable , enteredText: this.props.value};
  }

  textEntered(){
    if(this.state.enteredText){
      this.setState({editable: true});
    }
  }

  editText(){
    debugger;
    if(this.props.editable){
      this.setState({editable: false});
    }
  }

  handleChange(event){
    console.log(event);
     this.setState({enteredText: event.target.value});
  }

  render(){
    return (
      <div value={this.state.enteredText}>
        <div onDoubleClick={this.editText} hidden={!this.state.editable}>{this.state.enteredText}</div>
        <textarea placeholder="Enter text" hidden={this.state.editable}  value={this.state.enteredText}
          onBlur={this.textEntered}
          onChange={this.handleChange}></textarea>
      </div>
    )
  }
}

export default EditableText;
