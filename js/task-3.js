const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const words = input.value.split(" ");
  const filtered = words.filter(word => word !== "");
  const cleanedValue = filtered.join(" ");

  output.textContent = cleanedValue !== "" ? cleanedValue : "Anonymous";
});
