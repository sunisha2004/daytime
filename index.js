function populateDropdown(elementId, start, end) {
    const dropdown = document.getElementById(elementId);
    for (let i = start; i <= end; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i.toString().padStart(2, '0');

        dropdown.appendChild(option);
    }
}

populateDropdown("hourDropdown", 0, 23);        
populateDropdown("minuteDropdown", 0, 59);      
populateDropdown("dayDropdown", 1, 31);       
populateDropdown("monthDropdown", 1, 12);      
populateDropdown("yearDropdown", 2020, 2030); 

function updateOutput() {
    const hour = document.getElementById("hourDropdown").value;
    const minute = document.getElementById("minuteDropdown").value;
    const day = document.getElementById("dayDropdown").value;
    const month = document.getElementById("monthDropdown").value;
    const year = document.getElementById("yearDropdown").value;

    document.getElementById("output").textContent = 
        `${day}/${month}/${year} ${hour}:${minute}`;
}

updateOutput();


