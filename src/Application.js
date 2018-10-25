import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

import ListBooks from './components/book/ListBooks';
import Edit from './components/book/EditBook';
import Create from './components/book/CreateBook';
import Show from './components/book/ShowBook';


class Application extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Route exact path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/error' component={Error} />

                        <Route path='/book/listBooks' component={ListBooks} />
                        <Route path='/book/edit/:id' component={Edit} />
                        <Route path='/book/create' component={Create} />
                        <Route path='/book/show/:id' component={Show} />

                    </main>
                    <Footer />
                </div>

            </Router>
        )
    }
    _

}


export default (Application);
