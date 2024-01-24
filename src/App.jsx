

import './App.css'
import Gallery from './Gallery';

import { getImageUrl  } from './utils';
//your first ComPonent 
// function Profile() {
//  return (
// <img src= "https://i.imgur.com/MK3eW3As.jpg"
//   alt='katherie faker'
// />

//  );
// }
const person = 
{
  name : 'greo_ri_o Just a Username',
  theme:
  {
    backgroundColor : 'black',color:'pink'
    

  }
};

function card ({children})
{
  return (
    <div className = "card">
{children}
    </div>
  )
}
function Profile ()
{
  return (
   < card
   >
   
   <Avatar
      size={100}
      person={
        {
          name :'From Person In Profile',
          imageId:'123'
        }
      }
      />

   </card>

      

    
  );
}


function Avatar ({person,size})
{



  return  (

    
<>
{/* person =Prototype.name; */}

  <img
  className='avatar'
  src={getImageUrl(person)}
  alt={person.name}
  width={size}
height={size}
   />  
  

  

   </>
  
  );

}
// conditional Rendering
function item({name, isPacked})
{
  return(
    <li className='item'>
{name} {isPacked && 'x'}
    </li>
  );
}
function Pac

function App ()
{
//   return (
// <Gallery/>
//   );

return (
<>
<Profile></Profile>
</>
);
}

export default App
