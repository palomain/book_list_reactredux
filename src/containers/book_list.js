//In order to use Redux we upgrade a Component to a container using redux
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book=> {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }

    render(){

        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );

    }
}

//Tjis function maps whatever is contained state to component props
function mapStateToProps(state) {
    return {
        books: state.books
    };
}


function mapDispatchToProps(dispatch) {
    //whenever selectBook is called result should be passed to all reducers
    //dispatch collects the result from selectBook and passes it to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//connects the redux state with BookList component props
export default  connect(mapStateToProps, mapDispatchToProps)(BookList);