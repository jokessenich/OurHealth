import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Context from '../../Context'

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: "",
            options: [],
            optionIds:[],
            searchByName: true
        }
        this.searchButton= React.createRef();
        this.clickSearch = this.clickSearch.bind(this);

    }

    static contextType = Context
    clickSearch(){
        this.searchButton.current.click();
    }

    handleSearch=(e)=> {

        e.preventDefault()

        const searchTerm = e.currentTarget['home-search-term'].value.toLowerCase()
        const maladyArr = this.state.searchByName? this.context.maladies.filter(mal=> mal.malady_name.toLowerCase().includes(searchTerm)) 
            :
            this.context.maladies.filter(mal=> mal.malady_symptoms.toLowerCase().includes(searchTerm))
        
            debugger;
        
        if(searchTerm === ""){
            this.props.history.push(`maladylist`)
            return
        }
 
        if(maladyArr.length === 0){
            this.props.history.push(`maladynotfound/${searchTerm}`)
            return
        }


        if(this.state.searchByName===false){
            this.props.history.push(`searchsymptoms/${searchTerm}`)
            return
        }

        
        this.props.history.push(`searchresults/${searchTerm}`)
    }

    handleChange=(e)=>{

        e.preventDefault()

        this.setState({
            searchTerm: e.currentTarget.value
        })

        if(e.currentTarget.value.length>1){
            this.suggestMalady(e.currentTarget.value, this.state.searchByName)
            }

        if(e.currentTarget.value.length<2){
            this.setState({ 
                options: []
            })        
        }
    }

    suggestMalady=(frag, searchByName)=>{
        const options= searchByName?this.context.maladies.filter(mal=> mal.malady_name
                                                            .toLowerCase().includes(frag.toLowerCase())
                                                            && mal.malady_name
                                                            .toLowerCase().charAt(0)===frag.toLowerCase().charAt(0)):this.context.maladies.filter(mal=> mal.malady_symptoms
                                                                .toLowerCase().includes(frag.toLowerCase()));
        this.setState({ 
            options: options,
        })
    }

    
    toggleButton=(e)=>{

        e.preventDefault()
        let searchByName = e.currentTarget.id === "toggle-search-name"? true: false
        
        this.setState({
            searchByName: searchByName
        })
    }

    render() {

        const autofillName = this.state.options.map(mal=><Link className = "autofill" key = {mal.id} to = {`/malady/${mal.id}`}>{mal.malady_name}</Link>)

        let placeholder = this.state.searchByName? "Find a condition. e.g. 'Flu'" : "Find a symptom. e.g. 'Cough'"

        return (

            <div className="home-page">
                <section className="home-search">
                    <h1 className = "home-hero">Alternative Remedies for the People.{<br />} <span className = "subheader-home">By the People.</span></h1>
                    <div className="searchbar-wrapper">
                    <div className = "toggle-buttons">
                        <button id = "toggle-search-name" className = {`toggle-search ${this.state.searchByName?"active":""}`} onClick = {this.toggleButton}>Name</button>
                        <button id = "toggle-search-symptom" className = {`toggle-search ${!this.state.searchByName?"active":""}`} onClick = {this.toggleButton}>Symptom</button>
                    </div>
                    <form onSubmit={this.handleSearch} id = 'home-search-form'>

                        <input type='text' 
                                id='home-search-term' 
                                placeholder = {placeholder}
                                onChange = {this.handleChange}>
                                </input>

                        <button
                            type='submit'
                            id = 'search-button'
                            ref={this.searchButton}
                            >
                            </button>

                    </form>
                    <div className="autofill-container">
                        {autofillName.length>0?<p className="autofill first-entry" onClick={this.clickSearch}>Show all results with {this.state.searchByName?"name":"symptoms"} matching "{this.state.searchTerm}"</p>:""}
                    {autofillName.length>5?  autofillName.slice(0,5): autofillName}
                    {autofillName.length>0?<p className="autofill end-af"></p>:""}
                    </div>
                    </div>

                </section>

                <section className="app-explain">
                    <div className = "explain sick">
                        <img src="https://img.icons8.com/officel/80/000000/being-sick.png" alt= "icon of hospital bed" height="60" width = "60" />
                        <p>When you're feeling ill, use Our Health to diagnose your ailment and browse natural home remedies.</p>
                        </div>
                    <div className = "explain find">
                        <img src="https://img.icons8.com/dusk/64/000000/sun-smiling.png" alt= "icon of smiling sun" height = "60" width = "60" />
                        <p>Choose your remedy and start to feel better!</p>
                    </div>
                    <div className = "explain help">
                        <img src="https://img.icons8.com/dusk/64/000000/welfare.png" alt = "icon of helping hands" height = "60" width = "60" />
                        <p>Share your experiences or add another home remedy</p>
                    </div>

                </section>

            </div>
        )
    }
}

