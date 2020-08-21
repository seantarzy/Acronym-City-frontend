import {Select} from 'react'
import React from 'react';


class CategorySearch extends React.Componenet {
    state = {
        selectedOption: null,
        searchList: ['red', 'blue', 'yellow']
    }
    handleChange = selectedOption => {
        this.setState({ selectedOption })
    }
    render() {
        return (
            <div>
                <Select
                    value={this.state.selectedOption}
                    options={this.state.searchList}
                    onChange={this.handleChange}
                    placeholder="Search..."
                    openMenuOnClick={false}
                    classNamePrefix="select"
                />
            </div>
        )
    }
}

export default CategorySearch 