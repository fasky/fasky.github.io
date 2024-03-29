import React from 'react';

function About() {
  return (
    <div className="About">
      <img src={require("../media/Headshot.png")} id="myImg" alt="headshot"/>
      <section id="aboutBody">
        <div id="aboutMain">
          <h1>About Kyle</h1>
          <p>Kyle Fasanella is an RIT grad with a B.S. in Game Development.</p>
          <p>He spent two co-ops at RIT as a full-stack web developer.</p>
          <p>Much of his favorite classwork dealt with web development and he is pursuing a career in the field.</p>
          <p>He has game and software projects under his belt, both for class and personal.</p>
          <p>Currently between opportunities, he spends time working on new websites, climbing, and modding.</p>
          <p>Originally from CT, he is searching for jobs near Denver.</p>
          <p>He's open for remote work as well.</p>
          <p>JS, HTML, CSS, Java, React, Angular, Node, C/C++, C#, Unity, Photoshop, Premiere</p>
          <p><a target="_blank" href="https://docs.google.com/document/d/1eKLengVle-ndJy8GgMYuo4oOJJ0o1WupW8j9UnZxM_c/edit?usp=sharing">Résumé</a></p>
        </div>
        <div id="aboutContact">
          <h1>Let's Talk</h1>
          <p><a href = "mailto: fasanellaky@gmail.com">fasanellaky@gmail.com</a>  |  203-212-0460</p>
          <p>Denver, CO</p>
          <p><a target="_blank" href="https://www.linkedin.com/in/kyle-fasanella">On LinkedIn</a></p>
          <p><a target="_blank" href="https://github.com/fasky">GitHub</a> | <a target="_blank" href="https://sketchfab.com/fasky">SketchFab</a> | <a target="_blank" href="https://fasky.itch.io/">Itch</a></p>
        </div>
        
      </section>
    </div>
  );
}

export default About;