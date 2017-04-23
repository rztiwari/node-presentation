import React, {Component} from 'react';

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

  getLineContent(content, index){
    if(typeof content === 'string'){
      return content;
    }else if(typeof content === 'object' && content.content && content.content.data && content.content.data.length){
      return (
        <div>
          {content.content.text}
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
              key={index}
              className="list-group-item">
                  {this.getLineContent(line)}
            </li>
       ) ;
    });
  }

  render(){
    return(
      <div>
        <h2>slideContent.heading</h2>
        <ul>
          {this.renderSlide(slideContent.content.data)}
        </ul>
      </div>
    );
  }
}

export default SlideDetail;
