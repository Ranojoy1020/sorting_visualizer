import { sleep, swapNodes } from "./util.js";

// Bubble Sort
async function bubble_sort(array) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (parseInt(array[j].innerHTML) > parseInt(array[j + 1].innerHTML)) {
        array[j].classList.add("bar-active");
        array[j + 1].classList.add("bar-active");

        await sleep();
        swapNodes(array[j], array[j + 1]);
        await sleep();

        array[j].classList.remove("bar-active");
        array[j + 1].classList.remove("bar-active");
      }
    }
  }
}

// Selection Sort
async function selection_sort(array) {
  let n = array.length;
  let min_idx = 0;
  for (let i = 0; i < n - 1; i++) {
    min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (parseInt(array[j].innerHTML) < parseInt(array[min_idx].innerHTML)) {
        array[j].classList.add("bar-active");
        array[min_idx].classList.add("bar-active");
        await sleep();
        swapNodes(array[j], array[min_idx]);
        await sleep();
      }
      array[j].classList.remove("bar-active");
      array[min_idx].classList.remove("bar-active");
    }
  }
}

// Insertion Sort
async function insertion_sort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let key = parseInt(array[i].innerHTML);
    let j = i - 1;
    while (j >= 0 && parseInt(array[j].innerHTML) > key) {
      array[j].classList.add("bar-active");
      array[j + 1].classList.add("bar-active");
      await sleep();
      swapNodes(array[j], array[j + 1]);
      await sleep();
      array[j].classList.remove("bar-active");
      array[j + 1].classList.remove("bar-active");
      j--;
    }
  }
}

export { bubble_sort, selection_sort, insertion_sort };
