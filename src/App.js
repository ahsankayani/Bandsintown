import React from 'react';
import Search from './Search';
import axios from 'axios';

class App extends React.Component{
    onSearchSubmit(term){
        axios.get('https://rest.bandsintown.com/artists/{artistname}/events',{
            params:{
                artistname: term
            },
            header:{
                app_id: '7f191863-21f7-411f-a655-9f5a757d53e4'
            }
        })
        .then(response => {
            console.log(response);
        });
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '50px'}}>
                <Search onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;