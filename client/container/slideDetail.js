import React, {Component} from 'react';
import {connect} from 'react-redux';

import TextContainer from '../component/textContainer';

import {deleteLine, addSubLine, editLine} from '../action/index'

class SlideDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editSlide: false,
      deleteSlide: false
    }
  }

  render() {
    if (this.props.slideContent && this.props.slideContent.slide && this.props.slideContent.slide.body) {
      return (
        <div className="container-fluid">
          <h2 className="text-center">{this.props.slideContent.slide.heading}</h2>
          <ul>
            {this.renderLines(this.props.slideContent.slide.body.data)}
          </ul>
        </div>
      );
    }
    return <div></div>;
  }

  getLineText(content, id) {
    return (
      <div>
        <TextContainer value={content}
          editMode={this.props.editMode} remove={this.props.deleteLine}
          addSubline={this.props.addSubLine} dataId={id}
          updateLine={this.props.editLine}/>
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

function mapStateToProps(state) {
  //Whatever is returned will be shown as props for the component
  return {
    slideContent: state.slideContent //This will be available as this.props.slideDetail
  };
}

export default connect(mapStateToProps, {
  // fetchSlideDetails: fetchSlideDetails,
  addSubLine: addSubLine,
  deleteLine: deleteLine,
  editLine: editLine
})(SlideDetail);
