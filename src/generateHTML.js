function generateCards(teamRoster) {
    // Map through each element in teamRoster, generate HTML for that element, store in cardsHTML
    const cardsHTML = teamRoster.map(employee => {
        const employeeType = employee.constructor.name; // gets type of object
        const {name, id, email, _} = employee;
        let uniqueProp;
        let uniqueValue;
        // Depending on which type current employee is, 
        // set uniqueProp and uniqueValue as last prop/value in their constructor
        if (employeeType === "Manager") {
            uniqueProp = "Office Number";
            uniqueValue = employee.getOfficeNumber();
        } else if (employeeType === "Engineer") {
            uniqueProp = "Github";
            uniqueValue = employee.getGithub();
        } else if (employeeType === "Intern") {
            uniqueProp = "School";
            uniqueValue = employee.getSchool();
        }
        
        // Return HTML to generate card for that employee
        return `<div class="card shadow" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h3>${name}</h3>
        <h4>${employeeType}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">${uniqueProp}: ${uniqueValue}</li>
        </ul>
    </div>
</div>`;
    });

    // Return result of joining each employee card HTML by a new line 
    return cardsHTML.join("\n");
}

function generateHTML(teamRoster) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <title>My Team Profile</title>
    </head>
    
    <body>
        <header class="bg-danger text-white text-center p-5">
            <h1>My Team</h1>
        </header>    
    
        <main class="d-flex justify-content-center align-items-center">
            ${generateCards(teamRoster)}
        </main>
    </body>
    </html>`;
}

module.exports = generateHTML;