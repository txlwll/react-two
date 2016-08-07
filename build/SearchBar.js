var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function () {
        this.props.onUserInput(
            this.refs.filterTextIput.value,
            this.refs.inStockOnlyInput.checked
        )
    },
    render: function () {
        return (
            React.createElement("form", null, 
                React.createElement("input", {
                    type: "text", 
                    placeholder: "Seach……", 
                    value: this.props.filterText, 
                    ref: "filterTextIput", 
                    onChange: this.handleChange}
                ), 
                React.createElement("p", null, 
                    React.createElement("input", {
                        type: "checkbox", 
                        checked: this.props.inStockOnly, 
                        ref: "inStockOnlyInput", 
                        onChange: this.handleChange}
                    ), 
                    ' ', 
                    "Only show products in stock"
                )
            )
        )
    }
})