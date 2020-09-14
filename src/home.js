import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import state from "react";
import { fetchQuery } from "./services/utils";
import Lyrics from './lyrics.js'
class Home extends React.Component {
  state = {
    searchPhrase: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchPhrase: e.target.value });
    console.log(this.state);
  };

  handleLyrics = (lyrics, song_name, artist) =>{
    let lyricsDiv = document.getElementById('lyrics')
    if(lyrics){
      let name = document.createElement("p");
      name.innerText = song_name
      lyricsDiv.append(name)
      let author = document.createElement("p");
      author.innerText = artist
      lyricsDiv.append(author);
      let p1 = document.createElement('p')
      p1.innerText = lyrics[0]
      lyricsDiv.appendChild(p1)
      let boldStuff = document.createElement("b");
      boldStuff.innerText = lyrics[1]
      lyricsDiv.appendChild(boldStuff);
      let p2 = document.createElement("p");
      p2.innerText = lyrics[2]
      lyricsDiv.appendChild(p2)
    }
    else{
      let error = document.createElement('p')
      error.innerText = 'Unable to match song to text input.'
      lyricsDiv.appendChild(error)
    }

  }

  handleSubmit = (e) => {
    e.preventDefault();
    let lyricsDiv = document.getElementById('lyrics')
    let loading = document.createElement('img');
    lyricsDiv.innerText = 'Loading...'
    loading.src = "https://media.giphy.com/media/QpWDP1YMziaQw/giphy.gif";
    lyricsDiv.append(loading)
    fetchQuery(this.state.searchPhrase).then((r) => {
      console.log(r.result)
      lyricsDiv.innerText = "";
      this.handleLyrics(r.result.lyrics_array, r.result.song_title, r.result.artist)
    });
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav>Type in your Phrase</Nav>
          </Nav>
          <Form inline onSubmit={(e) => this.handleSubmit(e)}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => this.handleChange(e)}
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
            <div class='lyrics' id="lyrics">
              
            </div>
        </Navbar>
        <br />
      </>
    );
  }
}

export default Home;
