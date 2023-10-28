import { useState } from "react";
import { useEffect } from "react";

export default function MainSection(){
     const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = useState([]);

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').
        then((res)=> res.json() ).
        then((data) => setAllMemes(data));
    },[])
    

    function getMemeImage(){
        const memesArray= allMemes.data.memes;
         const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name,value} = event.target;
        setMeme((prevMeme)=>{
            let newMeme= {...prevMeme,[name]:value};
            return newMeme;
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                    className='form-field' 
                    type="text"
                    placeholder='top-text' 
                    value={meme.topText} 
                    name="topText" 
                    onChange={handleChange}
                ></input>
                <input
                    className='form-field' 
                    type='text'
                    placeholder='bottom-text' 
                    value={meme.bottomText} 
                    name="bottomText" 
                    onChange={handleChange}
                ></input>
                <button className="form-btn" onClick={getMemeImage}> Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}