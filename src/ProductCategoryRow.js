export default class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <th className="text-left" colSpan="2">{this.props.category}</th>
            </tr>
        )
    }
}

module.exports = ProductCategoryRow
