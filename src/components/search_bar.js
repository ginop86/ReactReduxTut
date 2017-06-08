import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        // all html input elements emit a change event. This is a normal browser event.
        // you can just type "on..." and then the name of the event "change" onChange is
        // a special property in react you could also put the function inline <input
        // onChange={event => console.log(event.target.value)} />;
        return (
            <div>
                {/*you need bind the onInputChange function */}
                <input
                    value={this.state.term}
                    onChange={this
                    .onInputChange
                    .bind(this)}/>
            </div>
        );

    }

    // typically you would name this method whatever the action it is doing all
    // browser events that get triggered by native inputs, whenever we add an event
    // handler they are always called with an even OBJECT the event objects
    // describes the context/ info of the event that occured
    onInputChange(event) {
        //update the state by calling setState
        this.setState({term: event.target.value});
    }
}

export default SearchBar;