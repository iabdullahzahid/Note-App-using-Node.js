const fs= require('fs')
const chalk=require('chalk')

const { title } = require('process')



const addNote= function (title,body){

const notes=  loadNotes()
//const duplicatearr= notes.filter((note)=> note.title===title)
// const duplicatearr= notes.filter(function(note){

//     return note.title===title

// })
// . filter will cause lot of iteration even after finding
// first  duplicate it will still travser whole array.
// we r interested in first duplciate only

const duplicatenpte= notes.find((note)=> note.title===title)// .find will help to return the very first occurence of duplicate elemeent returning its value.


if(duplicatenpte === undefined) // if there is no duplicate node
{
    
notes.push({
title: title, 
body:body

           }

)
saveNote(notes)
console.log(chalk.green.inverse('Note Added'))

}

else{
    console.log(chalk.red.inverse('Note Title already taken'))
}


}

const saveNote= function(notes)
{
dataJSON= JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes= function(){

    try{
    const databuffer= fs.readFileSync('notes.json')
    const dataJSON= databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e)
    {
return []

    }


}

const removeNote= function(title){

const notes= loadNotes()

const filteredarray= notes.filter((note)=>note.title!=title)
// const filteredarray= notes.filter(function(note){

//     return note.title!=title

// })


if (notes.length===filteredarray.length){

    console.log(chalk.red.inverse('Note not removed'))
}
else
{
    
    saveNote(filteredarray)
    console.log(chalk.green.inverse('Note removed'))

}



}


const listNotes= function()
{

    const list= loadNotes()
    console.log(chalk.white.inverse('Your List'))
    list.forEach((element) => console.log(element.title))
        


}


const readNote= function(title)
{

const notes= loadNotes()
const note= notes.find((note) => note.title===title)

if(note != undefined)
{
console.log('Title: ' +chalk.green.inverse(note.title)+ ' Body: '+chalk.green.inverse(note.body))


}
else{console.log(chalk.red.inverse('Not Found'))}



}


 module.exports={

    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
 }