fetch("data.csv")
  .then(response => response.text())
  .then(text => {
    const rows = text.split("\n").slice(1);
    const data = rows.map(row => {
      const columns = row.split(",");
      return {
        strain: columns[0],
        date: columns[1],
        myrcene: columns[2],
        limonene: columns[3],
        caryophyllene: columns[4]
      };
    });

    const results = document.getElementById("results");
    const searchInput = document.getElementById("search");

    function display(items) {
      results.innerHTML = "";
      items.forEach(item => {
        results.innerHTML += `
          <div class="card">
            <h2>${item.strain}</h2>
            <p>Date: ${item.date}</p>
            <p>Myrcene: ${item.myrcene}%</p>
            <p>Limonene: ${item.limonene}%</p>
            <p>Caryophyllene: ${item.caryophyllene}%</p>
          </div>
        `;
      });
    }

    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase();
      const filtered = data.filter(item =>
        item.strain.toLowerCase().includes(value)
      );
      display(filtered);
    });

    display(data);
  });