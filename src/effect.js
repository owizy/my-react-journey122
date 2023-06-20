import {useState, useEffect} from "react"
export default function Effect(){

    const [imgUrl, setImgUrl] = useState("")
    // const [count, setCount] = useState(0)
    console.log(imgUrl)

    useEffect(()=>{
          
        //    fetching data from the API
        fetch('https://api.imgflip.com/get_memes').then((res)=>{
               return res.json()
        }).then((res)=>{
                let randomNum = Math.floor(Math.random() * 100)
                setImgUrl(res.data.memes[randomNum].url)
                console.log("effect running")
        })
    },[imgUrl])

    return(
            <div>
                  <h1>Image:</h1>
                  <img src={imgUrl} width={400}/>
            </div>
    )
}