import React, { Component } from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";
import Search from "./Search";

class MyAPIComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            isLoaded: false,
            error: null,
            movieSearch: null,
            search: 'title',
            offset: 0,
            limit: 0, 
            total: 0,
        };
    }
    componentDidMount() {
        this.pageUpdate();
    }
    componentDidUpdate(prevProps, prevState) {
        const { offset, search } = this.state;
        if (offset !== prevState.offset) {
            this.pageUpdate(offset, search);
        }
    }
    pageUpdate(offset, movieSearch) {
        fetch(`http://react-cdp-api.herokuapp.com/movies?searchBy=&search=${movieSearch || ''}&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                isLoaded: true,
                items: data.data,
                offset: data.offset,
                limit: data.limit,
                total: data.total,
            })
        })
        .catch(error => {
            this.setState({ 
                isLoaded: true,
                error,
            });
        });
        console.log(movieSearch);
    }

    render() {
        const { error, isLoaded, items, total, limit, offset } = this.state;
        const current = offset/limit + 1;
        const lastPage = Math.ceil(total/limit);
        const prevClick = () => {
            if (offset) {
                this.setState({
                    offset: offset-limit,
                })
            }
        }
        const nextClick = () => {
            if (current < lastPage) {
                this.setState({
                    offset: offset + limit,
                })
            }
        }
        const movieSearch = (e) => {
              console.log(e.target);
            if (e.target && e.target.matches('input#movie-search')) {
                 this.setState({
                    movieSearch: this.movieSearch,
                })
              }
              console.log(e.target.matches('input#movie-search'));

        }
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                <Pagination current={current} lastPage={lastPage} nextClick={nextClick} prevClick={prevClick}/>
                <Search movieSearch={movieSearch}/>
                <CardList items = {items}/>
                </React.Fragment>
                );
        }
    }
}
export default MyAPIComponent;