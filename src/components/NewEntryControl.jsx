import React from 'react';

class NewEntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      journalFormVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({journalFormVisibleOnPage: true});
    console.log('journalFormVisibleOnPage is currently set to:' + this.state.journalFormVisibleOnPage);
  }

  render(){
    return (
        <div>
        <p>This is the new classy stateful component</p>
         <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewEntryControl;
