function display(items) {
  results.innerHTML = "";
  items.forEach(item => {
    results.innerHTML += `
      <div class="card">
        <h2>${item.Strain || ""}</h2>
        <p>Cultivator: ${item.Cultivator || ""}</p>
        <p>Split: ${item.Split || ""}</p>
        <p>Terpenes:</p>
        <ul>
          <li>DT1: ${item.DT1 || ""}</li>
          <li>DT2: ${item.DT2 || ""}</li>
          <li>DT3: ${item.DT3 || ""}</li>
          <li>DT4: ${item.DT4 || ""}</li>
          <li>DT5: ${item.DT5 || ""}</li>
        </ul>
        <p>QR: ${item.QR ? `<a href="${item.QR}" target="_blank">${item.QR}</a>` : ""}</p>
        <p>Ailments: ${item.Ailments || ""}</p>
        <p>Best For: ${item.BestFor || ""}</p>
        <p>Effects: ${item.Effects || ""}</p>
        <p>Smell: ${item.Smell || ""}</p>
        <p>Taste: ${item.Taste || ""}</p>
        <p>Lineage: ${item.Lineage || ""}</p>
      </div>
    `;
  });
}
