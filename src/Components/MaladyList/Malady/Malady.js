import React from 'react'
import './Malady.css'
import Context from '../../../Context'
import Remedy from '../Remedy/Remedy'
import AddRemedy from '../../AddRemedy/AddRemedy'

export default class Malady extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            showSym: true,
            error: ""
        }

    }

    static contextType = Context


    updateForm = () => {
        this.context.isLoggedIn?
        this.setState({
            showForm: !this.state.showForm
        }):
        this.setState({
            error: "Must be logged in to add a remedy"
        })
    }

    showSym = () => {
        this.setState({
            showSym: !this.state.showSym
        })
    }

    handleLikeSort(likes, id){
        return likes.length
    }

    compare(a,b){
        return b.likes-a.likes
    }

    render() {
    
        const remedy = this
                        .context
                        .remedies
                        .filter(remedy => remedy.remedy_malady === parseInt(this.props.match.params.id))
                        
        const malady = this.context.maladies.filter(malady => malady.id === parseInt(this.props.match.params.id))
        const maladyPage = malady.map(malady => <div className="malady-section" key={malady.id}>

                                                    <header className="malady-page-head">
                                                        <div className="mal-head-box">
                                                            <h1>{malady.malady_name}</h1>
                                                            <p>{malady.malady_description}</p>
                                                        </div>
                                                    </header>

                                                    <section className="malady-subsection">
                                                        <h2 className="symptoms-label" onClick={this.showSym}>Symptoms</h2>
                                                        <p>{this.state.showSym && malady.malady_symptoms}</p>
                                                    </section>
                                                    
                                                </div>)
                                                
        const remedyWithLikes = remedy.map(remedy=> {
            let container = {}
            const remLikes = remedy.likes = this.context.likes.filter(likes => likes.remedyid === remedy.id && likes.liked === true).length
            container = {likes:remLikes,...remedy}
            return container;
        })

        const remedyPage = remedy.length !== 0 ? remedyWithLikes.sort(this.compare).map(remedy => <Remedy 
                                                                        rem={remedy} 
                                                                        key={remedy.id}
                                                                        handleLikeSort = {this.handleLikeSort}>
                                                                        </Remedy>)
                                                                        :
                                                                    <p className ="no-remedies">
                                                                        There are no remedies for this condition yet.
                                                                        </p>
        return (
            <div className='malady-page'>


                {maladyPage}

                <section className="remedies-header">
                    <h1>Remedies</h1>
                </section>

                <section className="remedy-page">
                    {this.state.showForm && <AddRemedy noHeader={true} autofillName = {malady[0].malady_name}></AddRemedy>}
                    <p className="click-to-add" onClick={this.updateForm}>Click to {this.state.showForm ? "collapse form" : "add remedy"}</p>
                    <p className="add-error">{this.state.error}</p>
                    {remedyPage}
                </section>
            </div>
        )
    }
}