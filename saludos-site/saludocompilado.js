var Greeting = React.createClass({
  displayName: 'Greeting',

  render: function render() {
    return React.createElement(
      'p',
      null,
      this.props.message
    );
  }
});

setInterval(function () {
  var saludos = ['HOLA MUNDO', 'QUÉ PASA REY!!', 'HOLA CARACOLA'];
  var saludo_aleatorio = saludos[Math.floor(Math.random() * 3)];

  ReactDOM.render(React.createElement(Greeting, { message: saludo_aleatorio }), document.getElementById('saludo-div'));
}, 2000);
