let a = confirm=(prompt("Ismingizni kiriting"));
let b = document.createElement("div");
b.textContent = `${a}`;
document.body.appendChild(b);
b.classList.add("a");