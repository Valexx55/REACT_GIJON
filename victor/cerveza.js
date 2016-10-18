var BeerItem = React.createClass({


	componentWillUpdate : function() {
		console.log("BeerItem: Entra en will update");
	},

	componentDidUpdate : function() {
		console.log("BeerItem: Entra en did update");
	},

	componentWillUnmount : function() {
		console.log("BeerItem: Entra en will unmount");
	},

	shouldComponentUpdate : function() {
		console.log("BeerItem: Entra en should component");
		return true;
	},

	incCount: function() {
		this.props.addOne(this.props.beer);
	},

	render: function() {
		return <li>[{this.props.count}] {this.props.beer} <button onClick={this.incCount}>Una más</button></li>;
	}
});

var BeerList = React.createClass({

	/*getDefaultProps : function() {
		document.write("BeerList: Entra en get default props");
		return {
			beers: [
				{name: "Mahou 5 estrellas", count: -1},
				{name: "Cibeles Imperial IPA", count: -1},
				{name: "Chimay Triple", count: -1}
			]
		};
	},*/

	componentWillUpdate : function() {
		console.log("BeerList: Entra en will update");
	},

	componentDidUpdate : function() {
		console.log("BeerList: Entra en did update");
	},

	componentWillUnmount : function() {
		console.log("BeerList: Entra en will unmount");
	},

	shouldComponentUpdate : function() {
		console.log("BeerList: Entra en should component");
		return true;
	},

	getInitialState : function() {
		return {
			beers: [
				{name: "Mahou 5 estrellas", count: 0},
				{name: "Cibeles Imperial IPA", count: 0},
				{name: "Chimay Triple", count: 0}
			]
		};
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

		return <div><p>Llevas {total} cervezas</p><ul>{beerItems}</ul></div>;
	}
});

ReactDOM.render(<BeerList/>, document.getElementById('example'));
