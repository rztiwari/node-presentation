import React, {Component} from 'react';
import {connect} from 'react-redux';

import EditableText from '../component/EditableText';
import ButtonContainer from './buttonContainer';

class SlideDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editSlide: false,
      deleteSlide: false,
      editMode: this.props.editMode
    }

    this.deleteLine = this.deleteLine.bind(this);
    this.addSubline = this.addSubline.bind(this);
    this.updateButtonStates = this.updateButtonStates.bind(this);
  }

  deleteLine(delId) {
    function filterItems(items) {
      const returnItems = [];
      let children;
      items.forEach(function(item) {
        if (item.id !== delId) {
          returnItems.push(item);
        }

        if (item.children && item.children.length) {
          children = filterItems(item.children);
          item.children = children;
        }
      });
      return returnItems;
    }

    var slideContent = this.props.slideContent,
      data;
    if (slideContent && slideContent.body && slideContent.body.data) {
      data = slideContent.body.data;
      slideContent.body.data = filterItems(data);
      this.setState({slideContent: slideContent});
    }
  }

  addSubline(parentId) {
    function addToParentItems(items) {
      const returnItems = [];
      let children,
        count,
        newItemId;
      items.forEach(function(item) {

        returnItems.push(item);
        if (item.id === parentId) {
          if (!item.children) {
            item.children = [];
          }
          count = item.children.length + 1;
          newItemId = parentId + '.' + count;
          item.children.push({
            'id': newItemId,
            'value': {
              'type': 'text',
              content: ''
            }
          });
        }

        if (item.children && item.children.length) {
          children = addToParentItems(item.children);
          item.children = children;
        }
      });
      return returnItems;
    }

    var slideContent = this.props.slideContent,
      data;
    if (slideContent && slideContent.body && slideContent.body.data) {
      data = slideContent.body.data;
      slideContent.body.data = addToParentItems(data);
      this.setState({slideContent: slideContent});
    }
  }
  updateButtonStates(states){
    debugger;
    if(states.editSlide === true){
      this.setState({
        editSlide: true
      });
    }else{
      this.setState({
        editSlide: false
      })
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">{this.props.slideContent.heading}</h2>
        <ul>
          {this.renderLines(this.props.slideContent.body.data)}
        </ul>
        <div className="slide-footer container">
          <div className="col-xs-2 previous-slide">
            <a href="javascript:void(0);" onClick={this.editSlide}><span className="glyphicon glyphicon-arrow-left"></span></a>
          </div>
          <ButtonContainer updateButtonContainerState={this.updateButtonStates}/>
          <div className="col-xs-2 next-slide">
            <a href="javascript:void(0);" onClick={this.editSlide}><span className="glyphicon glyphicon-arrow-right"></span></a>
          </div>
        </div>
      </div>
    );
  }

  getLineText(content, id) {
    return (
      <div>
        <EditableText value={content} editMode={this.state.editMode} remove={this.deleteLine} addSubline={this.addSubline} dataId={id} editable={this.state.editSlide}/>
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
}

function mapStateToProps(state){
  //Whatever is returned will be shown as props for the component
  return {
    slideContent : state.slideContent //This will be available as this.props.slideDetail
  };
}

export default connect(mapStateToProps)(SlideDetail);
