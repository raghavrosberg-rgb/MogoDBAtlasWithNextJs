
const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://mydotnetin_db_user:abcd1234@cluster0.kjhgitx.mongodb.net/?appName=Cluster0";
const uri = "mongodb+srv://mydotnetin_db_user:abcd1234@cluster0.kjhgitx.mongodb.net/admin?ssl=true&authSource=admin&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
