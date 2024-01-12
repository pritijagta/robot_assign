
import './Search.css'
import { useState } from 'react';

export default function Search()
{
  const [inputString, setInputString] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [uniqueTexts, setUniqueTexts] = useState([]);
  


  async function Generateimage()
   {
    
       
          const url = `https://robohash.org/${(inputString)}`;
          const response = await fetch(url);
    
          
          const imageBlob = await response.blob();
    
          const imageUrl = URL.createObjectURL(imageBlob);

          if (!uniqueTexts.includes(inputString)) {
           
            setImageUrls([...imageUrls, imageUrl]);
            setUniqueTexts([...uniqueTexts, inputString]);
          } else {
           
            alert("Same text entered. Please enter a different text.");
          }
        } 
      
    
        
      
    
      
function textinput(event)
   {
      setInputString(event.target.value);
   }
    
    return(
    <div>
        <div className='search'>
        <div className="input-group">
        <input type="text" placeholder="Generate Robot" value={inputString} onChange={textinput}></input>
        <button className="btn btn-primary"   onClick={Generateimage}> Enter </button>
        </div >
        

        </div>
       
        {imageUrls.length > 0 && (
        <div className='row'>

          <h2 className='text-center'>Robot List:</h2>
          
          {imageUrls.map((url) => (
             <div className='col-4' >
            <img  src={url} alt={`Generated Robot `} />
            </div>
          ))}
         

         
        </div>
      )}
       
    </div>
    )

}