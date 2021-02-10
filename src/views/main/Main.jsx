import React, { Component } from 'react'
import { getSentence } from '../../api/getSentence'

import './main.css'

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
        
         //Sonido de disparo al seleccionar categoria.
        let audio = new Audio('https://christianrenovell.com/assets/disparo.mp3')
        audio.play()
        /*
        *description: Realiza la llamada a la api y devuelve un objeto.
        *param: {API} Url de la Api.
        *param: {categorie} CategorÍa de la que se solicita una frase.
        *var: {sentencesArray} Almacenamos las posibles frases ya almacenadas en el estado.
        *var: {result} Parseamos el resultado de la llamada a Json.
        */
        getSentence(API, categorie).then((res) => {

            let sentencesArray = this.state.sentences
            let result = JSON.parse(res)
            sentencesArray.push(result.value)

            //Almacenamos la lista de frases en localStorage
            localStorage.setItem('sentencesArray', JSON.stringify(sentencesArray))

            //Actualizamos el estado
            this.setState({ sentences: sentencesArray })
            
            //Muestra el sello de aprobado.
            this.showAprobateIcon()
        })
    }

    /*
    *description: Elimina una frase de la lista.
    *params {index} Índice de la frase a eliminar de la lista.
    *var: {sentencesArray} Almacenamos las posibles frases ya almacenadas en el estado.
    */
    deleteSentence(index) {
       
        //Sonido de recarga al eliminar frase.
        let audio2 = new Audio('https://christianrenovell.com/assets/recarga.mp3')
        audio2.play()
        //Limpiamos el localStorage
        localStorage.removeItem('sentencesArray')
        let sentencesArray = this.state.sentences
        sentencesArray.splice(index, 1)
        //Almacenamos la lista de frases en localStorage
        localStorage.setItem('sentencesArray', JSON.stringify(sentencesArray))
        //Actualizamos el estado
        this.setState({ sentences: sentencesArray })
    }

    /*
    *description: Carga las posibles frases almacenadas en local.
    *var: {localSentences} Frases alacenadas en local.
    */
    componentDidMount() {
        let localSentences = localStorage.getItem('sentencesArray')
        if (localSentences) {
            localSentences = JSON.parse(localSentences);
            this.setState({ sentences: localSentences })
        }
    }

    /*
     *description: Muestra el sello de aprobado y reproduce el sonido.
     *var: audio3: Sonido del sello
     */
    showAprobateIcon() {    
         document.getElementById("aprobadIcon").style.display= "block"
         setTimeout(function() { 
             document.getElementById("aprobadIcon").style.display= "none" 
            }, 2000);
            setTimeout(function() { 
            let audio3 = new Audio('https://christianrenovell.com/assets/sello.mp3')
            audio3.play()
        }, 700);
    }

    render() {
        return (
            <div>
                <div id="aprobadIcon" className="aprobed">
                    <img src="https://christianrenovell.com/assets/aprobed.png"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 mt-5">
                            <h3>Categories</h3>
                            <ul className="list-group categories">
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
                        <div className="col-9 mt-5">
                        <h3>Amazing Sentences</h3>
                            <ul className="list-group">
                                {
                                    this.state.sentences.map((sentence, index) => {
                                        return (                                          
                                            <li className="list-group-item">
                                                {sentence}
                                                <span className="d-inline mr-5"></span><img onClick={this.deleteSentence.bind(this, index)} className="d-inline btn-delete" width="25px" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iI2Y0NDMzNiIvPjxwYXRoIGQ9Im0zNTAuMjczNDM4IDMyMC4xMDU0NjljOC4zMzk4NDMgOC4zNDM3NSA4LjMzOTg0MyAyMS44MjQyMTkgMCAzMC4xNjc5NjktNC4xNjAxNTcgNC4xNjAxNTYtOS42MjEwOTQgNi4yNS0xNS4wODU5MzggNi4yNS01LjQ2MDkzOCAwLTEwLjkyMTg3NS0yLjA4OTg0NC0xNS4wODIwMzEtNi4yNWwtNjQuMTA1NDY5LTY0LjEwOTM3Ni02NC4xMDU0NjkgNjQuMTA5Mzc2Yy00LjE2MDE1NiA0LjE2MDE1Ni05LjYyMTA5MyA2LjI1LTE1LjA4MjAzMSA2LjI1LTUuNDY0ODQ0IDAtMTAuOTI1NzgxLTIuMDg5ODQ0LTE1LjA4NTkzOC02LjI1LTguMzM5ODQzLTguMzQzNzUtOC4zMzk4NDMtMjEuODI0MjE5IDAtMzAuMTY3OTY5bDY0LjEwOTM3Ni02NC4xMDU0NjktNjQuMTA5Mzc2LTY0LjEwNTQ2OWMtOC4zMzk4NDMtOC4zNDM3NS04LjMzOTg0My0yMS44MjQyMTkgMC0zMC4xNjc5NjkgOC4zNDM3NS04LjMzOTg0MyAyMS44MjQyMTktOC4zMzk4NDMgMzAuMTY3OTY5IDBsNjQuMTA1NDY5IDY0LjEwOTM3NiA2NC4xMDU0NjktNjQuMTA5Mzc2YzguMzQzNzUtOC4zMzk4NDMgMjEuODI0MjE5LTguMzM5ODQzIDMwLjE2Nzk2OSAwIDguMzM5ODQzIDguMzQzNzUgOC4zMzk4NDMgMjEuODI0MjE5IDAgMzAuMTY3OTY5bC02NC4xMDkzNzYgNjQuMTA1NDY5em0wIDAiIGZpbGw9IiNmYWZhZmEiLz48L3N2Zz4=" />
                                            </li>                                          
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