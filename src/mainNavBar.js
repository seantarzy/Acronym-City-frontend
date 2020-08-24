import {Select} from 'react'
import React from 'react';


class MainNavBar extends React.Componenet {
    state = {
        selectedOption: null,
        searchList: ['red', 'blue', 'yellow']
    }
    handleChange = selectedOption => {
        this.setState({  })
    }
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav>Type in your Phrase</Nav>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br />
            </>
        )
    }
}

export default MainNavBar 