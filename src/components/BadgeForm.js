import React from 'react';
import { render } from 'react-dom';

class BadgeForm extends React.Component {
    handleChange = (e) => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });

    }

    handleClick=(e)=>{
        console.log("boton was clicked");
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("boton was submited");
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >FirstName</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" />
                    </div>
                    {/* <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button> */}
                    <button  className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;