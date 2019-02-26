import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from "../utils/mapDispatchToProps";
import mapStateToProps from "../utils/mapStateToProps";
import users from '../data/users';

class Users extends React.Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
    handleSubmit(e) {
        const { updatePlaceToGo, updatePlaceToAvoid, checkedUsers} = this.props;

        updatePlaceToGo(checkedUsers);
        updatePlaceToAvoid(checkedUsers);
    }

    handleChange(e) {
        const checkedUser = {key: e.target.value,
                            name: e.target.name, 
                            checked: e.target.checked };
        
        this.props.updateCheckedUsers(checkedUser);
    }

    render(){
        return (<div className="users flex-auto p10 bdr-rt">
                <h5 className="p20-0 ft-14">Select the team members:</h5>
                <ul>
                    { users.map(({ name }, index) => (
                        <li className="p10 ft-14" key={ `li-${index}` }>
                            <label key={ name }>
                            <input type="checkbox" name={ `${name}` } value={ index } onChange={ this.handleChange }/>
                            { name }
                            </label>
                        </li>
                    )) }
                </ul>
                <button className="users__btn" name="submit" onClick={ this.handleSubmit } >Submit</button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);