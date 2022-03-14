import React from 'react'
import './Definitions.css';

const Definitions = ({words, category, meanings, lightMode}) => {
  return (
    <div className="meanings">
    {meanings[0] && words && category === 'en' && (
      <audio 
      src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
      className="audio"
      style={{backgroundColor: '#282c34', borderRadius: '10px'}}
      controls
      >
      Your Browser does not support the audio element.
      </audio>
    )}

      {words === "" ? (
      <span className="subTitle">Type a word</span> 
      ) : (
            meanings.map((mean) => 
              mean.meanings.map((item) => 
                item.definitions.map((def) => (
                  <div 
                  className="singleMean" 
                  style={{
                    backgroundColor: lightMode? "#3b5360" : "white", 
                    color: lightMode ? "white" : "black"
                    }}>
                     <b>{def.definitions}</b>
                     <hr style={{backgroundColor:"black", width:"100%"}}/>
                     {
                       def.examples && (
                         <span>
                            <b>Examples : </b> 
                            {def.examples}
                         </span>
                       )}
                       {
                         def.synonyms && (
                          <span>
                          <b>Synonyms : </b> 
                          {def.synonyms.map((s) => `${s}, `)}
                       </span>
                         )
                       }
                  </div>
                ))
            ))
      )}
    </div>
  )
}

export default Definitions;