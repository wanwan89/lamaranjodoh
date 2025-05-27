const names = ["Dian", "Rizky", "Salsa", "Bimo", "Tiara", "Fajar", "Lala", "Andi"];
const places = ["di perpustakaan", "di konser", "di minimarket", "di stasiun", "di kampus", "di taman kota", "di cafe", "di acara pernikahan teman"];

function revealMatch() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  if (!name || !dob) {
    document.getElementById('result').innerText = "Isi nama dan tanggal lahir dulu dong!";
    return;
  }

  const jodoh = names[Math.floor(Math.random() * names.length)];
  const tempat = places[Math.floor(Math.random() * places.length)];

  document.getElementById('result').innerText =
    `${name}, jodohmu adalah ${jodoh} dan kalian akan bertemu ${tempat}. Siap-siap ya!`;
}