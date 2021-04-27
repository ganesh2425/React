let Header = (props) => {
    return <>
    <h2>{props.one}</h2>
    <h3>{props.two[2]}</h3>
    <gani>{JSON.stringify(props)}</gani>
    <h4>{props.three.fullname}</h4>
    </>
}
export default Header;