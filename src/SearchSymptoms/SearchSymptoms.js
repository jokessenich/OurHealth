import React from 'react'
import { Link } from 'react-router-dom'
import Context from '../Context'
import { getNumOfRemedies } from '../helperFunctions'
import './SearchSymptoms.css'

export default class SearchSymptoms extends React.Component {

    constructor(props) {
        super(props)
    }

    static contextType = Context


    render() {
        debugger;
        const term = this.props.match.params.searchterm

        const maladyArray = this.context.maladies.filter(mal =>
            mal.malady_symptoms.toLowerCase().includes(term))

        const maladyResults = maladyArray.map(malady => <Link to={`/malady/${malady.id}`} key={malady.id} className="browse-maladies-link">
                                                            {malady.malady_name}
                                                            <span className="remedies-counter">{getNumOfRemedies(this.context.remedies, malady.id).length + " Remedies"}</span>
                                                            </Link>)

        return (

            <div className='malady-page'>

                <header className="malady-head">
                    <section className="border-box">
                    <h1>Maladies with symptoms matching: "{term}"</h1>
                    </section>
                </header>

                <section className="browse-maladies-section">

                    {maladyResults}

                </section>
                
            </div>
        )
    }
}