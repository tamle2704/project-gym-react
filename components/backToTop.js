import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default function BackToTop() {
  return (
    <ScrollUpButton
      ShowAtPosition={150}
      ContainerClassName=" AnyClassForContainer "
      TransitionClassName=" AnyClassForTransition "
    >
      <div>
        <a id="button">
          <i className="far fa-arrow-alt-circle-up" />
        </a>
      </div>
    </ScrollUpButton>
  );
}
