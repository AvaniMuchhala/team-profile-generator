function generateCards(teamRoster) {
    // Map through each element in teamRoster, generate HTML for that element, store in cardsHTML
    const cardsHTML = teamRoster.map(employee => {
        const employeeType = employee.constructor.name; // gets type of object
        const {name, id, email, _} = employee;
        let uniqueProp;
        let uniqueValue;
        let iconClass;
        // Depending on which type current employee is, 
        // set uniqueProp and uniqueValue as last prop/value in their constructor
        if (employeeType === "Manager") {
            uniqueProp = "Office Number";
            uniqueValue = employee.getOfficeNumber();
            iconClass = "fa-solid fa-people-roof";
        } else if (employeeType === "Engineer") {
            uniqueProp = "GitHub";
            //uniqueValue = employee.getGithub();
            uniqueValue = `<a href="https://github.com/${employee.getGithub()}" target="_blank"
            style="text-decoration: none;">${employee.getGithub()}</a>`;
            iconClass = "fa-solid fa-laptop-code";
        } else if (employeeType === "Intern") {
            uniqueProp = "School";
            uniqueValue = employee.getSchool();
            iconClass = "fa-solid fa-graduation-cap";
        }
        
        // Return HTML to generate card for that employee
        return `<div class="col d-flex justify-content-center mt-4">
    <div class="card shadow "style="width: 20rem;">
        <div class="card-header bg-primary text-white">
            <h3 class="fs-2">${name}</h3>
            <h4><i class="${iconClass}"></i> ${employeeType}</h4>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group py-3">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}"
                        style="text-decoration: none;">${email}</a></li>
                <li class="list-group-item">${uniqueProp}: ${uniqueValue}</li>
            </ul>
        </div>
    </div>
</div>`
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
        <header class="bg-danger text-white text-center p-4">
            <h1 class="fw-bolder" style="font-size: 3rem;">My Team</h1>
        </header>
    
        <main class="d-flex justify-content-center align-items-center">
            
            <section class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-flex flex-wrap justify-content-center align-items-center w-75">
            ${generateCards(teamRoster)}
            </section>
        
    </main>
    <script src="https://kit.fontawesome.com/9f96f948a1.js" crossorigin="anonymous"></script>
</body>

</html>`;
}

module.exports = generateHTML;