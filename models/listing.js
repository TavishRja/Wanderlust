const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review =require("./review.js");


const listingSchema = new Schema({
    title :{
        type: String,
        required :true,
    },
    description :String,
    // image :{ 
    //     type:String,
    //     default:"https://unsplash.com/photos/photo-of-pine-trees-igX2deuD9lc",
    //     set:(v) => v=== ""? "https://unsplash.com/photos/photo-of-pine-trees-igX2deuD9lc" :v,
    image : { 
    filename: String,
    url: {
        type: String,
        default: "https://images.pexels.com/photos/17644421/pexels-photo-17644421/free-photo-of-seagulls-flying-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        set : (v) => v === "" ? "https://images.pexels.com/photos/17644421/pexels-photo-17644421/free-photo-of-seagulls-flying-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1": v,
    },
  
    },
    price : Number,
    location:String,
    country : String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref : "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async(listing) =>{
    if(listing) {
        await Review.deleteMany({_id:{$in: listing.review}});
    }
});

const Listing = mongoose.model("Listing" , listingSchema);
module.exports = Listing;