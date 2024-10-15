
const SearchWithRegexView = (props) => {
    return (<div id='SearchWithRegexDiv'>
        <input
            autoFocus={props.autoFocus}
            type="text"
            onChange={value => props.onChange(value.target.value)}
            onSubmit={value => props.onSubmit(value.target.value)}></input>
    </div>
    )
}

export default SearchWithRegexView