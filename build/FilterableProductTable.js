var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",
    getInitialState: function () {
      return {
          filterText: '',
          inStockOnly:false,
      };
    },
    handleUserInput: function (filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement(SearchBar, {
                    filterText: this.state.filterText, 
                    inStockOnly: this.state.inStockOnly, 
                    onUserInput: this.handleUserInput}
                ), 
                React.createElement(ProductTable, {
                    filterText: this.state.filterText, 
                    inStockOnly: this.state.inStockOnly, 
                    products: this.props.products})
            )
        )
    }
});
var PRODUCT = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
ReactDOM.render(
    React.createElement(FilterableProductTable, {products: PRODUCT}),
    document.getElementById('example')
)