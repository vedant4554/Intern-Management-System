document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const rollno = document.getElementById('rollno').value;
    const course = document.getElementById('course').value;
    const duration = document.getElementById('duration').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    const student = {
        name,
        rollno,
        course,
        duration,
        address,
        contact,
        email
    };

    addStudentToTable(student);
    document.getElementById('studentForm').reset();
});

function addStudentToTable(student) {
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    Object.values(student).forEach((value, index) => {
        const cell = row.insertCell(index);
        cell.textContent = value;
    });

    const actionsCell = row.insertCell(Object.values(student).length);
    actionsCell.innerHTML = `
        <button class="edit" onclick="editStudent(this)">Edit</button>
        <button class="delete" onclick="deleteStudent(this)">Delete</button>
    `;
}

function editStudent(button) {
    const row = button.closest('tr');
    const cells = row.getElementsByTagName('td');

    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('rollno').value = cells[1].textContent;
    document.getElementById('course').value = cells[2].textContent;
    document.getElementById('duration').value = cells[3].textContent;
    document.getElementById('address').value = cells[4].textContent;
    document.getElementById('contact').value = cells[5].textContent;
    document.getElementById('email').value = cells[6].textContent;

    row.remove();
}

function deleteStudent(button) {
    const row = button.closest('tr');
    row.remove();
}
