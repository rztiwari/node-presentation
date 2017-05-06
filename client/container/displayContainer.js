import React, {Component} from 'react';

import ModeController from '../component/modeController';
import SlideDetail  from './slideDetail';
import SlideList from './slideList';

export default class DisplayContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      editMode: false
    };

    this.updateEditMode = this.updateEditMode.bind(this);
  }

  updateEditMode(value){
    this.setState({editMode: value});
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <ModeController editMode={this.updateEditMode}/>
        </div>
        <div className="row">
          <SlideList />
          {/* <div className="col-xs-12">
            <SlideDetail editMode={this.state.editMode}/>
          </div> */}
        </div>
      </div>
    );
  }
}
