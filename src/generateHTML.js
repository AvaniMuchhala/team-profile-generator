function generateCard(teamRoster){
    const employee1 = teamRoster[0];
    const employeeType = employee1.constructor.name;
    if (employeeType === "Manager") {
        var {name, id, email, officeNumber} = employee1;
        console.log(`${name}, ${id}, ${email}, ${employee1.getOfficeNumber()}`);
    }
    return `<div class="card shadow" style="width: 18rem;">
    <div class="card-header bg-primary text-white">
        <h3>${name}</h3>
        <h4>${employeeType}</h4>
    </div>
    <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: ${email}</li>
            <li class="list-group-item">Office number: ${employee1.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`;
}

function generateHTML(teamRoster) {
    generateCard(teamRoster);
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
            ${generateCard(teamRoster)}
        </main>
    </body>
    </html>`;
}

module.exports = generateHTML;