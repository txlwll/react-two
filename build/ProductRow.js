var ProductRow = React.createClass({displayName: "ProductRow",
    render: function () {
        var name = this.props.product.stocked ? this.props.product.name :
            React.createElement("span", {style: {color: 'red'}}, this.props.product.name);
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, name), 
               React.createElement("td", null, this.props.product.price)
            )
        )
    }
});