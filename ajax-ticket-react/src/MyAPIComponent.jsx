import React, { Component } from "react";

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
        const { offset, limit, total, search} = this.state;
        fetch(`http://react-cdp-api.herokuapp.com/movies?searchBy=${search}&offset=${offset}`)
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
    }

    onNextClick() {
        const { current, offset, total } = this.state;
        
        if(current + offset <= total)
            this.setState({ current: current + offset});
    }
    onPrevClick() {
        if(current + offset > total)
            this.setState({ current: current - offset});
    }

    onSearchInputChange(e) {
        const { target } = e;

        this.setState({search: target.value }) 
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                <SearchHeader onSearch={() => this.fetchData()}  onDropdownChange onInputChange={e => this.onSearchInputChange(e)}/>  
                {/* Option 2 <SearchHeader onSearch={() => this.fetchData()}  onDropdownChange onInputChange={onSearchInputChange}/>   */}
                <Pagination current={} total={} onNextClick={() => this.onNextClick()} onPrevClick={} />
                <CardListContainer results={this.state.results} />
            </React.Fragment>
                <ul>
                    {items.map(item => (
                <li key={item.title}>        
                    <div className="media">     
                        <img src={item.poster_path} alt={item.title}/>
                        <span className="vote"> {item.vote_average}</span> 
                    </div>
                    <div className="content">
                        <h1>{item.title}</h1>
                        <ul>
                        <li className="genres"><span>genres:</span>{item.genres}</li>
                        <li className="tagline"><span>tagline:</span>{item.tagline}</li>
                        <li className="release"><span>release date:</span>{item.release_date}</li>
                        <li className="runtime"><span>runtime:</span>{item.runtime}</li>
                        <li className="overview"><span>storyline:</span>{item.overview}</li>
                        <li className="budget"><span>budget:</span>$ {item.budget}</li>
                        </ul>
                    </div>      
                </li>
                    ))}
                </ul>
            );
        }
    }
}
export default MyAPIComponent;