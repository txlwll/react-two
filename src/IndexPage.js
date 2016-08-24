import { Link } from 'react-router'


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <h1>This is index page</h1>
                <Link to="/product">go to my home 333 </Link>
            </div>
        )
    }
}

export default IndexPage