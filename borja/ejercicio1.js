/*var EJ1 = React.createClass({
  displayName: 'EJ1',
  render: function render() {
    return React.createElement(
      'p',
      {id:'3'},
      React.createElement(
        'input',
        {type:'text'},
        null
      )
    );
  }
});*/

var Input = React.createClass({
  displayName: 'Input',
  render: function render(){
    return React.createElement (
      'input',
       {type: this.props.inputType},
       null
    );
  }
});

var EJ1 = React.createClass({
  displayName: 'EJ1',
  render: function render() {
    return React.createElement(
      'p',
      {id: this.props.id},
      React.createElement(
        Input,
        {inputType: 'text'}
      )
    );
  }
});


ReactDOM.render(React.createElement(EJ1,{id:'3'}), document.getElementById('principal-div'));
 
