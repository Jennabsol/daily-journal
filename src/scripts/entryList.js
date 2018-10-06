const dataManager = require("./DataManager")
const eachEntry = require("./entry")

let entryDiv = document.querySelector("#entryDiv")


function listEntry() {
    entryDiv.innerHTML = ""
dataManager.getJournalEntry()
        .then(res => {
            res.forEach(entry => {
                let entryComponent = eachEntry(entry.title, entry.content, entry.id)
                writeToDom(entryComponent)
            });
        })

}


function writeToDom(currentEntry) {
    entryDiv.innerHTML += currentEntry
}

module.exports = listEntry