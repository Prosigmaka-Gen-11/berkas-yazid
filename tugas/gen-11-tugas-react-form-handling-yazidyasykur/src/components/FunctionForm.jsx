import useForm from "./customHook"

export default function FunctionForm() {

    const genderList = [
        {value : 'M', label: 'Male'},
        {value : 'F', label: 'Female'},
        {value : 'X', label: 'Unidentified'}
    ]

    const typeList = [
        'Normal', 'Fire', 'Water',
        'Grass', 'Electric', 'Ice',
        'Fighting', 'Poison','Ground',
        'Flying', 'Psychic', 'Bug',
        'Rock', 'Ghost', 'Dark',
        'Dragon', 'Steel', 'Fairy'
    ]

    const {input, handleFormInput} = useForm({
        name: "",
        catchDate : "",
        gender : "",
        type: [],
        base : "",
        description : ""
    })
    
	function handleSubmit (event) {
		event.preventDefault()
		console.log(input)
	}

    return (
        <div>
            <h1>Function Component Form</h1>

        <form onSubmit={() => handleSubmit(event)}>
            <label>
                Pokemon Name :
                <input type="text" value={input.name} onChange={event => handleFormInput(event, 'name')}/>
            </label>

            <br />

            <label>
                Catch Date :
                <input type="date" value={input.catchDate}
                onChange={event => handleFormInput(event,'catchDate')} />
            </label>

            <br />

            <p>Gender : </p>
            {genderList.map((item) =>
                <label key={item.value}>
                    <input
                    type="radio"
                    name="gender"
                    value={item.value}
                    onChange={event => handleFormInput(event,'gender')}
                    />
                    {item.label}
                </label>
            )}

<br />

            <p>Type : </p>
            {
                typeList.map((item) => 
                    <label key={item}>
                        <input
                        type="checkbox"
                        name="type"
                        value={item}
                        onChange={event => {
                            handleFormInput(event,'type','checkbox')
                            console.log(input.type)
                        }}
                        />
                        {item}
                    </label>
                )
            }

<br />

            <label>
                Base :  <br />
                <select onChange={event => handleFormInput(event,'base')}>
                    <option value="" disabled>- Select Base-</option>
                    <option value="Plant">Plant</option>
                    <option value="Animal">Animal</option>
                    <option value="Mythological">Mythological</option>
                </select>
            </label>

            <br />

            <label>
                Additional Description <br />
                <textarea onChange={event => handleFormInput(event, 'description')}/>
            </label>

            <button>Submit</button>
            </form>

            <div>
                Name : {input.name} <br/>
                Catch Date : {input.catchDate} <br/>
                Gender : {input.gender} <br/>
                Type : {input.type.toString()} <br/>
                Base : {input.base} <br/>
                Description : {input.description} <br/>
            </div>
        </div>
    )
}