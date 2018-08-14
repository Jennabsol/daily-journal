const dataManager = require("./DataManager")
const eachEntry = require("./entry")

let entryDiv = document.querySelector("#entryDiv")


function listEntry() {
    entryDiv.innerHTML = ""
    let data = dataManager.getJournalEntry()
        .then(res => {
            res.forEach(entry => {
                let entryComponent = eachEntry(entry.title, entry.content, entry.id)
                writeToDom(entryComponent)
            });
        })
console.log(data)
}


function writeToDom(currentEntry) {
    entryDiv.innerHTML += currentEntry
}

module.exports = listEntry