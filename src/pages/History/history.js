document.addEventListener('DOMContentLoaded', () => {
    const donationData = [
        {
            activity: 'South East Ocean Plastic Cleaning',
            date: 'March 24, 2025',
            Organization: 'indah donation',
            amount: 'Rp102.000',
        },
        {
            activity: 'Beach Clean Up Bali',
            date: 'April 10, 2025',
            Organization: 'green peace',
            amount: 'Rp80.000',
        },
        {
            activity: 'Mangrove Planting',
            date: 'February 18, 2025',
            Organization: 'forest org',
            amount: 'Rp150.000',
        },
        {
            activity: 'River Plastic Trap',
            date: 'March 30, 2025',
            Organization: 'indah donation',
            amount: 'Rp60.000',
        },
    ];

    const tableBody = document.getElementById('donationTableBody');
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach((item, index) => {
            const row = `
        <tr class="border-b border-zinc-400">
          <td class="p-4">${index + 1}</td>
          <td class="p-4">${item.activity}</td>
          <td class="p-4">${item.date}</td>
          <td class="p-4">${item.Organization}</td>
          <td class="p-4">${item.amount}</td>
        </tr>
      `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    function filterTable() {
        const searchText = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        let filtered = donationData.filter(item => {
            // search by activity or organization
            return item.activity.toLowerCase().includes(searchText) || item.Organization.toLowerCase().includes(searchText);
        });

        // sort based on dropdown
        if (filterValue === 'amount') {
            filtered.sort((a, b) => {
                const amountA = parseInt(a.amount.replace(/[^\d]/g, ''));
                const amountB = parseInt(b.amount.replace(/[^\d]/g, ''));
                return amountB - amountA;
            });
        } else if (filterValue === 'organization') {
            filtered.sort((a, b) => a.Organization.localeCompare(b.Organization));
        } else if (filterValue === 'date') {
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        renderTable(filtered);
    }

    // Initial render
    renderTable(donationData);

    // Event listeners
    searchInput.addEventListener('input', filterTable);
    filterSelect.addEventListener('change', filterTable);
});
