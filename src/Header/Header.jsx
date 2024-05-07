import './header.css'

const Header = ({result}) => {
    return (
        <div className='outputContainer'>
            <h1 className='result'>{result}</h1>
        </div>
    )
}
export default Header