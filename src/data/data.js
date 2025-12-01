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
    { id: 1, name: "Classic Saudi", link: "/ksa", country: "Saudi Arabia" },
    { id: 2, name: "Classic Dubai", link: "/dubai", country: "UAE" },
];

// Services
export const services = [
    {
        id: 1,
        name: "Visa Assistance",
        description: "Complete visa processing and documentation support",
        icon: "FileText"
    },
    {
        id: 2,
        name: "Hotel Booking",
        description: "Luxury and budget accommodations worldwide",
        icon: "Hotel"
    },
    {
        id: 3,
        name: "Flight Tickets",
        description: "Best deals on domestic and international flights",
        icon: "Plane"
    },
    {
        id: 4,
        name: "Transport Services",
        description: "Airport transfers and local transportation",
        icon: "Car"
    },
    {
        id: 5,
        name: "Tour Packages",
        description: "Curated travel experiences and guided tours",
        icon: "Map"
    },
    {
        id: 6,
        name: "Travel Insurance",
        description: "Comprehensive coverage for peace of mind",
        icon: "Shield"
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
        type: "general",
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
        type: "visit-saudi",
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
        type: "global",
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
        type: "global",
        isFeatured: true
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
        type: "global",
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
        type: "global",
        isFeatured: false
    },
    {
        id: 104,
        title: "Bali Tropical Paradise",
        destination: "Indonesia",
        duration: "8 Days / 7 Nights",
        price: "SAR 7,500",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        description: "Relax in Bali's stunning beaches and cultural temples",
        highlights: ["Ubud Rice Terraces", "Beach Resorts", "Temple Tours"],
        type: "global",
        isFeatured: true
    },
    {
        id: 105,
        title: "Maldives Luxury Escape",
        destination: "Maldives",
        duration: "5 Days / 4 Nights",
        price: "SAR 15,000",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        description: "Ultimate luxury in overwater villas",
        highlights: ["Private Island", "Water Sports", "Spa Treatments"],
        type: "global",
        isFeatured: true
    },
    // Visit Saudi Packages
    {
        id: 201,
        title: "Al Ula Heritage Experience",
        destination: "Al Ula, Saudi Arabia",
        duration: "3 Days / 2 Nights",
        price: "SAR 4,500",
        image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
        description: "Explore ancient Nabatean tombs and stunning desert landscapes",
        highlights: ["Hegra (Madain Saleh)", "Elephant Rock", "Old Town"],
        type: "visit-saudi",
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
        type: "visit-saudi",
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
        type: "visit-saudi",
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
        type: "visit-saudi",
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
        type: "visit-saudi",
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
        link: "/blog/top-destinations-2024"
    },
    {
        id: 2,
        title: "Essential Travel Tips for First-Time Travelers",
        excerpt: "Planning your first international trip? Here are expert tips to make your journey smooth and memorable...",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
        author: "Michael Chen",
        date: "November 10, 2024",
        category: "Travel Guide",
        link: "/blog/first-time-travelers"
    },
    {
        id: 3,
        title: "How to Get the Best Flight Deals",
        excerpt: "Save money on airfare with these insider secrets and booking strategies from travel experts...",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80",
        author: "Emma Williams",
        date: "November 5, 2024",
        category: "Budget Travel",
        link: "/blog/best-flight-deals"
    }
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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Global Presence", href: "#destinations" },
    { name: "Careers", href: "#careers" },
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
    { name: "Global Holidays", href: "/ksa/globalPackages" },
    { name: "Visit Saudi", href: "/ksa/visit-saudi" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" }
];

// KSA Services
export const ksaServices = [
    {
        id: 1,
        name: "Umrah Services",
        description: "Complete Umrah packages with premium accommodations and guidance",
        icon: "Mosque"
    },
    {
        id: 2,
        name: "GCC Visa Assistance",
        description: "Fast-track visa processing for GCC countries",
        icon: "FileText"
    },
    {
        id: 3,
        name: "Corporate Travel",
        description: "Tailored business travel solutions for companies",
        icon: "Briefcase"
    },
    {
        id: 4,
        name: "Hotel Bookings",
        description: "Luxury and budget accommodations across Saudi Arabia",
        icon: "Hotel"
    },
    {
        id: 5,
        name: "Transport Services",
        description: "Private transfers and car rentals throughout KSA",
        icon: "Car"
    },
    {
        id: 6,
        name: "Travel Insurance",
        description: "Comprehensive coverage for domestic and international travel",
        icon: "Shield"
    }
];

// KSA Contact Form Options
export const ksaContactOptions = [
    { id: "visit-saudi", label: "I want to Visit Saudi" },
    { id: "global-holiday", label: "I want a Global Holiday Package" }
];
