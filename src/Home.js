import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'
// import Header from './Header';
function Home() {
    return (
        <div className='home'>
            {/* <Header /> */}
            <Banner />   
            <div className='home__section'>
                <Card 
                    src="https://www.personalics.com/wp-content/uploads/2016/02/5-WAYS-TO-IMPROVE-YOUR-ONLINE-CUSTOMER-EXPERIENCE.png"
                    title="Online Experiences"
                    description="Unique Activities we can do together , led by a world of hosts."
                />
                <Card 
                    src="https://www.signatureluxurytravel.com.au/wp-content/uploads/2014/12/canada-unique-stays-ridgeback-lodge.jpg"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="http://www.luxxu.net/blog/wp-content/uploads/2017/08/Luxury-Homes-That-Give-Modern-Living-A-Whole-New-Meaning-Heber-Utah.jpg"
                    title="Entire Homes"
                    description="Comfortable Private Places,with room for friends and family."
                />                
            </div>
            <div className='home__section'>
                <Card 
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"    
                />
                <Card 
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="£130/night"
                />
                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom Apartment"
                    description="Superhost with great ammenities and a fabulous shopping complex nearby"
                    price="£78/night"
                />    
            </div>
        </div>
    )
}
 
export default Home
 