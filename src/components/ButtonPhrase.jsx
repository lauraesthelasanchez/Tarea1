import getRandomElementFromArray from "../utils/randomElementFromArray"
import phrase from '../utils/phrases.json'

function ButtonPhrase({setPhraseRandom, setPathRandom, arrBackground}) {

    function handleRandomPhrase() {
        const buttonRandomPhrase = getRandomElementFromArray(phrase)
        setPhraseRandom(buttonRandomPhrase)
        const buttonPath = getRandomElementFromArray(arrBackground)
        setPathRandom(buttonPath)
    }

    return (
    <button className="app__btn" onClick={handleRandomPhrase}>Probar mi suerte</button>
    )
}

export default ButtonPhrase
