import React from 'react'
import './MaladyList.css'
import { Link } from 'react-router-dom'
import Context from '../../Context'
import { getNumOfRemedies } from '../../helperFunctions'

export default class MaladyList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maladies: []
        }
    }
    static contextType = Context;


    componentDidMount() {
        fetch('http://localhost:8001/maladies')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    maladies: data
                })
            })
    }
    render() {
        const alphMal = this.context.maladies.sort((a, b) => (a.malady_name > b.malady_name) ? 1 : -1)
        const allMaladies = alphMal
            .map(malady => <Link to={`/malady/${malady.id}`}
                key={malady.id}
                prop={malady}
                className="browse-maladies-link">
                {malady.malady_name}
                <span className="remedies-counter">{getNumOfRemedies(this.context.remedies, malady.id).length + " Remedies"}</span>
            </Link>)
        return (
            <div className='malady-page'>
                <header className="malady-head">
                    <h1>Maladies</h1>
                </header>
                <section className="browse-maladies-section">
                    {allMaladies}

                </section>
            </div>
        )
    }
}