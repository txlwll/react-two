export default class SearchBar extends React.Component {
    handleChange() {
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
