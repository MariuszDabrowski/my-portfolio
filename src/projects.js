import fishingGame1 from "./img/projects/fishing-game/image-1.jpg";
import fishingGame2 from "./img/projects/fishing-game/image-2.jpg";
import fishingGame3 from "./img/projects/fishing-game/video-1.mp4";
import fishingGame4 from "./img/projects/fishing-game/video-2.mp4";

import hotSticky1 from "./img/projects/hot-sticky/image-1.jpg";
import hotSticky2 from "./img/projects/hot-sticky/image-2.jpg";
import hotSticky3 from "./img/projects/hot-sticky/image-3.jpg";
import hotSticky4 from "./img/projects/hot-sticky/video-1.mp4";

import aroundTheWorld1 from "./img/projects/around-the-world/image-1.jpg";
import aroundTheWorld2 from "./img/projects/around-the-world/video-1.mp4";
import aroundTheWorld3 from "./img/projects/around-the-world/image-2.gif";
import aroundTheWorld4 from "./img/projects/around-the-world/image-3.gif";

import hippo1 from "./img/projects/hippo/image-1.jpg";
import hippo2 from "./img/projects/hippo/video-1.mp4";

import acmiles1 from "./img/projects/acmiles/image-1.jpg";
import acmiles2 from "./img/projects/acmiles/image-2.jpg";
import acmiles3 from "./img/projects/acmiles/image-3.gif";
import acmiles4 from "./img/projects/acmiles/video-1.mp4";

import covid1 from "./img/projects/covid/image-1.jpg";
import covid2 from "./img/projects/covid/video-1.mp4";

import tacobell1 from "./img/projects/taco-bell/image-1.jpg";
import tacobell2 from "./img/projects/taco-bell/image-2.jpg";

import russellStover1 from "./img/projects/russell-stover/image-1.jpg";
import russellStover2 from "./img/projects/russell-stover/video-1.mp4";

import natureClean1 from "./img/projects/nature-clean/image-1.jpg";
import natureClean2 from "./img/projects/nature-clean/image-2.gif";
import natureClean3 from "./img/projects/nature-clean/image-3.gif";
import natureClean4 from "./img/projects/nature-clean/image-4.jpg";

import gripLimited1 from "./img/projects/grip-limited/image-1.jpg";
import gripLimited2 from "./img/projects/grip-limited/image-2.jpg";

import honda1 from "./img/projects/honda/image-2.jpg";
import honda2 from "./img/projects/honda/image-1.jpg";

