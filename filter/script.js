document.getElementById('filterCityInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#cityTableBody tr');
    rows.forEach(row => {
      const city = row.cells[1].textContent.toLowerCase();
      row.style.display = city.includes(filter) ? '' : 'none';
    });
  });
  
  const originalOptions = Array.from(document.querySelectorAll('#citySelect option')).map(opt => opt.textContent);
  document.getElementById('selectFilterInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const select = document.getElementById('citySelect');
    select.innerHTML = '';
    const filtered = originalOptions.filter(city => city.toLowerCase().includes(filter));
    filtered.forEach(city => {
      const option = document.createElement('option');
      option.textContent = city;
      select.appendChild(option);
    });
    if (filter === '') {
      originalOptions.forEach(city => {
        const option = document.createElement('option');
        option.textContent = city;
        select.appendChild(option);
      });
    }
  });
  
  document.getElementById('cityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selected = document.getElementById('citySelect').value;
    console.log("Vybrané město:", selected);
    document.getElementById('resultMessage').textContent = `Vybral jste: ${selected}`;
  });
