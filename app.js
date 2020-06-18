
const yargs=require('yargs')
const chalk=require('chalk')
const notes= require('./notes.js')





yargs.command({

    command: 'add',
    describe: 'adding note',
    builder: {

        title: {
            describe: 'title'
        },
        body:{
            describe:'body'
        }

    },


    handler(argv)  {

        notes.addNote(argv.title,argv.body)


    }


})


yargs.command({

    command: 'remove',
    builder: {
         title:{

         demandOption: true,
         type: 'string' 


         }



    },

    handler(argv)  {

        notes.removeNote(argv.title)

    }


})

yargs.command({

    command: 'list',
    describe: 'Listing note',
    handler(argv)  {
     notes.listNotes()

    }


})

yargs.command({

    command: 'read',
    describe: 'Reading note',
    builder: {

        title:{
            demandOption: true,
            type: 'string'
        }

    },

    handler(argv)  {

     notes.readNote(argv.title)

    }


})

yargs.parse()
//console.log(yargs.argv)
