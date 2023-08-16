import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log("Data:::", Data);
  console.log("Notes:::", Notes);
  console.log("output `TOML Example`:::", toml.title);
  console.log("output `Tom Preston-Werner`:::", toml.owner.name);

  console.log("output `YAML Example`:::", yaml.title);
  console.log("output `Tom Preston-Werner`:::", yaml.owner.name);

  console.log("output `JSON5 Example`:::", json.title);
  console.log("output `Tom Preston-Werner`:::", json.owner.name);

  return element;
}

document.body.appendChild(component());
