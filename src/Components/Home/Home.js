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
            optionIds:[]
        }
    }

    static contextType = Context

    handleSearch=(e)=> {

        e.preventDefault()

        const searchTerm = e.currentTarget['home-search-term'].value.toLowerCase()
        const maladyArr = this.context.maladies.filter(mal=> mal.malady_name.toLowerCase().includes(searchTerm))
        
        if(!maladyArr){
            this.props.history.push(`maladynotfound/${searchTerm}`)
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
            this.suggestMalady(e.currentTarget.value)
            }

        if(e.currentTarget.value.length<2){
            this.setState({ 
                options: []
            })        
        }
    }

    suggestMalady=(frag)=>{
        const options= this.context.maladies.filter(mal=> mal.malady_name
                                                            .toLowerCase().includes(frag.toLowerCase())
                                                            && mal.malady_name
                                                            .toLowerCase().charAt(0)===frag.toLowerCase().charAt(0))
        this.setState({ 
            options: options,
        })
    }

    render() {

        const autofill = this.state.options.map(mal=><Link className = "autofill" key = {mal.id} to = {`/malady/${mal.id}`}>{mal.malady_name}</Link>)
        
        return (

            <div className="home-page">
                <section className="home-search">
                    <h1 className = "home-hero">Alternative Remedies for the People.{<br />} <span className = "subheader-home">By the People.</span></h1>
                    
                    <form onSubmit={this.handleSearch} id = 'home-search-form'>
                        <input type='text' 
                                id='home-search-term' 
                                placeholder = "Find a condition. e.g. 'Flu'"
                                onChange = {this.handleChange}>
                                </input>


                        <button
                            type='submit'
                            id = 'search-button'
                            ></button>
                    </form>

                    {autofill}

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

