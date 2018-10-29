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
    //console.log('componentDidMount ' + this.props.params.bookid);
    console.log('txt ' + this.props.txt);
    console.log('txt ' + this.props.bookid);


    axios.get('/api/bookReview/' + this.props.bookid)
      .then(res => {
        this.setState({ bookReviews: res.data });
        console.log(this.state.bookReviews);

        //console.log('data ' + this.state.bookReviews[0].reviews);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push("/login");
        }
        else {
          console.log(JSON.stringify(error.response));
        }
      });
  };


  render() {
    return (

      <div class="container">

        {
          this.state && this.state.bookReviews && this.state.bookReviews.length > 0
          &&

          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                Review Summary&nbsp;
              </h3>
            </div>
            <div class="panel-body">
              <table class="table table-stripe">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>reviewCount</th>
                    <th>avarageRating</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.bookReviews.map(book =>
                    <tr>
                      <td>{book.id}</td>
                      <td>{book.reviewCount}</td>
                      <td>{book.avarageRating}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {this.state.bookReviews && this.state.bookReviews.length > 0 &&
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    Reviews&nbsp;
              </h3>
                </div>
                <div class="panel-body">
                  <table class="table table-stripe">
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>reviewBy</th>
                        <th>rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.bookReviews.map(bookReview =>
                        bookReview.reviews.map(review =>
                          <tr>
                            <td>{review.id}</td>
                            <td>{review.title}</td>
                            <td>{review.description}</td>
                            <td>{review.reviewBy}</td>
                            <td>{review.rating}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          </div>
        }

      </div>


    );
  }
}

export default ListReviews;
