const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genra: String,
    description: String,
    price: Number,
    image: String
});

const Book = mongoose.model('Book', bookSchema);

//Function to send initial data into databasedes
const seedDatabase = async () => {
    try{
        await Book.deleteMany(); // Clear existing data
        const books =
        [
           { 
            title: "Janga Bahadur ko Europe Yatra",
            author: "Suman Pokhrel",
            genra: "Novel", 
            description: "A captivating novel that takes you through the journey of Janga Bahadur in Europe.",
            price: 500, 
            image: "https://example.com/janga-bahadur.jpg"
           },
           {
            title: "Yogmaya",
            author: "Parijat Ghimire",
            genra: "History",
            description: "An insightful book on the life and contributions of Yogmaya.",
            price: 600,
            image: "https://example.com/yogmaya.jpg"
           },
           {
            title: "Love is the Only Solution",
            author: "Supreme Master Ching Hai",
            genra: "Spiritual & Animal Liberation",
            description: "A spiritual guide that emphasizes love as the ultimate solution to all problems.",
            price: 700,           
            image: "https://example.com/love-is-the-only-solution.jpg"
           },
           {
            title: "Microsoft dekhi Bahun dada Samma",
            author: "Jhon Wood",
            genra: "Autobiography",
            description: "An autobiography that chronicles the journey from Microsoft to personal achievements.",
            price: 800, 
            image: "https://example.com/microsoft-dekhi-bahun-dada.jpg"
           },
           {
            title: "Sumnima",
            author: "BP Koirala",
            genra: " Novel",
            description: "A novel that explores love story of a Brahmin and Limbu woman",
            price: 900,
            image: "https://example.com/sumnima.jpg"

           }
           
        ];
        await Book.insertMany(books);
        console.log("Database seeding is sucessful");
    }catch (error){
        console.error('Error seeding database:', errror);
    }
};
//See the database on server start
seedDatabase();

//Define API endpoints for fetching all books
app.get('/api/books', async (req, res)=>{
    try{
        const Allbooks = await Book.find(); //Fetch all books from the database
        res.json(Allbooks); //Send the books as a JSON response
    }catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(port, () =>{
    console.log (`Server is running on port ${port}`);
})
