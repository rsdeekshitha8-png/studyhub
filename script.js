
const form = document.getElementById("uploadForm");
const status = document.getElementById("status");
const search = document.getElementById("search");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const file = document.getElementById("notes").files[0];
  const subject = document.getElementById("subject").value.trim();
  const semester = document.getElementById("semester").value;

  if (!file || !subject || !semester) {
    status.textContent = "Please complete all fields.";
    return;
  }

  const allowed = file.type.startsWith("image/") ||
                  file.type === "application/pdf";

  if (!allowed) {
    status.textContent = "Please select an image or PDF.";
    return;
  }

  status.textContent =
    "Notes selected successfully! AI slide conversion will be added next.";
});

search.addEventListener("input", function () {
  const query = search.value.toLowerCase();

  document.querySelectorAll(".card").forEach(function (card) {
    card.style.display =
      card.textContent.toLowerCase().includes(query) ? "" : "none";
  });
});
