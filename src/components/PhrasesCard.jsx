import React from 'react'

function PhrasesCard({phraseRandom}) {

    console.log(phraseRandom);

    return (
    <div className='img__contain'>
        <div className='phraseRandom'>{phraseRandom.phrase}</div>
        <img className='img__phrase' src="/rectangle1.svg" alt="" />
    </div>
    )
}

export default PhrasesCard
