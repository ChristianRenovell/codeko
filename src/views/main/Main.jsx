import React, { Component } from 'react'
import { getSentence } from '../../api/getSentence'

const API = process.env.REACT_APP_API_URL;

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sentences: []
        };
    }

    /*
    * description: Realiza la llamada a la Api y se almacena en el estado del componente.
    * param: {categorie} Categoría de la que se solicita una frase.
    */
    callSentence(categorie) {
        /*
        *description: Realiza la llamada a la api y devuelve un objeto.
        *param: {API} Url de la Api.
        *param: {categorie} CategorÍa de la que se solicita una frase.
        *var: {sentencesArry} Almacenamos las posibles frases ya almacenadas en el estado.
        *var: {result} Parseamos el resultado de la llamada a Json.
        */
        getSentence(API, categorie).then((res) => {
            let sentencesArry = this.state.sentences
            let result = JSON.parse(res)
            sentencesArry.push(result.value)

            this.setState({ sentences: sentencesArry })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-5 mb-5">
                            <h3>Categories</h3>
                            <ul className="list-group">
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "animal")}>Animal</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "career")}>Career</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "celebrity")}>Celebrity</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "dev")}>Dev</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "explicit")}>Explicit</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "fashion")}>Fashion</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "food")}>Food</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "history")}>History</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "money")}>Money</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "movie")}>Movie</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "music")}>Music</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "political")}>Political</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "religion")}>Religion</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "science")}>Science</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "sport")}>Sport</li>
                                <li className="list-group-item" onClick={this.callSentence.bind(this, "travel")}>Travel</li>
                            </ul>
                        </div>
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <ul className="list-group">
                                {
                                    this.state.sentences.map(sentence => {
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