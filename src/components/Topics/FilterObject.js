import React, {Component} from 'react'

export default class FilterObject extends Component {
    handleChange(val) {
        this.setState({userInput: val})
    }

    filterEmployees(prop){
        let employees = this.state.employees
        let filteredEmployees = []

        for(let i=0;i<employees.length;i++){
            if(employees[i].hasOwnProperty(prop)){
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredEmployees: filteredEmployees})

    }

    render (){
        return (
            <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className="puzzleText"> Original: {JSON.stringify(this.state.employees, null, 10)}</span>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
            <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput) }>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
    constructor(){
        super()

        this.state={
            employees: [
                {
                    name:'Billy The Kid',
                    title:'Beat Banger',
                    age: 7
                },
                {
                    name:'Shelby Shwag',
                    title: 'Hairdresser',
                    hairColor: 'brown'
                },
                {
                    name: 'Erin Gresko',
                    title: 'Childcare Queen',
                    age: 25
                }
            ],

            userInput: '',
            filteredEmployees: []
        }
        
    }
}