import React, {Component}  from 'react';

export default class TextContainer extends Component {
  constructor(props){
    super(props);

    this.updateValue = this.updateValue.bind(this);
    this.removeLine = this.removeLine.bind(this);
    this.addSubline = this.addSubline.bind(this);

    this.state = {
      value: this.props.value,
      dataId: this.props.dataId
    }
  }

  updateValue(evt){
      this.setState({value: evt.target.innerText});
      this.props.updateLine(this.state.dataId, evt.target.innerText);
  }

  removeLine(evt){
    this.props.remove(this.state.dataId);
  }

  addSubline(){
    this.props.addSubline(this.state.dataId);
  }

  render(){
    return(
      <div>
        <div className="inline line-content">
          <div contentEditable={this.props.editMode} onBlur={this.updateValue}>{this.state.value}</div>
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
