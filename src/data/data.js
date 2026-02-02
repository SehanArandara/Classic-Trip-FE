// Company Information
export const companyInfo = {
    name: "Classic Trip",
    tagline: "Your Journey, Our Passion",
    colors: {
        primary: "#D32F2F",
        secondary: "#000000",
        accent: "#FF5252"
    },
    contact: {
        email: "info@classictrip.com",
        phone: "+971 4 123 4567",
        address: "Dubai, United Arab Emirates"
    },
    social: {
        facebook: "https://facebook.com/classictrip",
        instagram: "https://instagram.com/classictrip",
        twitter: "https://twitter.com/classictrip",
        linkedin: "https://linkedin.com/company/classictrip"
    }
};

// Destinations
export const destinations = [
    { id: 1, name: "Classic Saudi", link: "/ksa", country: "Saudi Arabia", image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80" },
    { id: 2, name: "Classic Dubai", link: "/dubai", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80" },
    { id: 3, name: "Classic UK", link: "/uk", country: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
    { id: 4, name: "Classic France", link: "/france", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80" },
    { id: 5, name: "Classic Switzerland", link: "/switzerland", country: "Switzerland", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80" },
    { id: 6, name: "Classic Indonesia", link: "/indonesia", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80" },
    // { id: 7, name: "Classic Maldives", link: "/maldives", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80" },
    // { id: 8, name: "Classic Turkey", link: "/turkey", country: "Turkey", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80" },
    // { id: 9, name: "Classic Egypt", link: "/egypt", country: "Egypt", image: "https://images.unsplash.com/photo-1539650116455-8efdb4f0d55e?w=800&q=80" },
    // { id: 10, name: "Classic Malaysia", link: "/malaysia", country: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80" }
];

// Services
export const services = [
    {
        id: 1,
        name: "Air Ticketing",
        description: "Seamless flight bookings to destinations worldwide",
        icon: "Plane",
        points: ["Competitive Pricing", "Hassle-Free Booking", "Comprehensive Coverage"]
    },
    {
        id: 2,
        name: "Global Visa Assistance",
        description: "Expert support for visa applications and travel documentation",
        icon: "Globe",
        points: ["Expert Guidance", "Efficient Processing", "All-Inclusive Help"]
    },
    {
        id: 3,
        name: "Hotel Booking",
        description: "Premium accommodations tailored to your budget and needs",
        icon: "Hotel",
        points: ["Curated Selections", "Best Value Deals", "Flexible and Reliable"]
    },
    {
        id: 4,
        name: "Leisure Packages",
        description: "Curated holiday experiences for unforgettable memories",
        icon: "Umbrella",
        points: ["Customized Itineraries", "All-Inclusive Convenience", "Quality Assurance"]
    },
    {
        id: 5,
        name: "MICE/ Corporate Travel",
        description: "Professional management for business meetings and events",
        icon: "Briefcase",
        points: ["End-to-End Management", "Cost-Effective Solutions", "Dedicated Expertise"]
    },
    {
        id: 6,
        name: "Makkah, Madinah & Beyond",
        description: "Spiritual journeys and sacred pilgrimages to holy sites",
        icon: "Landmark",
        points: ["Spiritual Guidance", "Comfortable Arrangements", "Holistic Experience"]
    }
];

// Consolidated Packages List
export const packages = [
    // General / Featured Packages
    {
        id: 1,
        title: "Dubai Luxury Escape",
        destination: "Dubai, UAE",
        duration: "5 Days / 4 Nights",
        price: "$1,299",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        description: "Experience the glamour of Dubai with luxury hotels and exclusive tours",
        highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
        type: "Dubai",
        subType: "General",
        isFeatured: true
    },
    {
        id: 2,
        title: "Makkah & Madinah Pilgrimage",
        destination: "Saudi Arabia",
        duration: "10 Days / 9 Nights",
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Sacred journey with premium accommodations and guided services",
        highlights: ["Umrah Package", "5-Star Hotels", "24/7 Support"],
        type: "KSA",
        subType: "Visit Saudi",
        isFeatured: true
    },
    {
        id: 3,
        title: "London Explorer",
        destination: "London, UK",
        duration: "7 Days / 6 Nights",
        price: "$1,899",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        description: "Discover the historic charm and modern culture of London",
        highlights: ["Big Ben", "British Museum", "Thames Cruise"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: true
    },
    // KSA Global Packages
    {
        id: 101,
        title: "Swiss Alps Adventure",
        destination: "Switzerland",
        duration: "7 Days / 6 Nights",
        price: "SAR 12,500",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
        description: "Experience the breathtaking beauty of the Swiss Alps with luxury stays",
        highlights: ["Jungfraujoch", "Lake Geneva", "Chocolate Factory Tour"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: true,
        isSpecialOffer: true
    },
    {
        id: 102,
        title: "London Summer Getaway",
        destination: "United Kingdom",
        duration: "6 Days / 5 Nights",
        price: "SAR 9,800",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
        description: "Explore the historic and modern wonders of London",
        highlights: ["Buckingham Palace", "London Eye", "West End Shows"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: false
    },
    {
        id: 103,
        title: "Paris Romance",
        destination: "France",
        duration: "5 Days / 4 Nights",
        price: "SAR 11,200",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        description: "Fall in love with the City of Lights",
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: false
    },
    // {
    //     id: 104,
    //     title: "Bali Tropical Paradise",
    //     destination: "Indonesia",
    //     duration: "8 Days / 7 Nights",
    //     price: "SAR 7,500",
    //     image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    //     description: "Relax in Bali's stunning beaches and cultural temples",
    //     highlights: ["Ubud Rice Terraces", "Beach Resorts", "Temple Tours"],
    //     type: "KSA",
    //     subType: "Global Packages",
    //     isFeatured: true
    // },
    // {
    //     id: 105,
    //     title: "Maldives Luxury Escape",
    //     destination: "Maldives",
    //     duration: "5 Days / 4 Nights",
    //     price: "SAR 15,000",
    //     image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    //     description: "Ultimate luxury in overwater villas",
    //     highlights: ["Private Island", "Water Sports", "Spa Treatments"],
    //     type: "KSA",
    //     subType: "Global Packages",
    //     isFeatured: true
    // },
    // Visit Saudi Packages
    {
        id: 2,
        title: "Makkah & Madinah Pilgrimage",
        destination: "Saudi Arabia",
        duration: "10 Days / 9 Nights",
        price: "$2,499",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Sacred journey with premium accommodations and guided services",
        highlights: ["Umrah Package", "5-Star Hotels", "24/7 Support"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Makkah, Madinah & Beyond",
        isFeatured: true
    },
    {
        id: 201,
        title: "Al Ula Heritage Experience",
        destination: "Al Ula, Saudi Arabia",
        duration: "3 Days / 2 Nights",
        price: "SAR 4,500",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Explore ancient Nabatean tombs and stunning desert landscapes",
        highlights: ["Hegra (Madain Saleh)", "Elephant Rock", "Old Town"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: true
    },
    {
        id: 202,
        title: "Riyadh Season Extravaganza",
        destination: "Riyadh, Saudi Arabia",
        duration: "2 Days / 1 Night",
        price: "SAR 2,800",
        image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80",
        description: "Experience world-class entertainment and events",
        highlights: ["Boulevard City", "Concerts", "International Cuisine"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Entertainment & Events",
        isFeatured: false
    },
    {
        id: 203,
        title: "Jeddah Coastal Retreat",
        destination: "Jeddah, Saudi Arabia",
        duration: "4 Days / 3 Nights",
        price: "SAR 3,200",
        image: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=800&q=80",
        description: "Discover the bride of the Red Sea",
        highlights: ["Historic Jeddah", "Corniche", "Red Sea Diving"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: true
    },
    {
        id: 204,
        title: "Red Sea Luxury Resort",
        destination: "Red Sea Coast, Saudi Arabia",
        duration: "5 Days / 4 Nights",
        price: "SAR 8,500",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        description: "Pristine beaches and world-class diving",
        highlights: ["Luxury Resorts", "Scuba Diving", "Private Beaches"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: true
    },
    {
        id: 205,
        title: "Abha Mountain Escape",
        destination: "Abha, Saudi Arabia",
        duration: "3 Days / 2 Nights",
        price: "SAR 2,500",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        description: "Cool mountain air and stunning green landscapes",
        highlights: ["Asir National Park", "Cable Car", "Traditional Villages"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: false
    },
    {
        id: 206,
        title: "Taif City of Roses",
        destination: "Taif, Saudi Arabia",
        duration: "2 Days / 1 Night",
        price: "SAR 1,800",
        image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80",
        description: "Visit the summer capital of Saudi Arabia",
        highlights: ["Rose Factories", "Shubra Palace", "Souq Okaz"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: false
    },
    {
        id: 207,
        title: "Diriyah Historic Tour",
        destination: "Diriyah, Saudi Arabia",
        duration: "1 Day",
        price: "SAR 950",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e2e?w=800&q=80",
        description: "Explore the birthplace of the Saudi State",
        highlights: ["At-Turaif UNESCO Site", "Bujairi Terrace", "Historic Walls"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Discover Saudi Arabia",
        isFeatured: true
    },
    {
        id: 208,
        title: "Makkah Premium Package",
        destination: "Makkah, Saudi Arabia",
        duration: "5 Days / 4 Nights",
        price: "SAR 6,200",
        image: "https://images.unsplash.com/photo-1564769662533-4f00a89340c6?w=800&q=80",
        description: "Luxury Umrah experience with Haram views",
        highlights: ["5-Star Clock Tower Hotel", "Private Transfers", "Religious Guide"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Makkah, Madinah & Beyond",
        isFeatured: true
    },
    {
        id: 209,
        title: "Madinah Spiritual Journey",
        destination: "Madinah, Saudi Arabia",
        duration: "4 Days / 3 Nights",
        price: "SAR 4,800",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Peaceful stay near Prophet's Mosque",
        highlights: ["Masjid Al Nabawi", "Quba Mosque Visit", "Uhud Mountain"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Makkah, Madinah & Beyond",
        isFeatured: false
    },
    {
        id: 210,
        title: "Formula 1 Jeddah Corniche",
        destination: "Jeddah, Saudi Arabia",
        duration: "3 Days / 2 Nights",
        price: "SAR 12,000",
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?w=800&q=80",
        description: "Experience the fastest street circuit in F1",
        highlights: ["Paddock Club Access", "Concerts", "Luxury Stay"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Entertainment & Events",
        isFeatured: true
    },
    {
        id: 211,
        title: "MDLBEAST Soundstorm",
        destination: "Riyadh, Saudi Arabia",
        duration: "4 Days / 3 Nights",
        price: "SAR 5,500",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
        description: "The loudest festival in the region",
        highlights: ["International DJs", "VIB (Very Important Beast)", "Aftermath access"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Entertainment & Events",
        isFeatured: true
    },
    {
        id: 212,
        title: "Al Ula Moments & Winter at Tantora",
        destination: "Al Ula, Saudi Arabia",
        duration: "3 Days / 2 Nights",
        price: "SAR 7,800",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Music and arts in a historic landscape",
        highlights: ["Maraya Concert", "Hot Air Balloon", "Desert Dining"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Entertainment & Events",
        isFeatured: true
    },
    {
        id: 213,
        title: "Noor Riyadh Art Festival",
        destination: "Riyadh, Saudi Arabia",
        duration: "2 Days / 1 Night",
        price: "SAR 2,200",
        image: "https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?w=800&q=80",
        description: "City-wide festival of light and art",
        highlights: ["Light Installations", "Workshops", "Guided Art Tours"],
        type: "KSA",
        subType: "Visit Saudi",
        ksaCategory: "Entertainment & Events",
        isFeatured: false
    },
    {
        id: 301,
        title: "Swiss Alpine Wonders",
        destination: "Switzerland",
        duration: "8 Days / 7 Nights",
        price: "$3,200",
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
        description: "Breathtaking landscapes and luxury resorts in the heart of the Alps",
        highlights: ["Zermatt", "Lucerne", "Alpine Train"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: true
    },
    {
        id: 302,
        title: "Tokyo Discovery",
        destination: "Tokyo, Japan",
        duration: "6 Days / 5 Nights",
        price: "$2,100",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        description: "Explore the neon lights and ancient temples of Tokyo",
        highlights: ["Shibuya Crossing", "Senso-ji Temple", "Mount Fuji Day Trip"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: false
    },
    {
        id: 303,
        title: "Santorini Sunset Escape",
        destination: "Santorini, Greece",
        duration: "5 Days / 4 Nights",
        price: "$1,800",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
        description: "Iconic blue domes and stunning sunsets in Greece",
        highlights: ["Oia Village", "Volcanic Boat Tour", "Wine Tasting"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: true,
        isSpecialOffer: true
    },
    {
        id: 304,
        title: "Cape Town Adventure",
        destination: "Cape Town, South Africa",
        duration: "7 Days / 6 Nights",
        price: "$1,500",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
        description: "From Table Mountain to penguin colony beaches",
        highlights: ["Table Mountain", "Cape Point", "Boulders Beach"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: false
    },
    {
        id: 305,
        title: "New York City Lights",
        destination: "New York, USA",
        duration: "5 Days / 4 Nights",
        price: "$2,400",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
        description: "The city that never sleeps - Empire State to Central Park",
        highlights: ["Times Square", "Statue of Liberty", "Broadway Show"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: true,
        isSpecialOffer: true
    },
    {
        id: 306,
        title: "Venice Canal Journey",
        destination: "Venice, Italy",
        duration: "4 Days / 3 Nights",
        price: "$1,300",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee2887ad8e?w=800&q=80",
        description: "Romantic gondola rides and historic architecture",
        highlights: ["St. Mark's Basilica", "Grand Canal", "Gondola Ride"],
        type: "KSA",
        subType: "Global Packages",
        isFeatured: false
    }
];

// Blog Posts
export const blogPosts = [
    {
        id: 1,
        title: "Top 10 Must-Visit Destinations in 2024",
        excerpt: "Discover the most exciting travel destinations that should be on your bucket list this year...",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
        author: "Sarah Johnson",
        date: "November 15, 2024",
        category: "Travel Tips",
        link: "/blog/1",
        content: `
            <p>As we step into 2024, the world of travel continues to evolve with new destinations emerging and classic favorites reinventing themselves. Whether you're seeking adventure, relaxation, or cultural immersion, this year's top destinations offer something for every type of traveler.</p>
            
            <h2>1. Kyoto, Japan</h2>
            <p>Experience the perfect blend of ancient tradition and modern innovation in Japan's cultural heart. From stunning temples to cutting-edge technology, Kyoto offers an unforgettable journey through time.</p>
            
            <h2>2. Iceland</h2>
            <p>Witness the raw beauty of nature with glaciers, geysers, and the mesmerizing Northern Lights. Iceland's dramatic landscapes make it a photographer's paradise.</p>
            
            <h2>3. Portugal</h2>
            <p>Discover charming coastal towns, world-class wine regions, and vibrant cities. Portugal offers incredible value and authentic European experiences.</p>
            
            <p>Each destination on this list has been carefully selected based on unique experiences, cultural richness, and traveler satisfaction. Start planning your 2024 adventures today!</p>
        `
    },
    {
        id: 2,
        title: "Essential Travel Tips for First-Time Travelers",
        excerpt: "Planning your first international trip? Here are expert tips to make your journey smooth and memorable...",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
        author: "Michael Chen",
        date: "November 10, 2024",
        category: "Travel Guide",
        link: "/blog/2",
        content: `
            <p>Embarking on your first international journey can be both exciting and overwhelming. With proper preparation and the right mindset, you can ensure a smooth and memorable experience.</p>
            
            <h2>Before You Go</h2>
            <p>Start by checking passport validity, visa requirements, and necessary vaccinations. Make copies of important documents and store them separately from the originals.</p>
            
            <h2>Packing Smart</h2>
            <p>Pack light and versatile clothing. Remember that you can always buy essentials at your destination. Don't forget universal adapters and portable chargers.</p>
            
            <h2>Money Matters</h2>
            <p>Notify your bank about your travel plans, carry multiple payment methods, and always have some local currency for emergencies.</p>
            
            <p>Remember, the best trips often include unexpected moments. Stay flexible, embrace new experiences, and don't be afraid to step out of your comfort zone!</p>
        `
    },
    {
        id: 3,
        title: "How to Get the Best Flight Deals",
        excerpt: "Save money on airfare with these insider secrets and booking strategies from travel experts...",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80",
        author: "Emma Williams",
        date: "November 5, 2024",
        category: "Budget Travel",
        link: "/blog/3",
        content: `
            <p>Finding affordable flights doesn't have to be a mystery. With the right strategies and tools, you can save hundreds of dollars on your next trip.</p>
            
            <h2>Timing is Everything</h2>
            <p>Book domestic flights 1-3 months in advance and international flights 2-8 months ahead. Tuesday and Wednesday are typically the cheapest days to fly.</p>
            
            <h2>Be Flexible</h2>
            <p>Use flexible date searches to find the cheapest days to travel. Sometimes shifting your trip by a day or two can result in significant savings.</p>
            
            <h2>Use Price Alerts</h2>
            <p>Set up price alerts on multiple booking platforms. This way, you'll be notified when prices drop for your desired route.</p>
            
            <p>With these strategies in your arsenal, you'll be well-equipped to find the best flight deals and make your travel dreams more affordable!</p>
        `
    },
    // add new sample blogs posts here
    {
        id: 4,
        title: "How to Get the Best Flight Deals",
        excerpt: "Save money on airfare with these insider secrets and booking strategies from travel experts...",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80",
        author: "Emma Williams",
        date: "November 5, 2024",
        category: "Budget Travel",
        link: "/blog/3",
        content: `
            <p>Finding affordable flights doesn't have to be a mystery. With the right strategies and tools, you can save hundreds of dollars on your next trip.</p>
            
            <h2>Timing is Everything</h2>
            <p>Book domestic flights 1-3 months in advance and international flights 2-8 months ahead. Tuesday and Wednesday are typically the cheapest days to fly.</p>
            
            <h2>Be Flexible</h2>
            <p>Use flexible date searches to find the cheapest days to travel. Sometimes shifting your trip by a day or two can result in significant savings.</p>
            
            <h2>Use Price Alerts</h2>
            <p>Set up price alerts on multiple booking platforms. This way, you'll be notified when prices drop for your desired route.</p>
            
            <p>With these strategies in your arsenal, you'll be well-equipped to find the best flight deals and make your travel dreams more affordable!</p>
        `
    },
    {
        id: 5,
        title: "How to Get the Best Flight Deals",
        excerpt: "Save money on airfare with these insider secrets and booking strategies from travel experts...",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80",
        author: "Emma Williams",
        date: "November 5, 2024",
        category: "Budget Travel",
        link: "/blog/3",
        content: `
            <p>Finding affordable flights doesn't have to be a mystery. With the right strategies and tools, you can save hundreds of dollars on your next trip.</p>
            
            <h2>Timing is Everything</h2>
            <p>Book domestic flights 1-3 months in advance and international flights 2-8 months ahead. Tuesday and Wednesday are typically the cheapest days to fly.</p>
            
            <h2>Be Flexible</h2>
            <p>Use flexible date searches to find the cheapest days to travel. Sometimes shifting your trip by a day or two can result in significant savings.</p>
            
            <h2>Use Price Alerts</h2>
            <p>Set up price alerts on multiple booking platforms. This way, you'll be notified when prices drop for your desired route.</p>
            
            <p>With these strategies in your arsenal, you'll be well-equipped to find the best flight deals and make your travel dreams more affordable!</p>
        `
    },

];

// Testimonials
export const testimonials = [
    {
        id: 1,
        name: "Ahmed Al Mansouri",
        location: "Dubai, UAE",
        rating: 5,
        comment: "Classic Trip made our family vacation to Turkey absolutely unforgettable. Professional service from start to finish!",
        avatar: "https://ui-avatars.com/api/?name=Ahmed+Al+Mansouri&background=D32F2F&color=fff"
    },
    {
        id: 2,
        name: "Fatima Khan",
        location: "Riyadh, Saudi Arabia",
        rating: 5,
        comment: "The Umrah package was perfectly organized. Every detail was taken care of. Highly recommend Classic Trip!",
        avatar: "https://ui-avatars.com/api/?name=Fatima+Khan&background=D32F2F&color=fff"
    },
    {
        id: 3,
        name: "John Smith",
        location: "London, UK",
        rating: 5,
        comment: "Excellent service and great value for money. The team went above and beyond to ensure our Dubai trip was perfect.",
        avatar: "https://ui-avatars.com/api/?name=John+Smith&background=D32F2F&color=fff"
    },
    {
        id: 4,
        name: "Ayesha Rahman",
        location: "Dhaka, Bangladesh",
        rating: 5,
        comment: "Best travel agency I've worked with. They handled everything professionally and made our honeymoon special.",
        avatar: "https://ui-avatars.com/api/?name=Ayesha+Rahman&background=D32F2F&color=fff"
    },
    {
        id: 5,
        name: "Mohammed Hassan",
        location: "Cairo, Egypt",
        rating: 5,
        comment: "Classic Trip's attention to detail is impressive. Our Malaysia trip was seamless and enjoyable throughout.",
        avatar: "https://ui-avatars.com/api/?name=Mohammed+Hassan&background=D32F2F&color=fff"
    }
];

// Navigation Links
export const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Global Presence", href: "#destinations" },
    { name: "About", href: "#about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "#contact" }
];

// Languages
export const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" }
];

// ==================== KSA MODULE DATA ====================

// KSA Navigation Links
export const ksaNavLinks = [
    { name: "Home", href: "/ksa" },
    { name: "Global Packages", href: "/ksa/globalPackages" },
    { name: "Visit Saudi", href: "/ksa/visit-saudi" },
    { name: "Services", href: "/ksa/services" },
    { name: "Contact Us", href: "#contact" }
];

// Placeholder secondary nav for Global Packages
export const globalPackagesSecondaryNav = [
    { name: "Overview", href: "/ksa/globalPackages" },
    { name: "Destinations", href: "/ksa/globalPackages/destinations" },
    { name: "Special Offers", href: "/ksa/globalPackages/special-offers" },
    // { name: "Reviews", href: "#reviews" },
    { name: "Services", href: "/ksa/globalPackages/services" },
    { name: "MICE", href: "/ksa/globalPackages/corporate-mice#mice" },
    { name: "Corporate", href: "/ksa/globalPackages/corporate-mice#corporate" }
];

// Placeholder secondary nav for Visit Saudi
export const visitSaudiSecondaryNav = [
    { name: "Overview", href: "/ksa/visit-saudi" },
    { name: "Experiences", href: "/ksa/visit-saudi/experiences" },
    { name: "Events", href: "/ksa/visit-saudi/events" },
    { name: "Spiritual", href: "/ksa/visit-saudi/spiritual-journeys" },
    { name: "Services", href: "/ksa/visit-saudi/services" }
];

// KSA Services
export const ksaServices = [
    {
        id: 1,
        name: "Air Ticketing",
        description: "Seamless flight bookings to destinations worldwide",
        icon: "Plane",
        points: ["Competitive Pricing", "Hassle-Free Booking", "Comprehensive Coverage"]
    },
    {
        id: 2,
        name: "Global Visa Assistance",
        description: "Expert support for visa applications and travel documentation",
        icon: "Globe",
        points: ["Expert Guidance", "Efficient Processing", "All-Inclusive Help"]
    },
    {
        id: 3,
        name: "Hotel Booking",
        description: "Premium accommodations tailored to your budget and needs",
        icon: "Hotel",
        points: ["Curated Selections", "Best Value Deals", "Flexible and Reliable"]
    },
    {
        id: 4,
        name: "Leisure Packages",
        description: "Curated holiday experiences for unforgettable memories",
        icon: "Umbrella",
        points: ["Customized Itineraries", "All-Inclusive Convenience", "Quality Assurance"]
    },
    {
        id: 5,
        name: "MICE/ Corporate Travel",
        description: "Professional management for business meetings and events",
        icon: "Briefcase",
        points: ["End-to-End Management", "Cost-Effective Solutions", "Dedicated Expertise"]
    },
    {
        id: 6,
        name: "Makkah, Madinah & Beyond",
        description: "Spiritual journeys and sacred pilgrimages to holy sites",
        icon: "Landmark",
        points: ["Spiritual Guidance", "Comfortable Arrangements", "Holistic Experience"]
    }
];

// KSA Contact Form Options
export const ksaContactOptions = [
    { id: "visit-saudi", label: "I want to Visit Saudi" },
    { id: "global-holiday", label: "I want a Global Holiday Package" }
];

// Job Positions
export const jobPositions = [
    {
        id: 1,
        title: "Travel Consultant",
        department: "Sales",
        location: "Riyadh, Saudi Arabia",
        type: "Full-time",
        experience: "2-4 years",
        status: "open",
        postedDate: "November 20, 2024",
        description: "We are seeking an experienced Travel Consultant to join our dynamic team. You will be responsible for creating memorable travel experiences for our clients.",
        responsibilities: [
            "Consult with clients to understand their travel needs and preferences",
            "Design customized travel itineraries and packages",
            "Book flights, hotels, and other travel services",
            "Provide excellent customer service and support",
            "Stay updated on travel trends and destinations"
        ],
        requirements: [
            "2-4 years of experience in travel industry",
            "Excellent communication and interpersonal skills",
            "Strong knowledge of global destinations",
            "Proficiency in travel booking systems",
            "Bachelor's degree in Tourism or related field"
        ],
        benefits: [
            "Competitive salary package",
            "Health insurance",
            "Travel discounts",
            "Professional development opportunities",
            "Friendly work environment"
        ]
    },
    {
        id: 2,
        title: "Digital Marketing Specialist",
        department: "Marketing",
        location: "Dubai, UAE",
        type: "Full-time",
        experience: "3-5 years",
        status: "open",
        postedDate: "November 18, 2024",
        description: "Join our marketing team to drive digital campaigns and enhance our online presence across multiple platforms.",
        responsibilities: [
            "Develop and execute digital marketing strategies",
            "Manage social media platforms and content",
            "Analyze campaign performance and optimize ROI",
            "Create engaging content for various channels",
            "Collaborate with design and content teams"
        ],
        requirements: [
            "3-5 years of digital marketing experience",
            "Proven track record in social media marketing",
            "Strong analytical and creative skills",
            "Experience with Google Analytics and SEO",
            "Excellent written and verbal communication"
        ],
        benefits: [
            "Competitive salary",
            "Performance bonuses",
            "Health and life insurance",
            "Flexible working hours",
            "Career growth opportunities"
        ]
    },
    {
        id: 3,
        title: "Tour Operations Manager",
        department: "Operations",
        location: "Jeddah, Saudi Arabia",
        type: "Full-time",
        experience: "5+ years",
        status: "open",
        postedDate: "November 15, 2024",
        description: "Lead our tour operations team to deliver exceptional travel experiences and manage day-to-day operations.",
        responsibilities: [
            "Oversee tour operations and logistics",
            "Manage relationships with suppliers and partners",
            "Ensure quality standards are met",
            "Train and supervise operations staff",
            "Handle customer escalations and issues"
        ],
        requirements: [
            "5+ years in tour operations management",
            "Strong leadership and team management skills",
            "Excellent problem-solving abilities",
            "Knowledge of tourism industry regulations",
            "Fluency in English and Arabic"
        ],
        benefits: [
            "Executive compensation package",
            "Annual performance bonus",
            "Comprehensive health coverage",
            "Paid vacation and travel benefits",
            "Leadership development programs"
        ]
    },
    {
        id: 4,
        title: "Customer Service Representative",
        department: "Customer Support",
        location: "Riyadh, Saudi Arabia",
        type: "Full-time",
        experience: "1-2 years",
        status: "closed",
        postedDate: "October 25, 2024",
        description: "Provide exceptional customer service and support to our valued clients.",
        responsibilities: [
            "Handle customer inquiries via phone, email, and chat",
            "Resolve customer issues and complaints",
            "Process bookings and reservations",
            "Maintain customer records and documentation",
            "Provide product and service information"
        ],
        requirements: [
            "1-2 years of customer service experience",
            "Excellent communication skills",
            "Proficiency in English and Arabic",
            "Computer literacy",
            "Problem-solving mindset"
        ],
        benefits: [
            "Competitive salary",
            "Health insurance",
            "Training and development",
            "Employee discounts",
            "Supportive team environment"
        ]
    }
];
