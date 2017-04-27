import React, {Component} from 'react';
import SlideList from './slideList';
import SlideDetail from '../container/slideDetail';

class App extends Component {
  render(){
    return(
      <div className="container-fluid">
        {/* <h1>Hello World!</h1> */}
        {/* <SlideList /> */}
        <div className="row">
          {/* <div className="col-xs-4">
            <SlideList />
          </div> */}
          <div className="col-xs-12">
            <SlideDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
