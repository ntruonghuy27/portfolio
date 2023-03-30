import React from "react";
import "../static/scss/future.scss";
import { tickets } from "../static";

export default function Future() {
  return (
    <article className="future">
      <VideoBG />
      <TextDiv1 />
      <TextDiv2 />
      <TextDiv3 />
    </article>
  );
}

function VideoBG() {
  return (
    <div className="videoBG">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <video autoPlay muted loop>
        <source src={tickets.videobg} type="video/mp4"></source>
      </video>
    </div>
  );
}

function TextDiv1() {
  return (
    <div className="text-1">
      <h1>A new game world for those who like to experience.</h1>
      <p>
        Application development with all game genres.
        <br />
        Game from simple to complex operation.
        <br />
        Players will have access to new technologies.
      </p>
    </div>
  );
}

function TextDiv2() {
  return (
    <div className="text-2">
      <p>
        It's the <b>SCIMA's GAME CENTER</b>.
      </p>
    </div>
  );
}

function TextDiv3() {
  return (
    <div className="text-3">
      <h2>40%</h2>
      <p>
        Increase the number
        <br />
        of users in the future.
      </p>
    </div>
  );
}
