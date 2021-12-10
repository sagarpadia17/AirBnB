import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
               <p>62 stays - 26 November to 30 November</p>
               <h1>Stays Nearby</h1>
               <Button variant="outlined">Cancellation Flexibility</Button>
               <Button variant="outlined">Type of Place</Button>
               <Button variant="outlined">Price</Button>
               <Button variant="outlined">Rooms and Beds</Button>
               <Button variant="outlined">More Filters</Button>
            </div>  
            <SearchResult 
                img="https://clavertonhotel.co.uk/wp-content/uploads/2015/10/King-Size-Four-Poster-1000x664.jpg"
                location="London"
                title="Hotel Bayern"
                description="Our king size four poster provides views over landscaped gardens. It has a seating area, ample storage, digital safe and mini fridge."
                star={4.6}
                price="£30/Night"
                total="£117 total"
            />
            <SearchResult 
                img="https://www.textspoton.com/wp-content/uploads/2020/08/paul-postema-VoEocAfaWG8-unsplash-1024x682.jpg"
                location="StratFord"
                title="Hotel Madrid"
                description="I also have a modern work area with free basic internet access and a comfortable armchair to reflect on. And fresh fruit, mineral water and coffee and tea facilities provide you with energy."
                star={4.0}
                price="£20/Night"
                total="£79 total"
            />
            <SearchResult 
                img="https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=20&m=627892060&s=612x612&w=0&h=k6QY-qWNlFbvYhas82e_MoSXceozjrhhgp-krujsoDw="
                location="Croydon"
                title="Hotel Barcelona"
                description="Our Deluxe Twin/Large Double also provides views over landscaped gardens. It has a seating area, digital safe and mini fridge. This room can be configured with either 2 single beds or zip and linked to provide a large double bed."
                star={4.95}
                price="£50/Night"
                total="£167 total"
            />
            <SearchResult 
                img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/882f1a24950595.5633cc98a173c.jpg"
                location="Whitefield"
                title="Hotel Munechin"
                description="Please come in. I am thrilled to have you as my guest!"
                star={4.35}
                price="£40/Night"
                total="£157 total"
            />  
            <SearchResult 
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaSDbnZKrMKOfKCDdiq7Gg7pRl0jcw4LpPK5m81Kj__Ni2GGZrHAV7pJA_3Ivl_WrWgk&usqp=CAU"
                location="Melbourne"
                title="Hotel ChickenGunia"
                description="Elegant, inviting and with a wonderful view over the city and the beautiful park – this is how my hotelier imagined his Sun-Room and I have to admit that I am proud of what he made of me."
                star={4.57}
                price="£30/Night"
                total="£117 total"
            />    
        </div>
    )
}

export default SearchPage
