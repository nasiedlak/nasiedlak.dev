import React from 'react';
import './App.css';
import TextComponent from './components/textComponent/textComponent';
import ProjectBoxComponent from './components/projectBoxComponent/projectBoxComponent';
import DropdownComponent from './components/dropdownComponent/dropdownComponent';
import BoxComponent from './components/boxComponent/boxComponent';
import { WELCOME_MESSAGE, ABOUT_ME, SCHOOL, P1DESC, P2DESC, P3DESC, P4DESC } from './constants';

function App() {
  return (
    <div className="appContainer">
      <div className="container">
        <div className="introWrapper">
          <div className="introTextWrapper">
            <TextComponent location="welcomeMessage" text={WELCOME_MESSAGE} />
            <TextComponent location="aboutMe" text={ABOUT_ME} />
            <TextComponent location="school" text={SCHOOL} />
          </div>
          <div className="decorationWrapper">
            <div className="imageWrapper">
              <img className="profile" src={process.env.PUBLIC_URL + "/profile.png"} alt="Profile"></img>
            </div>
          </div>
          <div className="projectWrapper">
            <TextComponent location="projects" text="Projects" />
            <div className="projectBoxesWrapper">
              <ProjectBoxComponent date="2023" title="Subscription Reminder" description={P1DESC} link="https://github.com/nasiedlak/SubscriptionNotifier"/>
              <ProjectBoxComponent date="2022" title="DegreeMate" description={P2DESC}link="https://github.com/nasiedlak/degreemate"/>
              <ProjectBoxComponent date="2022" title="Passcheck" description={P3DESC} link="https://github.com/nasiedlak/passcheck"/>
              <ProjectBoxComponent date="2020" title="Blackjack" description={P4DESC} link="https://github.com/nasiedlak/blackjack"/>
            </div>
          </div>
          <div className="experiencesLinksWrapper">
            <div className="experiencesWrapper">
              <TextComponent location="experiences" text="Experiences" />
              <div className="experienceDropdownsWrapper">
                <DropdownComponent title="Software Engineer Intern at Dell Technologies" date="2023" />
                <DropdownComponent title="Software Engineer Intern at Springs Window Fashions" date="2022" />
                <DropdownComponent title="Electrical Engineer Intern at 1Micro" date="2021" />
              </div> 
            </div>
            <div className="linksWrapper">
              <BoxComponent />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <section>
          <nav>
            <span>
              Made by Cooper Nasiedlak
            </span>
          </nav>
        </section>
      </footer>
    </div>
  );
}

export default App;