var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
    render: function () {
        return (
            React.createElement("tr", null, React.createElement("th", {colSpan: "2"}, this.props.category))
        )
    }
})
