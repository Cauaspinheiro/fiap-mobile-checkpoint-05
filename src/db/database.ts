const sqlite3 = require("sqlite3").verbose();

export const db = new sqlite3.Database("lista-tarefas.db");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY, tarefa TEXT)");
});

db.run(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT
  )
`);
