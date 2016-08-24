class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }
    //
    // handleChange() {
    //     this.props.onUserInput(
    //         this.refs.filterTextIput.value,
    //         this.refs.inStockOnlyInput.checked
    //     )
    // }

    handleChange = () => {
        this.props.onUserInput(
            this.refs.filterTextIput.value,
            this.refs.inStockOnlyInput.checked
        )
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Seach……"
                    value={this.props.filterText}
                    ref="filterTextIput"
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar
