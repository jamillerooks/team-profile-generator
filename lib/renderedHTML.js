function renderedHTML(arr) {
	//grab the Array being passed into here, and loop through it, checking the getRole() of each index to determine the template that each employee will use
	//then returns a big string that has all of the HTML done
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>Document</title>
        <div class="jumbotron jumbotron-fluid">
            <div class="container p-3 mb-2 bg-info text-white">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
          <div class="container">
            <div class="row">
                ${cardGenerator(arr)}
            </div>
    </head>
    <body>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

function cardGenerator(arr) {
	let cardTemplates = '';
	for (i = 0; i < arr.length; i++) {
		if (arr[i].getRole() === 'Manager') {
			cardTemplates += `
            <div class="card col p-3 mb-2 bg-secondary text-gray" style="width: 18rem; margin: 10px;">
                <div class="card-body card header">
                  <h5 class="card-title ">${arr[i].name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${arr[i].id}</li>
                    <li class="list-group-item">Email: <a href=mailto:${arr[i].email}>${arr[i].email}</a></li>
                    <li class="list-group-item">Office: ${arr[i].officeNumber}</li>
                </ul>
            </div>`;
		    }else if(arr[i].getRole() == 'Engineer'){
         cardTemplates +=`
           <div class="card col p-3 mb-2 bg-secondary text-gray" style="width: 18rem; margin: 10px;">
                <div class="card-body card header">
                  <h5 class="card-title ">Name</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID:  ${arr[i].id}</li>
                    <li class="list-group-item">Email: <a href=mailto:${arr[i].email}>${arr[i].email}</a></li>
                    <li class="list-group-item"> GitHub : <a href = '${arr[i].github}'></a></li>
                </ul>
            </div>
             `
        }else if (arr[i].getRole() == 'Intern'){
          cardTemplates +=`
          <div class="card col p-3 mb-2 bg-secondary text-gray" style="width: 18rem; margin: 10px;">
                <div class="card-body card header">
                  <h5 class="card-title ">Name</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${arr[i].id}</li>
                    <li class="list-group-item">Email: <a href=mailto:${arr[i].email}>${arr[i].email}</a></li>
                    <li class="list-group-item"> School: ${arr[i].school}</li>
                </ul>
            </div>
            `
    }
	}
	return cardTemplates;
}
module.exports = renderedHTML;
