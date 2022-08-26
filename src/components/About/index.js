import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', '.']}
                        idx={15}
                    />
                </h1>
                <p>
                    Placeholder text.
                </p>
            </div>
        </div>
    )
}

export default About