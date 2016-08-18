import ProductCategoryRow from './ProductCategoryRow.js'
import ProductRow from './ProductRow.js'

export default class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 || (this.props.inStockOnly && !product.stocked )) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
};
