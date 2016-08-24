require ('./ProductCategory.css');

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th className="text-left" colSpan="2">{this.props.category}</th>
                <img src={require('./image/ruzhu1-samll.png')} alt=""/>
            </tr>
        )
    }
}

export default  ProductCategoryRow
