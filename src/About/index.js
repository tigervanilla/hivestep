import React from 'react';
import './style.css';

const Index = () => {
    return (
        <div className="about-container d-flex align-items-center">
            <div>
                <h6>ABOUT HIVE STEPS</h6>
                <p className="intro">Language Learning Platform powered by Artificial Intelligence</p>
                <p className="desc">
                    Hive steps bridges the gap between learning a new language
                    with ease, practice and real-time feedback through its futuristic
                    platform. Based on  years of research from global educators to help
                    learn with confidence. Be it IELTS, SAT, or any interview.
                </p>
                <ul>
                    <li>Includes Learning Courseware and Practice Modules</li>
                    <li>Focused on Reading, Listening, Writing and</li>
                    <li>Speaking in the right order</li>
                    <li>Create your own content & Assessments easily</li>
                    <li>Scalable Cloud solutions to grow as your needs grow.</li>
                </ul>
                <button className="btn primary-btn">Connect With Us</button>
            </div>
            <div>
                <img className="ai-image" src="images/ai.svg" alt="ai"/>
            </div>
        </div>
    );
};

export default Index;