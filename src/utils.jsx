export function getImageUrl ( person, size='s')
{
 return(


    'https://i.imgur.com/'+   person.imageId +size +'.jpg'
 );
}
// passing 

export function get_ImageUrl(person)
{
   return(
      'https://i.imgur.com/'+person.imageId+'s.jpg'
   );

}