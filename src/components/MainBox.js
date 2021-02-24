import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  const [chosenPage, setChosenPage] = useState("profile")

    
  let displayPage;
  if (chosenPage === "Profile") {
    displayPage = <Profile />
  } else if (chosenPage === "Photos") {
    displayPage = <Photos />
  } else if (chosenPage === "Cocktails") {
    displayPage = <Cocktails />
  } else if (chosenPage === "Pokemon") {
    displayPage = <Pokemon />
  }

  return (
    <div>
      <MenuBar 
      chosenPage={chosenPage} 
      setChosenPage={setChosenPage}
      />
      {displayPage}
    </div>
  );
}

export default MainBox;
