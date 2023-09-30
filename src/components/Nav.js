const Nav = (props) => {
    const {location} = props
    return (
        <h1>
            {props.greeting}
            {location}
        </h1>
    )
}

export default Nav