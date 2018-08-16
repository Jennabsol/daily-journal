const FormManager = require("./JournalForm")
const dataManager = require("./DataManager")
const listEntry = require("./entryList")



document.querySelector("#journalForm").innerHTML = FormManager.renderEntryForm()
const editMode = {
    "enabled": false,
    "entryId": null
}

document.querySelector("#saveEntryButton").addEventListener("click", () => {

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date.now()
    }
    if (editMode.enabled === false) {

        dataManager.saveJournalEntry(newEntry).then(() => {
            FormManager.clearForm()
            listEntry()
        })
    } else {
        dataManager.editJournalEntry(newEntry, editMode.entryId).then(() => {
            FormManager.clearForm()
            editMode.enabled = false
            editMode.entryId = null
            listEntry()
        })
    }
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
                editMode.enabled = true
                editMode.entryId = id

            })
    }

})
listEntry()