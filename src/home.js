import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import state from "react";
import { fetchQuery } from "./services/utils";
class Home extends React.Component {
  state = {
    selectedOption: null,
    searchList: ["red", "blue", "yellow"],
    searchPhrase: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchPhrase: e.target.value });
    console.log(this.state);
  };

  boldLyrics = (songInfo) => {
    let lyrics = ''
    console.log(songInfo.index_at, songInfo.length + songInfo.index_at);
    songInfo.lyrics.forEach((lyric, index) => {
      if (index > songInfo.index_at - 1 && index < songInfo.length + songInfo.index_at){
        lyrics += lyric.bold() + ` `
      } else {
        lyrics += lyric + ` `
      }
    })
    return lyrics
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // let initials = this.getTheInitials(this.state.searchPhrase)
    fetchQuery(this.state.searchPhrase).then((r) => {
      console.log(r);
      const p = document.getElementById("result");
      let boldedLyrics = this.boldLyrics(r.result) 
      p.innerText = boldedLyrics;
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
        </Navbar>
        <p id="result"></p>
        <br />
      </>
    );
  }
}

export default Home;
