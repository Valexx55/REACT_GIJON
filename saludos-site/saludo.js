var Greeting = React.createClass({
  render: function() {
    return (
      <p>{this.props.message}</p>
    );
  }
});

setInterval(function() {
  var saludos = ['HOLA MUNDO', 'QUÉ PASA REY!!', 'HOLA CARACOLA'];
  var saludo_aleatorio = saludos[Math.floor((Math.random() * 3))];

  ReactDOM.render(
    <Greeting message={saludo_aleatorio}/>,
    document.getElementById('saludo-div')
  );
}, 2000);

