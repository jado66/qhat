import { useEffect, useState } from "react"
export default function SimplePasswordProtect(props){

    const [guess, setGuess] = useState("")
    const [showIncorrect, setShowIncorrect] = useState(false)

    const handlePassword = () =>{
        if (guess === props.passcode){
            props.grantAccess()
        }
        else{
            setShowIncorrect(true)
        }
    }

    useEffect(()=>{
        if (showIncorrect){
            setTimeout(() => {
                setShowIncorrect(false)
              }, 1000)
        }
    })

    return(

        <form className="form-signin text-center" style={{maxWidth:"333px", margin:"0 auto"}}>
            <a href="https://www.kbr.com/en"> 
                <svg viewBox="125 125 250 250" xmlns="http://www.w3.org/2000/svg">
                <rect x="189.362" y="183.284" width="121.277" height="123.413" style={{paintOrder: "fill", stroke: "rgb(114, 131, 209)", strokeWidth: "9px", fill: "rgb(216, 217, 221)", rx:"13.874", ry:"13.874"}}/>
                <path d="M 275.884 291.03 L 252.505 291.03 L 252.505 289.138 Q 257.515 289.138 258.767 287.356 Q 260.02 285.575 260.02 280.788 L 260.02 260.805 Q 257.236 264.2 253.34 267.317 Q 249.443 270.435 244.823 270.435 Q 240.482 270.435 237.225 268.347 Q 233.969 266.26 231.826 262.892 Q 229.683 259.524 228.625 255.572 Q 227.568 251.62 227.568 247.835 Q 227.568 240.821 230.406 234.81 Q 233.245 228.798 238.617 225.096 Q 243.988 221.395 251.447 221.395 Q 253.897 221.395 256.429 222.063 Q 258.962 222.73 260.855 224.679 Q 264.083 223.176 266.588 221.395 L 268.369 221.395 L 268.369 280.788 Q 268.369 285.464 269.622 287.301 Q 270.874 289.138 275.884 289.138 Z M 260.02 257.799 L 260.02 236.034 Q 260.02 230.913 257.626 227.963 Q 255.233 225.013 249.777 225.013 Q 244.545 225.013 241.567 228.019 Q 238.589 231.024 237.337 235.422 Q 236.084 239.819 236.084 244.105 Q 236.084 248.447 237.42 252.873 Q 238.756 257.298 241.818 260.276 Q 244.879 263.254 250 263.254 Q 252.95 263.254 255.539 261.584 Q 258.127 259.914 260.02 257.799 Z" style={{lineHeight: "692.529px", whiteSpace: "pre", fill: "rgb(114, 131, 209)"}}/>
                <path d="M 234.091 208.087 L 250.29 192.47 Q 265.616 207.408 266.392 208.087 L 263.191 210.9 L 250.193 197.999 L 237.389 210.9 Z" style={{lineHeight: "692.529px", whiteSpace: "pre", fill: "rgb(114, 131, 209)"}}/>
                </svg>
            </a>
            <h1 className="h3 mb-3 font-weight-normal">QHat Demo Access</h1>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus=""/>
            <input value = {guess} type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={(e)=>setGuess(e.target.value)} />
           
            {
                <div className="text-danger my-2" 
                    style={{visibility:showIncorrect?"":"hidden"}}
                >
                    Wrong Password
                </div>
            }

            <div className="d-flex">
            <button className="btn btn-lg btn-primary btn-block flex-grow-1 " type="button" onClick={handlePassword}>Sign in</button>

            </div>
        </form>
    )
}