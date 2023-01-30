import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function AboutApp(){
    return(
        <div>
            <h2> MERN Stack App </h2>
            <p> This application is developed using the MERN Web Developemnt Stack</p>
            <ul>
                <li>Front End Development</li>
                <p> This allows us to make the Front End UI of the Application with the ReactJS framework. Learn More about ReactJS <a href="https://beta.reactjs.org/">here</a></p>
                
                <li>Back End Development</li>
                <p> The back end server side interaction is handled by NodeJS and Express JS along with various other dependancies like Body Parser, Cors and Mongoose. Learn more about NodeJS <a href="https://nodejs.org/en/docs/">here</a></p>

                <li>Database </li>
                <p> The Database used in this app is a NoSQL Database called MongoDB which is accessed from the backend code using mongoose. Learn more about MongoDB<a href="https://www.mongodb.com/docs/">here</a></p>
            </ul>
        </div>
    )
}