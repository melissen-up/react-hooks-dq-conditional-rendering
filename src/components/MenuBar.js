import React from "react";

function MenuBar({chosenPage, setChosenPage}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  function clickHandler(event) {
    console.log(event);
  }

  return (
    <div className="ui four item menu">
      <span className={chosenPage === "Profile" ? "item active" : "item"} onClick={() => setChosenPage("Profile")}>
        <i className="user large icon" />
      </span>

      <span className={chosenPage === "Photos" ? "item active" : "item"} onClick={() => setChosenPage("Photos")}>

        <i className="photo large icon" />
      </span>

      <span className={chosenPage === "Cocktails" ? "item active" : "item"} onClick={() => setChosenPage("Cocktails")}>
        <i className="cocktail large icon" />
      </span>

      <span className={chosenPage === "Pokemon" ? "item active" : "item"} onClick={() => setChosenPage("Pokemon")}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
  }

export default MenuBar;
