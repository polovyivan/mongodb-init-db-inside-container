// Create user
dbAdmin = db.getSiblingDB("admin");
dbAdmin.createUser({
  user: "customerUser",
  pwd: "password",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
  mechanisms: ["SCRAM-SHA-1"],
});

// Authenticate user
dbAdmin.auth({
  user: "customerUser",
  pwd: "password",
  mechanisms: ["SCRAM-SHA-1"],
  digestPassword: true,
});

// Create DB and collection
db = new Mongo().getDB("customer");
db.createCollection("customer_transaction", { capped: false });
