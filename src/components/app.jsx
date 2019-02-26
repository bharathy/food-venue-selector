import React from 'react';
import { connect } from 'react-redux';

import mapStateToProps from "../utils/mapStateToProps";
import '../styles/main.scss';

import Users from '../components/users';
import PlaceToGo from '../components/placeToGo';
import PlaceToAvoid from '../components/placeToAvoid';

const App = ({ placeToGo, placeToAvoid } ) => {
    return (
        <div className="app p20-0 ft-14">
            <div className="content flex flex-row">
                <Users />
                <PlaceToGo venues= { placeToGo }/>
                <PlaceToAvoid venues= { placeToAvoid }/>
            </div>
        </div>
    )
};

export default connect(mapStateToProps)(App);