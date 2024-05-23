import 'bootstrap/dist/css/bootstrap.min.css';
import {Container , InputGroup , FormControl ,Button , Row , Card} from 'react-bootstrap';
import { useState,useEffect } from 'react';

const CLIENT_ID = "12ec62bfa41c47688d60fb39c10634c7";
const CLIENT_SECRET = "a82068eff56846e3abb93d191824e4e5";

function Search(){
    const [searchInput ,setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums,setAlbums]=useState([])
  useEffect(() => {
    //API Access Token 
    var authParameters = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
      }
    
     fetch('https://accounts.spotify.com/api/token',authParameters)
     .then(result => result.json())
     .then(data => setAccessToken(data.access_token))
  },[])

  //Search
  async function search(){
    console.log("Seach for " + searchInput);//Taylor swift
//Get request using search to get the Artist ID
var searchParameters = {
  method:'GET',
  headers:{
    'Content-Type' : 'application/json',
    'Authorization' : 'Bearer ' + accessToken
  }
}
var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
.then(response => response.json())
.then(data => {return data.artists.items[0].id});


//Get request with Artist ID grap all the albums from that artist

var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
.then(response => response.json())
.then(data => {
    console.log(data);
    setAlbums(data.items);
  });
//Display those albums to the user

}
console.log(albums)



  return (
    <div className="Seach">
      <Container>
        <InputGroup className="mt-3 mb-3" size="lg">
          <FormControl 
          placeholder='Search For an Artist'
          type="input"
          onKeyDown={event => {
              if(event.key == "Enter"){
                search();
              }
          }}
           onChange = { event =>setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Search</Button>
        </InputGroup>
      </Container>
      <Container>
      <Row className='mx-2 row row-cols-4'>
      {albums.map((album,i) => {
        return(
          <Card>
          <Card.Img src={album.images[0].url} className='mt-3'/>
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
          </Card.Body>
        </Card>
        )
      })}
     
      </Row>
        
      </Container>
    </div>
  );
}

export default Search;

