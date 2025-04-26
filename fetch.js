searchForm.onsubmit = async e => {
    const q = pokemonInput.value.trim().toLowerCase();
    if (!q) return errorMsg.textContent = "Enter a name!";
    errorMsg.textContent = result.innerHTML = "";
    try {
      const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
      if (!r.ok) throw "Not found!";
      const d = await r.json();
      result.innerHTML = `
        <h2>${d.name}</h2>
        <img src="${d.sprites.front_default}">
        <p>Height: ${d.height}</p>
        <p>Type: ${d.types.map(t => t.type.name).join(", ")}</p>
      `;
    } catch (err) {
      errorMsg.textContent = err;
    }
  };
  
