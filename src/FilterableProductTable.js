import SearchBar from './SearchBar'
import ProductTable from './ProductTable';
// var ProductTable = require('./ProductTable')
let imgContent = require('./image/ruzhu1-samll.png');

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        }

        // this.handleUserInput = this.handleUserInput.bind(this)
    }

    // handleUserInput(filterText, inStockOnly) {
    //     this.setState({
    //         filterText: filterText,
    //         inStockOnly: inStockOnly
    //     });
    // }

    handleUserInput = (filterText, inStockOnly) => {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    products={PRODUCT}/>
                <img src={imgContent} />
            </div>
        )
    }
};

let PRODUCT = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
    {category: "Electronics", price: "$994.99", stocked: true, name: "Nexus 8"}
];

export default FilterableProductTable