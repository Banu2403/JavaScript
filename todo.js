document.querySelector(".add-button").addEventListener("click", () => {
  const a = prompt("Todo elave et:");

  if (a && a.trim() !== "") {
    const b = document.createElement("li");
    b.textContent = a;
    b.className = "todo-item";

    const c = document.querySelector(".todo-list");
    c.appendChild(b);
  }
});
