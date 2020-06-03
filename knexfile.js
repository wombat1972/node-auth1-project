module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/auth.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // <-- enforce foreign keys
      }
    },
    migrations: {
      directory: "./data/migrations" // <-- migrations directory
    }
  }
};
