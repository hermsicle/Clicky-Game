import React, { Component } from 'react'
import "./Main.css"
import AcidRick from "../Assets/Images/acidrick.jpg"
import AngryPlanet from "../Assets/Images/angryplanet.jpg"
import AngrySun from "../Assets/Images/angrysun.jpg"
import CoolRick from "../Assets/Images/coolrick.jpg"
import DerpMorty from "../Assets/Images/derpmorty.jpg"
import DerpRick from "../Assets/Images/derprick.jpg"
import Doggy from "../Assets/Images/doggy.jpg"
import EvilPickleRick from "../Assets/Images/evilpicklerick.jpg"
import GiantDuck from "../Assets/Images/giantduck.jpg"
import NurseRick from "../Assets/Images/nurserick.jpg"
import PickleRick from "../Assets/Images/picklerick.jpg"
import TerrifiedMorty from "../Assets/Images/terrifiedmorty.jpg"

class Main extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="app">
                    <img src={AcidRick} className="img" alt=""></img>
                    <img src={AngryPlanet} className="img" alt=""></img>
                    <img src={AngrySun} className="img" alt=""></img>
                    <img src={CoolRick} className="img" alt=""></img>
                    <img src={DerpMorty} className="img" alt=""></img>
                    <img src={DerpRick} className="img" alt=""></img>
                    <img src={Doggy} className="img" alt=""></img>
                    <img src={EvilPickleRick} className="img" alt=""></img>
                    <img src={GiantDuck} className="img" alt=""></img>
                    <img src={NurseRick} className="img" alt=""></img>
                    <img src={PickleRick} className="img" alt=""></img>
                    <img src={TerrifiedMorty} className="img" alt=""></img>
                </div>
            </div >
        )
    }
}

export default Main
