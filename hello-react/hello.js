function avisaCambioName ()
{
  alert ('Nombre cambiado');
}

function avisaCambioP ()
{
  alert ('P cambiado');
}

//USANDO JSX
var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here"/>!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);
/*
var Componente = React.createClass({
  		render: function() //MÉTODO OBLIGATORIO
		{

		console.log (this.isMounted() + this.displayName);
    		return ( 
			React.createElement('p', {className: "commentBox"}, this.props.saludo.toTimeString())
			);
	  	}
		
	});
*/

var Component = React.createClass({
  		render: function() //MÉTODO OBLIGATORIO
		{

		console.log (this.isMounted() + this.displayName);
    		return ( 
			React.createElement('p', {className: "commentBox"},  this.props.foo)
			);
	  	}
		
	});

var props = {};
props.foo = 35;
props.bar = 20;
var component = <Component {...props} />;
ReactDOM.render(
	    component,
	    document.getElementById('example2')
	  );

/**
//USANDO EMAC2015 ES6 JS6 --pasando por el compilador --https://babeljs.io/repl

var HelloWorld = React.createClass({
  displayName: "HelloWorld",

  render: function render() {
    return React.createElement(
      "p",
      null,
      "Hello, ",
      React.createElement("input", { type: "text", placeholder: "Your name here" }),
      "! It is ",
      this.props.date.toTimeString()
    );
  }
});

setInterval(function () {
  ReactDOM.render(React.createElement(HelloWorld, { date: new Date() }), document.getElementById('example'));
}, 500);

*/
