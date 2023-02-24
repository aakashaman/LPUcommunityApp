import { useState } from "react";
import Clubs from "./Clubs";
import Competitions from "./Competitions";
import EventsPage from "./EventsPage";
import Mess from "./Mess";
import QNApage from "./QNApage";
import StudyMaterial from "./StudyMaterial";
import styles from "../CSS Modules/Home.module.css";

export default function Home() {
  // const [showQnA, setShowQnA] = useState(false);
  // const [showEvents, setShowEvents] = useState(false);
  // const [showMess, setShowMess] = useState(false);
  // const [showStudyMaterial, setShowStudyMaterial] = useState(false);
  // const [showClubs, setShowClubs] = useState(false);
  // const [showCompetitions, setShowCompetitions] = useState(false);
  // const [showHome, setShowHome] = useState(true);

  // function showHomeDiv() {
  //   setShowHome(true);
  //   setShowQnA(false);
  //   setShowEvents(false);
  //   setShowMess(false);
  //   setShowStudyMaterial(false);
  //   setShowClubs(false);
  //   setShowCompetitions(false);
  // }

  // function showQnADiv() {
  //   setShowHome(false);
  //   setShowQnA(true);
  //   setShowEvents(false);
  //   setShowMess(false);
  //   setShowStudyMaterial(false);
  //   setShowClubs(false);
  //   setShowCompetitions(false);
  // }

  // function showEventsDiv() {
  //   setShowHome(false);
  //   setShowQnA(false);
  //   setShowEvents(true);
  //   setShowMess(false);
  //   setShowStudyMaterial(false);
  //   setShowClubs(false);
  //   setShowCompetitions(false);
  // }

  // function showMessDiv() {
  //   setShowHome(false);
  //   setShowQnA(false);
  //   setShowEvents(false);
  //   setShowMess(true);
  //   setShowStudyMaterial(false);
  //   setShowClubs(false);
  //   setShowCompetitions(false);
  // }

  // function showClubsDiv() {
  //   setShowHome(false);
  //   setShowQnA(false);
  //   setShowEvents(false);
  //   setShowMess(false);
  //   setShowStudyMaterial(false);
  //   setShowClubs(true);
  //   setShowCompetitions(false);
  // }

  // function showStudyMaterialDiv() {
  //   setShowHome(false);
  //   setShowQnA(false);
  //   setShowEvents(false);
  //   setShowMess(false);
  //   setShowStudyMaterial(true);
  //   setShowClubs(false);
  //   setShowCompetitions(false);
  // }

  // function showCompetitionsDiv() {
  //   setShowHome(false);
  //   setShowQnA(false);
  //   setShowEvents(false);
  //   setShowMess(false);
  //   setShowStudyMaterial(false);
  //   setShowClubs(false);
  //   setShowCompetitions(true);
  // }

  return (
    <div>
      <div>
        <div className={styles.category}>
          {/* <button onClick={showHomeDiv}>Home</button>
          <button onClick={showEventsDiv}>Events</button>
          <button onClick={showQnADiv}>Question & Answer</button>
          <button onClick={showStudyMaterialDiv}>Study Materials</button>
          <button onClick={showClubsDiv}>Clubs</button>
          <button onClick={showCompetitionsDiv}>Competitions</button>
          <button onClick={showMessDiv}>Mess</button> */}
        </div>
        <div>
          {/* {showHome && <Home></Home>}
          {showQnA && <QNApage></QNApage>}
          {showEvents && <EventsPage></EventsPage>}
          {showMess && <Mess></Mess>}
          {showStudyMaterial && <StudyMaterial></StudyMaterial>}
          {showClubs && <Clubs></Clubs>}
          {showCompetitions && <Competitions></Competitions>} */}
        </div>
      </div>
    </div>
  );
}
