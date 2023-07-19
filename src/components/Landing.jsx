
import { useState , useEffect} from 'react'

export default function Landing() {
  const [meme , setMeme] = useState({
    topText: "",
    bottomText:"",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() =>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))

  },[])

  function handleChange(event){
    const {name, value} = event.target 
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value
    }))

  }
  function getMeme(){ 
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = (allMemes[randomNumber].url)
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }


  return(
      <main>
        <div className="form">
          <div className="input-text">
          <input 
          type="text" 
          placeholder="Top-text" 
          className="first-input" 
          onChange={handleChange}
          name="topText"
          value={meme.topText}/>

          <input 
          type="text" 
          placeholder="Bottom-text" 
          className="second-input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}/>
          </div>

          <div className="landing">
          <button onClick={getMeme} className="form-button">GET A NEW MEME IMAGE
          </button>
          <div className="meme-img">
            <img src={meme.randomImage} className='meme-img'/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>

          </div>
        </div>

      </main>
  

  )

}