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
    selectedOption: null,
    searchList: ["red", "blue", "yellow"],
    searchPhrase: "",
    lyrics: "",
    moneyLyrics: ""
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchPhrase: e.target.value });
    console.log(this.state);
  };

  boldLyrics = (songInfo) => {
    const lyrics = document.getElementsByClassName('lyrics')

    songInfo.lyrics.forEach((lyric, index) => {

      if (index > songInfo.index_at - 1 && index < songInfo.length + songInfo.index_at){
        const b = document.createElement('b')
        b.innerText = lyric
        lyrics.appendChild(b)
      } else if (index <= songInfo.index_at - 1) {
        
      } else if (index >= songInfo.length + songInfo.index_at){

      }
    })
    // return lyrics
  }

  handleLyrics = (lyrics) =>{
      let lyricsDiv = document.getElementById('lyrics')
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

  handleSubmit = (e) => {
    e.preventDefault();
    // let initials = this.getTheInitials(this.state.searchPhrase)
    fetchQuery(this.state.searchPhrase).then((r) => {
      console.log(r.result)
      this.handleLyrics(r.result.lyrics_array)
    //  let boldedLyrics = this.boldLyrics(r.result) 
      // this.setState({ moneyLyrics: boldedLyrics});
    });
    // console.log(initials)
  };

  // getTheInitials(stringPhrase){
  //     let initialsArray = []
  //     let stringArray = stringPhrase.split(' ')
  //     for(let i = 0; i<stringArray.length; i++){
  //         initialsArray.push(stringArray[i][0].toLowerCase())
  //     }
  //     return initialsArray
  // }

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
            {/* <Lyrics lyrics = {this.state.moneyLyrics}/> */}
            <div class='lyrics' id="lyrics">
              
            </div>
        </Navbar>
        <p id="result"></p>
        <br />
      </>
    );
  }
}

export default Home;
