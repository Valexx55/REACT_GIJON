var BeerItem = React.createClass({

	incCount: function() {
		this.props.addOne(this.props.beer);
	},

	shouldComponentUpdate : function (nextProps, nextState) {
		console.log("BeerItem shouldComponentUpdate");
		return this.props.count != nextProps.count;
	} ,  

	componentWillUpdate : function (nextProps, nextState) {
		console.log("BeerItem componentWillUpdate");
	},

	render: function() {
		console.log("BeerItem render");
		return <li>[{this.props.count}] {this.props.beer} <button onClick={this.incCount}>Una más</button></li>;
	}
});

var BeerList = React.createClass({
	getInitialState : function() {
		console.log("getInitialState");
		return {
			beers: [
				{name: "Mahou 5 estrellas", count: 0},
				{name: "Cibeles Imperial IPA", count: 0},
				{name: "Chimay Triple", count: 0}
			]
		};
	},

	componentWillMount : function() {
		console.log("componentWillMount");
	} ,

	shouldComponentUpdate : function (nextProps, nextState) {
		console.log("shouldComponentUpdate");
		return true;
	} ,  

	componentWillUpdate : function (nextProps, nextState) {
		console.log("componentWillUpdate");
	},

	addOne : function(beerName) {
		var beers = this.state.beers,
			beer = beers.filter(function(x) { 
				return x.name === beerName;
			})[0];

		beer.count ++;

		this.setState({beers: beers});
	},

	render: function() {

		var total, beerItems;

		total = this.state.beers.reduce(function(acc, x) {
			return acc + x.count;
		}, 0);

		beerItems = this.state.beers.map(function(x) {
			return <BeerItem beer={x.name} count={x.count} addOne={this.addOne} />;
		}, this);

		console.log("render");
		return <div><p>Llevas {total} cervezas</p><ul>{beerItems}</ul></div>;
	}
});

ReactDOM.render(<BeerList/>, document.getElementById('example'));
