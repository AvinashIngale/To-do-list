let userCount = 0;

function addUser() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name !== '') {
        userCount++;

        const tableBody = document.getElementById('userTableBody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${userCount}</td>
            <td>${name}</td>
            <td>
                <button class="edit-btn" onclick="editUser(this)">✏️</button>
                <button class="delete-btn" onclick="deleteUser(this)">🗑️</button>
            </td>`;

        tableBody.appendChild(newRow);
        nameInput.value = '';
    }
}

function editUser(button) {
    const row = button.parentNode.parentNode;
    const nameCell = row.cells[1];
    const newName = prompt('Edit Name:', nameCell.textContent);

    if (newName !== null && newName.trim() !== '') {
        nameCell.textContent = newName.trim();
    }
}

function deleteUser(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Update the numbering
    const rows = document.querySelectorAll('#userTableBody tr');
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });

    userCount--;
}