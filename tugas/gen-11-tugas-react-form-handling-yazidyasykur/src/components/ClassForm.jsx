import React from "react";

export default class ClassForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            catchDate : "",
            gender : "",
            type: [],
            base : "",
            description : ""
        }

        this.handleFormInput = this.handleFormInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.genderList = [
            {value : 'M', label: 'Male'},
            {value : 'F', label: 'Female'},
            {value : 'X', label: 'Unidentified'}
        ]
    
        this.typeList = [
            'Normal', 'Fire', 'Water',
            'Grass', 'Electric', 'Ice',
            'Fighting', 'Poison','Ground',
            'Flying', 'Psychic', 'Bug',
            'Rock', 'Ghost', 'Dark',
            'Dragon', 'Steel', 'Fairy'
        ]
    }

    handleSubmit(event) {
		event.preventDefault()
		console.log(input)
	}

    handleFormInput(event, propertyName, inputType) {
        if(inputType != "checkbox") {
            this.setState({ ...this.state, [propertyName]: event.target.value}) 
        } else {
            if(event.target.checked){
                let array = this.state.type
                array.push(event.target.value)
                this.setState({ ...this.state, [propertyName]: array}) 
            } else {
                let array = this.state.type
                var index = array.indexOf(event.target.value);
                if (index !== -1) {
                array.splice(index, 1);
                }
                this.setState({ ...this.state, [propertyName]: array}) 
            }
        }
    }

    render(){
        return(
        <div  class="classcomp">
            <h1>Class Component Form</h1>

        <form onSubmit={() => this.handleSubmit} className="functionForm">
            <label>
                Pokemon Name :
                <input type="text" value={this.state.name} onChange={event => this.handleFormInput(event, 'name')}/>
            </label>

            <br />

            <label>
                Catch Date :
                <input type="date" value={this.state.catchDate}
                onChange={event => this.handleFormInput(event,'catchDate')} />
            </label>

            <br />

            <p>Gender : </p>
            {this.genderList.map((item) =>
                <label key={item.value}>
                    <input
                    type="radio"
                    name="gender"
                    value={item.value}
                    onChange={event => this.handleFormInput(event,'gender')}
                    />
                    {item.label}
                </label>
            )}

<br />

            <p>Type : </p>
            {
                this.typeList.map((item) => 
                    <label key={item}>
                        <input
                        type="checkbox"
                        name="type"
                        value={item}
                        onChange={event => {
                            this.handleFormInput(event,'type','checkbox')
                            console.log(this.state.type)
                        }}
                        />
                        {item}
                    </label>
                )
            }

<br />

            <label>
                Base :  <br />
                <select onChange={event => this.handleFormInput(event,'base')}>
                    <option value="" disabled>- Select Base-</option>
                    <option value="Plant">Plant</option>
                    <option value="Animal">Animal</option>
                    <option value="Mythological">Mythological</option>
                </select>
            </label>

            <br />

            <label>
                Additional Description <br />
                <textarea onChange={event => this.handleFormInput(event, 'description')}/>
            </label>

            <button>Submit</button>
            </form>

            <div>
                Name : {this.state.name} <br/>
                Catch Date : {this.state.catchDate} <br/>
                Gender : {this.state.gender} <br/>
                Type : {this.state.type.toString()} <br/>
                Base : {this.state.base} <br/>
                Description : {this.state.description} <br/>
            </div>
        </div>
        )
    }
}