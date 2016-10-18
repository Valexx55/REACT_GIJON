var myInput =  React.createElement(
      'input',
      {type:'text'},
      null
    );


var myP = React.createElement(
      'p',
      {id:3},
      myInput
    );

var myDiv = React.createClass({
  displayName: 'myDiv',

  render: function render() {
    return React.createElement(
      'div',
      null,
      myP
    );
  }
});


ReactDOM.render(
    React.createElement(myDiv),
    document.getElementById('init')
  );