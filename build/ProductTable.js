var ProductTable = React.createClass({displayName: "ProductTable",
    render: function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.name.indexOf(this.props.filterText) === -1 || (this.props.inStockOnly && !product.stocked )) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}))
            }
            rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
            lastCategory = product.category;
        }.bind(this));
        return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("th", null, "Name"), 
                        React.createElement("th", null, "Price")
                    )
                ), 
                React.createElement("tbody", null, rows)
            )
        )
    }
});