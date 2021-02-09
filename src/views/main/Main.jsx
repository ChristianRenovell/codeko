import React, { Component } from 'react'

const API = process.env.REACT_APP_API;

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sentence: []
        };
    }

    getSentence(categorie) {
        
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-5 mb-5">
                            <h3>Categories</h3>
                            <ul className="list-group">
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"animal")}>Animal</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"career")}>Career</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"celebrity")}>Celebrity</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"dev")}>Dev</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"explicit")}>Explicit</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"fashion")}>Fashion</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"food")}>Food</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"history")}>History</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"money")}>Money</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"movie")}>Movie</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"music")}>Music</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"political")}>Political</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"religion")}>Religion</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"science")}>Science</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"sport")}>Sport</li>
                                <li className="list-group-item" onClick={this.getSentence.bind(this,"travel")}>Travel</li>
                            </ul>
                        </div>
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <ul className="list-group">
                                {
                                    this.state.sentence.map(sentence => {
                                        return (
                                            <li className="list-group-item">{sentence}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Main;