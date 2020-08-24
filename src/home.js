import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import state from 'react'
class Home extends React.Component{

    state = {
         selectedOption: null,
         searchList: ['red', 'blue', 'yellow'],
         searchPhrase: ""
     }
 
        handleChange=(e)=>{
          e.preventDefault()
        this.setState({ searchPhrase: e.target.value})
         console.log(this.state)
        }
render(){

return (
    <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto">
            <Nav>Type in your Phrase</Nav>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange = {(e) =>this.handleChange(e)}/>
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
    <br />
    </>
)



}





}

export default Home