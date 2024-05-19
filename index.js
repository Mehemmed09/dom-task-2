let employeeList = [];

        function addEmployee() {
            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const age = document.getElementById('age').value;
            const nationality = document.getElementById('nationality').value;
            const position = document.getElementById('position').value;
            const experience = document.getElementById('experience').value;

            const employee = {
                name,
                surname,
                age,
                nationality,
                position,
                experience
            };

            employeeList.push(employee);
            renderTable();
            document.getElementById('registerForm').reset();
        }

        function renderTable() {
            const tableBody = document.getElementById('employeeTableBody');
            tableBody.innerHTML = '';

            employeeList.forEach((employee, index) => {
                const row = document.createElement('tr');

                Object.values(employee).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                const editCell = document.createElement('td');
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = () => editEmployee(index);
                editCell.appendChild(editButton);
                row.appendChild(editCell);

                const deleteCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => deleteEmployee(index);
                deleteCell.appendChild(deleteButton);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            });
        }

        function editEmployee(index) {
            const employee = employeeList[index];

            document.getElementById('name').value = employee.name;
            document.getElementById('surname').value = employee.surname;
            document.getElementById('age').value = employee.age;
            document.getElementById('nationality').value = employee.nationality;
            document.getElementById('position').value = employee.position;
            document.getElementById('experience').value = employee.experience;

            deleteEmployee(index);
        }

        function deleteEmployee(index) {
            employeeList.splice(index, 1);
            renderTable();
        }