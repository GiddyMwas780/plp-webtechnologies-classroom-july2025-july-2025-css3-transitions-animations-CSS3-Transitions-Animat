// PART 2: Functions, Parameters & Return Values
function calculateArea(width, height) {
  return width * height;
}

document.getElementById("calcBtn").addEventListener("click", () => {
  const width = parseInt(document.getElementById("width").value);
  const height = parseInt(document.getElementById("height").value);

  if (isNaN(width) || isNaN(height)) {
    document.getElementById("result").textContent = "⚠️ Please enter valid numbers.";
  } else {
    let area = calculateArea(width, height);
    document.getElementById("result").textContent = `✅ The area is: ${area}`;
  }
});

// Demonstrating scope
let globalMessage = "This is from GLOBAL scope!";
function showScope() {
  let localMessage = "This is from LOCAL scope!";
  console.log(globalMessage);
  console.log(localMessage);
}
showScope();

// PART 3: Box Animation
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Modal
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.classList.add("show");
});
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("show");
});

// Loader
const loader = document.getElementById("loader");
document.getElementById("startLoading").addEventListener("click", () => {
  loader.style.display = "block";
});
document.getElementById("stopLoading").addEventListener("click", () => {
  loader.style.display = "none";
});
