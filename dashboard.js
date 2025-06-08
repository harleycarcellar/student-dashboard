import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { app } from "../../firebase/firebase-config.js";

const db = getFirestore(app);
const form = document.getElementById("entryForm");
const input = document.getElementById("entryInput");
const list = document.getElementById("entriesList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const entry = input.value.trim();
  if (!entry) return;

  await addDoc(collection(db, "entries"), { content: entry });
  input.value = "";
  loadEntries();
});

async function loadEntries() {
  list.innerHTML = "";
  const snapshot = await getDocs(collection(db, "entries"));
  snapshot.forEach((doc) => {
    const li = document.createElement("li");
    li.textContent = doc.data().content;
    list.appendChild(li);
  });
}

loadEntries();
