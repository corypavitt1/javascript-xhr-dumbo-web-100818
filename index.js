function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories); //added event listener to run the following funtion below when this function runs.
  req.open("GET", "https://api.github.com/users/octocat/repos");
  req.send();
}



function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => "<li>" + r.name + "</li>")
    .join("")}</ul>`;
  document.getElementById("repositories").innerHTML = repoList;
}
