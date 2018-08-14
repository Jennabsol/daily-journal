const eachEntry = (title, content, id)=>{
    return `
    <h3>${title}</h3>
    <p>${content}</p>
    <button id="edit!${id}"type="button">Edit</button>
    <button id="delete!${id}"type="button">Delete</button>`
}
module.exports = eachEntry