const projects = {
  client: [
    {
      id: 0,
      company: "Honda/Acura",
      projectTitle: "Many Projects",
      description: `<p>I had the privilege of working with Honda Canada as a client for many years across many projects. I lead the front-end team and worked closely with the designers on the UI in multiple redesigns of the <a href="https://www.honda.ca/" target="_blank">Honda.ca</a> and <a href="https://www.acura.ca/">Acura.ca</a> properties as well as their other products (<a href="https://motorcycle.honda.ca/" target="_blank">Motorcycles</a>, <a href="https://powerequipment.honda.ca/" target="_blank">Power Equipment</a>, etc.).</p>`,
      hero: honda1,
      additionalHero: honda2,
    },
    {
      id: 1,
      company: "Taco Bell",
      projectTitle: "Redesign + Optimization",
      description: `<p>Convert the project from .NET to a more modern framework that would make the site load faster and easier to update.</p>`,
      hero: tacobell1,
      additionalHero: tacobell2,
      listHeading: "Tasks",
      listItems: [
        "Rebuild the site as a static site using React + Gatsby to improve the load times",
        "Implement an API to make updating deals and products easier",
      ],
    },
    {
      id: 2,
      company: "Russell Stover",
      projectTitle: "Redesign",
      description: `<p>The client wanted a more hip and eye catching design with a pleasant user experience.</p>`,
      hero: russellStover1,
      video: russellStover2,
      listHeading: "Tasks",
      listItems: [
        "Build a bilingual panel based scrolling site",
        "Add subtle but pleasant animations throughout",
      ],
    },
    {
      id: 3,
      company: "Nature Clean",
      projectTitle: "Redesign + Ecommerce",
      description: `<p>Following a rebrand the client wanted a website to match their new look. This included the need for a e-commerce platform to sell their products.</p>`,
      hero: natureClean1,
      splitImages: [
        { src: natureClean3, type: "image", outline: true },
        { src: natureClean2, type: "image", outline: true },
      ],
      additionalHero: natureClean4,
      listHeading: "Tasks",
      listItems: [
        "Research and advice the client on the best approach for a e-commerce platform",
        "Create implement a custom Shopify theme",
        "Add subtle but pleasant animations throughout",
      ],
    },
    {
      id: 4,
      company: "Grip Limited",
      projectTitle: "Redesign",
      description: `<p>Still stuck in the Flash days, Grip wanted to redo their website with a focus on showcasing the client work.</p>`,
      hero: gripLimited1,
      additionalHero: gripLimited2,
      listHeading: "Tasks",
      listItems: [
        "Work closely with the designers",
        "Come up with the API structure for the sites content",
        "Build out the design in React",
        "Build a tool to help the designers layout new client pages",
      ],
    },
  ],
  personal: [
    {
      id: 4,
      company: "AC Miles",
      projectTitle: "API Design + UI Experiment",
      description: `<p>This project is based off of the achievements panel from the wildly popular Nintendo Animal Crossing game.</p>`,
      hero: acmiles1,
      splitImages: [
        { src: acmiles3, type: "image" },
        { src: acmiles2, type: "image" },
      ],
      video: acmiles4,
      listHeading: "Goals",
      listItems: [
        "Create an API to display all of the achievements, but do it in such a way that when future achievements land, little to no work is needed to update the page",
        "Replicate the Nintendo interface in the browser and make it responsive",
      ],
    },
    {
      id: 0,
      company: "Fishing Mini Game",
      projectTitle: "Interactive animation",
      description: `<p>I wanted to cut down on video game time, so what better way than to build your own mini game.</p>`,
      hero: fishingGame1,
      splitImages: [
        { src: fishingGame2, type: "image" },
        { src: fishingGame4, type: "video" },
      ],
      video: fishingGame3,
      listHeading: "Goals",
      listItems: [
        "Experiment with SVG animation and interactivity",
        "Create a playable mini game",
        "Practice UI design that’s not a website",
      ],
    },
    {
      id: 5,
      company: "COVID-19 Tracker",
      projectTitle: "Chrome extension",
      description: `<p>This project was born out of a 24 hour hackathon. At the time there wasn’t a good source to get an idea how every country was doing during the pandemic.</p>`,
      hero: covid1,
      video: covid2,
      listHeading: "Goals",
      listItems: [
        "Create the ability for a user to track their desired countries",
        "Build a Chrome Extension",
        "Brush up on React",
        "Design a clean UI to make the data less daunting",
      ],
    },
    {
      id: 2,
      company: "Around The World",
      projectTitle: "Animation rigging",
      description: `<p>This project was created to experiment with animations created in After Effects using Lottie and finding ways to make them interactive.</p>`,
      hero: aroundTheWorld1,
      splitImages: [
        { src: aroundTheWorld3, type: "image" },
        { src: aroundTheWorld4, type: "image" },
      ],
      video: aroundTheWorld2,
      videoLarge: true,
      listHeading: "Goals",
      listItems: [
        "Design and rig a biking character in After Effects",
        "Create a umbrella opening animation",
        "Find a way to layer these animations and make them interactive",
      ],
    },
    {
      id: 3,
      company: "Interactive Hippo",
      projectTitle: "Timeline animation",
      description: `<p>I’ve wanted to give recording a video tutorial on Youtube a shot. So I created this button to act as the lesson that I would teach in the video.</p>`,
      hero: hippo1,
      video: hippo2,
      videoLarge: true,
      listHeading: "Goals",
      listItems: [
        "Come up with a concept that’s eye catching but not overly complex",
        "Create a written tutorial",
        "Record a video tutorial",
      ],
    },
    {
      id: 1,
      company: "Hot 'n' Sticky",
      projectTitle: "Physics-based animation",
      description: `<p>I love combining various techniques and libraries when creating animations. I had just found out about Matter.js, a JavaScript physics library, and wanted to experiment with using it on in interactive animation.</p>`,
      hero: hotSticky1,
      splitImages: [
        { src: hotSticky3, type: "image" },
        { src: hotSticky2, type: "image" },
      ],
      video: hotSticky4,
      videoLarge: true,
      listHeading: "Goals",
      listItems: [
        "Design a eye catching experiment",
        "Use Matter.js to make the design interactive",
        "Write a process post explaining how this was done",
      ],
    },
  ],
};

export default projects;
