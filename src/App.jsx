import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'

const arrBackground = [1, 2, 3, 4]

function App() {

  const initialPhrase = randomElementFromArray(phrases)
  const initialPhat = randomElementFromArray(arrBackground)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase);
  const [pathRandom, setPathRandom] = useState(initialPhat);

  const objStyle = {
    backgroundImage: `url('/fondo${pathRandom}.jpg')`
  }


  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <PhrasesCard phraseRandom={phraseRandom} />
      <ButtonPhrase 
      setPhraseRandom={setPhraseRandom}
      setPathRandom={setPathRandom} 
      arrBackground={arrBackground}
      />
    </div>
  )
}

export default App
