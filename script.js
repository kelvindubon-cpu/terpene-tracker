// Load PapaParse from CDN
const papaScript = document.createElement('script');
papaScript.src = "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js";
document.head.appendChild(papaScript);

papaScript.onload = () => {
  fetch("data.csv")
    .then(response => response.text())
    .then(csv => {
      const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
      const data = parsed.data;

      const results = document.getElementById("results");
      const searchInput = document.getElementById("search");

      function display(items) {
        results.innerHTML = "";
        items.forEach(item => {
          results.innerHTML += `
            <div class="card">
              <h2>${item.Cultivator}</h2>
              <p>Split: ${item.Split}</p>
              <p>Terpenes:</p>
              <ul>
                <li>DT1: ${item.DT1}</li>
                <li>DT2: ${item.DT2}</li>
                <li>DT3: ${item.DT3}</li>
                <li>DT4: ${item.DT4}</li>
                <li>DT5: ${item.DT5}</li>
              </ul>
              <p>QR: <a href="${item.QR}" target="_blank">${item.QR}</a></p>
              <p>Ailments: ${item.Ailments}</p>
              <p>Best For: ${item.BestFor}</p>
              <p>Effects: ${item.Effects}</p>
              <p>Smell: ${item.Smell}</p>
              <p>Taste: ${item.Taste}</p>
              <p>Lineage: ${item.Lineage}</p>
            </div>
          `;
        });
      }

      searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = data.filter(item =>
          item.Cultivator.toLowerCase().includes(value)
        );
        display(filtered);
      });

      display(data);
    });
};
