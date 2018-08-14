const FormManager = require("./JournalForm")
const dataManager = require("./DataManager")
const listEntry = require("./entryList")

// Render the journal entry form
document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()

// Add an event listener for the save button
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }

    // POST to API
    dataManager.saveJournalEntry(newEntry).then(() => {
        // Clear the form fields
        FormManager.clearForm()
        listEntry()

        // Put HTML representation on the DOM
    })

})

document.querySelector("#entryDiv").addEventListener("click", e => {
    if (e.target.id.startsWith("delete")) {
        const id = parseInt(e.target.id.split("!")[1])
        dataManager.deleteJournalEntry(id).then(listEntry)
    } else if (e.target.id.startsWith("edit")) {
        const id = parseInt(e.target.id.split("!")[1])
        dataManager.getSingleJournalEntry(id)
            .then(entry => {
                document.querySelector("#entryTitle").value = entry.title
                document.querySelector("#entryContent").value = entry.content
            })
    }

})
listEntry()
// console.log(dataManager.getJournalEntry())