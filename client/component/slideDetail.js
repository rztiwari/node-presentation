import React, {Component} from 'react';
import EditableText from './EditableText';

const slideContent = {
  'heading': 'Sample slide for designing',
  'body': {
    'data': [
      {
        'id': '1',
        'value': {
          'type': 'text',
          content: 'This is the 1st text'
        }
      }, {
        'id': '2',
        'value': {
          'type': 'text',
          content: 'This looks awesome'
        }
      }, {
        'id': '3',
        'value': {
          'type': 'text',
          content: 'This has SubContent- beware'
        },
        'children': [
          {
            'id': '3.1',
            'value': {
              'type': 'text',
              content: 'SubContent Text'
            }
          }, {
            'id': '3.2',
            'value': {
              'type': 'text',
              content: 'SubContent Text2'
            }
          }
        ]
      }, {
        'id': '4',
        'value': {
          'type': 'text',
          content: 'This looks awesome'
        }
      }, {
        'id': '5',
        'value': {
          'type': 'text',
          content: 'Another subcontent'
        },
        'children': [
          {
            'id': '5.1',
            'value': {
              'type': 'text',
              content: 'SubContent Text 1'
            }
          }, {
            'id': '5.2',
            'value': {
              'type': 'text',
              content: 'SubContent Text 2'
            }
          },
          {
            'id': '5.3',
            'value': {
              'type': 'text',
              content: 'SubContent Text 3'
            }
          }, {
            'id': '5.4',
            'value': {
              'type': 'text',
              content: 'SubContent Text 4'
            }
          }
        ]
      }, {
        'id': '6x',
        'value': {
          'type': 'text',
          content: 'This is sample last content'
        }
      }
    ]
  }
}

class SlideDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editSlide: false,
      deleteSlide: false,
      slideContent: slideContent
    }

    this.editSlide = this.editSlide.bind(this);
    this.saveSlide = this.saveSlide.bind(this);
    this.deleteSlide = this.deleteSlide.bind(this);
    this.deleteLine = this.deleteLine.bind(this);
  }

  getLineText(content, id) {
    return (
      <div>
        <EditableText value={content}
          remove={this.deleteLine}
          dataId={id}
          editable={this.state.editSlide}/>
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

  deleteLine(delId){
debugger;
    function filterItems(items){
      const returnItems = [];
        let children;
      items.forEach(function(item){
        if(item.id !== delId){
          returnItems.push(item);
        }

        if(item.children && item.children.length){
          children = filterItems(item.children);
          item.children = children;
        }
      });
      return returnItems;
    }

    var slideContent = this.state.slideContent, data;
    if(slideContent && slideContent.body && slideContent.body.data){
      data = slideContent.body.data;
      slideContent.body.data = filterItems(data);
      this.setState({slideContent: slideContent});
    }
  }

  editSlide() {
    this.setState({editSlide: true});
  }

  saveSlide() {
    this.setState({editSlide: false});
  }

  deleteSlide() {
    this.setState({deleteSlide: false});
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">{this.state.slideContent.heading}</h2>
        <ul>
          {this.renderLines(this.state.slideContent.body.data)}
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
