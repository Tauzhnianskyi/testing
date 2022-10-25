const e={headers:{Authorization:"Bearer XJlq9OFMcHAy8pAQK7xj"}};document.querySelector(".heroList");fetch("https://the-one-api.dev/v2/character?limit=10&page=1",e).then((e=>{if(!e.ok)throw new Error("fail");return e.json()})).then(console.log);
//# sourceMappingURL=index.3ccdfa1a.js.map
