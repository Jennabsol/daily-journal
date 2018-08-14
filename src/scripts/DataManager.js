const dataManager = Object.create(null, {
    saveJournalEntry: {
        value: entry => {
            return fetch("http://localhost:3000/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            }).then(response => response.json());
        }
    },
    getJournalEntry: {
        value: () => {
            return fetch("http://localhost:3000/entries")
                .then(res => res.json())
                .then(response => {
                    response.sort(function (a, b) {
                        return `${b.date}` - `${a.date}`;
                    });
                    return response;
                });
        }
    },
    getSingleJournalEntry: {
        value: (entryId) => {
            return fetch(`http://localhost:3000/entries/${entryId}`)
                .then(res => res.json())
        }
    },
    deleteJournalEntry: {
        value: entryId => {
            return fetch(`http://localhost:3000/entries/${entryId}`, {
                method: "DELETE"
            }).then(response => response.json());
        }
    },
    editJournalEntry: {
        value: (entry, entryId) => {
            return fetch(`http://localhost:3000/entries/${entryId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            }).then(response => response.json());
        }
    }
});

module.exports = dataManager;