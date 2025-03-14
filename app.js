import {calculate_height} from './helper/util.js'
import {bubble_sort, insertion_sort, selection_sort} from './helper/sortFunctions.js'

window.addEventListener("load", (e) => {
  let container = document.querySelector(".container");
  let add_element_btn = document.querySelector(".new_element");
  let gen_element_btn = document.querySelector(".generate_element");
  let clear_btn = document.querySelector(".clear");
  let sort_btn = document.querySelector(".sort_btn");

  gen_element_btn.addEventListener("click", (e) => {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push(Math.floor(Math.random() * 1000)); // Generates a random number between 0 (inclusive) and 1 (exclusive)
    }

    container.replaceChildren(); // Removes old values

    numbers.map((element) => {
      let new_element = document.createElement("div");
      new_element.innerHTML = element;
      new_element.style.height = `${calculate_height(element)}px`;
      new_element.classList.add("bar");
      container.appendChild(new_element);
    });
  });

  add_element_btn.addEventListener("click", (e) => {
    try {
      let input = document.querySelector(".number_input");
      let input_val = parseInt(input.value);

      if (isNaN(input_val)) throw new Error("Enter numeric value");
      if (input_val < 10) throw new Error("Enter number greater than 10");
      if (input_val > 1000) throw new Error("Enter number less than 1000");

      let new_element = document.createElement("div");
      new_element.innerHTML = input_val;
      new_element.style.height = `${calculate_height(input_val)}px`;
      new_element.classList.add("bar");
      container.appendChild(new_element);
      input.value = "";
      input.focus();
    } catch (error) {
      alert(error);
    }
  });

  sort_btn.addEventListener("click", (e) => {
    if (!container.children.length == 0) {
      let sort_option = parseInt(document.querySelector(".sort_option").value)

      let bars = container.children;
      
      switch (sort_option) {
        case 0:
          alert("Select a method to sort.");
          break;
        case 1:
          bubble_sort(bars);
          break;
        case 2:
          selection_sort(bars);
          break;
        case 3:
          insertion_sort(bars);
          break;
      
        default:
          break;
      }

    } else {
      alert("Nothing to sort...");
    }
  });

  clear_btn.addEventListener("click", (e) => container.replaceChildren());
});








// console.log('64' > '240') //True??
