import {Router, Route, IndexRoute, Link, IndexLink, browserHistory} from 'react-router'
import FilterableProductTable from './FilterableProductTable'
import IndexPage from './IndexPage'

ReactDOM.render(
    <Router history={ browserHistory }>
        <Route path="/" component={IndexPage}></Route>
        <Route path="/product" component={FilterableProductTable}></Route>
    </Router>,
    document.getElementById('example')
)