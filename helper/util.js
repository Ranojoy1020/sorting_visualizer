const sleep = async (ms = 100) =>
  new Promise(resolve => setTimeout(resolve, ms));

const calculate_height = input_val =>
  (input_val / document.querySelector(".container").offsetHeight) * 100;

// Helper function to swap two nodes
const swapNodes = (node1, node2) => {
  const temp = document.createComment("");
  node2.replaceWith(temp);
  node1.replaceWith(node2);
  temp.replaceWith(node1);
}

export { sleep, calculate_height, swapNodes };