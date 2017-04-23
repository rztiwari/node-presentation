import React, {Component} from 'react';
import SlideList from './slideList';
import SlideDetail from './slideDetail';


class App extends Component {
  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <SlideList />
        <SlideDetail />
      </div>
    );
  }
}

export default App;
