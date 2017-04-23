import React, {Component} from 'react';
import EditableText from './EditableText';

const slideContent = {
  'heading': 'Sample slide for designing',
  'content': {
    'data': [
      'This is the 1st text',
      'This looks awesome',
      {
        'type': 'subList',
        'content': {
          'text': 'This is SubContent- beware',
          'data': [
            'SubContent 2',
            'SubContent is also awesome'
          ]
        }
      },
      'More Content',
      {
        'type': 'subList',
        'content': {
          'text': 'Another SubContent',
          'data': [
            'More subcontent',
            'Really liking it now!',
            'More surprises to come',
            'SubContent is also awesome'
          ]
        }
      },
      'This is sample last content'
    ]
  }
}

class SlideDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      editSlide: false,
      deleteSlide: false
    }

    this.editSlide = this.editSlide.bind(this);
    this.saveSlide = this.saveSlide.bind(this);
    this.deleteSlide = this.deleteSlide.bind(this);
    this.removeLine = this.removeLine.bind(this);
  }

  removeLine(index){
    console.log(index);
  }

  getLineText(content, index){
    return (
      <div>
        <EditableText value={content} editable={this.state.editSlide} />
        <button type="button" className="btn btn-danger" aria-label="Remove" onClick={this.removeLine(index)}>
          <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
        </button>
      </div>
    );
  }

  getLineContent(content, index){
    if(typeof content === 'string'){
      return (
        <div>
          {this.getLineText(content, index)}
        </div>
      );
    }else if(typeof content === 'object' && content.content && content.content.data && content.content.data.length){
      return (
        <div>
          {this.getLineText(content.content.text, index)}
          <ul>
            {this.renderSlide(content.content.data)}
          </ul>
        </div>
      );
    }
  }

  renderSlide(data){
    return data.map((line, index) => {
       return (
            <li
              key={index}>
                  {this.getLineContent(line)}
            </li>
       ) ;
    });
  }

  editSlide(){
    this.setState({editSlide: true});
  }

  saveSlide(){
    this.setState({editSlide: false});
  }

  deleteSlide(){
    this.setState({deleteSlide: false});
  }

  render(){
    return(
      <div className="container">
        <h2 className="text-center">{slideContent.heading}</h2>
        <ul>
          {this.renderSlide(slideContent.content.data)}
        </ul>
        <div className="slide-footer">
          <button type="button" className="btn btn-primary" onClick={this.editSlide}>Edit Side</button>
          <button type="button" className="btn btn-success" onClick={this.saveSlide}>Save Slide</button>
          <button type="button" className="btn btn-danger" onClick={this.deleteSlide}>Delete Slide</button>
        </div>
      </div>
    );
  }
}

export default SlideDetail;
