import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ListReviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookReviews: []
    };
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/bookReview/')
      .then(res => {
        this.setState({ bookReviews: res.data });
        console.log(this.state.bookReviews);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
        else{
          console.log(JSON.stringify(error.response));
        }
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Reviews &nbsp;
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bookReviews.map(book =>
                  <tr>
                    <td><Link to={`/book/show/${book._id}`}>{book.id}</Link></td>
                    <td>{book.reviewCount}</td>
                    <td>{book.avarageRating}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListReviews;
