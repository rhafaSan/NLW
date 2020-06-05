//Import DB
const sqlite3 = require('sqlite3').verbose()

//start db's object
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db
//Using db's object


// db.serialize( ()=> {
//   //Create table
// //   db.run(` 
// //     CREATE TABLE IF NOT EXISTS places (
// //       id INTEGER PRIMARY KEY AUTOINCREMENT,
// //       image TEXT,
// //       name TEXT, 
// //       addres TEXT,
// //       addres2 TEXT,
// //       state TEXT,
// //       city TEXT,
// //       items TEXT
// //     );
// //   `)

// //   //Insert data

// //   const query = `
// //   INSERT INTO places (
// //     image,
// //     name,
// //     addres,
// //     addres2,
// //     state,
// //     city,
// //     items
// //   ) VALUES (?,?,?,?,?,?,?);
// // `
// //     const values = [
// //       "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
// //       "PaperSider",
// //       "Guilherme Gembala, Jardim América",
// //       "Nº 260",
// //       "Santa Catarina",
// //       "Rio do Sul",
// //       "Resíduos Eletrônicos, Lâmpadas"
// //     ]
// //     function afterInsertData(err){
// //       if(err){
// //         return console.log(err)
// //       }
      
// //       console.log("Cadastrado com sucesso")
// //       console.log(this)
// //     }
// //   db.run(query,values, afterInsertData)

//   //Show data

//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //   if(err){
//     //     return console.log(err)
//     //   }
//     //   console.group('Aqui estão seus registros')
//     //   console.log(rows)
//     // })

//   //Delete data

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //   if(err){
    //     return console.log(err)
    //   }

    //   console.log("Registro deletado com sucesso")

    // })

// }) 


