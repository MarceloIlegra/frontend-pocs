
import {uppercase, addCooker} from './util/util';

window.onload = () => {
  document.getElementById('parse-name').onclick = event => {
    event.preventDefault();
    const name = extractValueToParse();
    updateDOM(addCooker(name));
  };
};

const extractValueToParse = () => document.getElementById('name').value;

const updateDOM = (name) => document.getElementById('display-name').innerHTML = uppercase(name);
