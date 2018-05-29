const app = "I don't do much.";


const token = 'd9c416700898d0fed9d48beed4cf394990e7f147'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
