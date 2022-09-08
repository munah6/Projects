import React from "react"
import "./Meme.css"

export default function Meme() 
{
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState({})
    

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(apiData => setAllMeme(apiData))
    }, [])
    
    
    function getRandomImage() 
    {
        const memeArray = allMeme.data.memes
        const random = Math.floor(Math.random() * memeArray.length)
        const randomImage = memeArray[random].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                image: randomImage
            }
        })
    }

    console.log("meme image: ", meme.image.randomImage)

    function changeHandler(event) 
    {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }


    return (
        <main>
            <div className="form">
            
                <div className="meme-form-input">
                    <input 
                        name="topText"
                        type="text"
                        value={meme.topText}
                        onChange={changeHandler}
                        placeholder="Top Text"
                    />

                    <input 
                        name="bottomText"
                        type="text"
                        value={meme.bottomText}
                        onChange={changeHandler}
                        placeholder="Bottom Text"
                    />
                </div>

                <button 
                    className="meme-form-button"
                    onClick={getRandomImage}
                >
                        Get a new meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.image} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}