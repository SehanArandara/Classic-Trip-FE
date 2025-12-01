# Classic Trip - Landing Page

A modern, responsive landing page for Classic Trip travel company built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional interface with red, black, and white color scheme
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Modular Architecture**: Highly componentized for easy white-labeling
- **10 Key Sections**:
  - Sticky Navigation with Language Selector
  - Hero Section with Destination Search
  - Destination Strip (Horizontal Scroll)
  - About Section with Image Collage
  - Services Grid (6 Services)
  - Featured Travel Packages (9 Packages)
  - Blog Section (3 Articles)
  - Testimonials Carousel (5 Reviews)
  - Contact Form
  - Comprehensive Footer

## 📁 Project Structure

```
Frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── DestinationStrip.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── FeaturedTrips.jsx
│   │   ├── Blog.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── data.js (All mock data)
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Tech Stack

- **Framework**: React 18 (Functional Components & Hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Fix PowerShell Execution Policy** (Windows only):
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 Design System

### Colors
- **Primary**: `#D32F2F` (Red)
- **Secondary**: `#000000` (Black)
- **Accent**: `#FF5252` (Light Red)

### Typography
- **Font Family**: Inter (sans-serif)
- **Weights**: 300, 400, 500, 600, 700, 800

## 📊 Data Structure

All content is stored in `src/data/data.js` for easy backend integration:

- `companyInfo`: Company details, contact, social media
- `destinations`: 8 global destinations
- `services`: 6 travel services
- `packages`: 9 featured travel packages
- `blogPosts`: 3 blog articles
- `testimonials`: 5 client reviews
- `navLinks`: Navigation menu items
- `languages`: Language options (EN/AR)

## 🌐 White-Labeling

The modular architecture makes it easy to customize:

1. **Branding**: Update `companyInfo` in `data.js`
2. **Colors**: Modify `tailwind.config.js`
3. **Content**: Edit data objects in `data.js`
4. **Components**: Customize individual components as needed

## 🔧 Component Features

### Navbar
- Sticky on scroll with background transition
- Language selector dropdown (EN/AR)
- Responsive mobile menu

### Hero
- Full-screen background image
- Destination selector
- Quick stats display
- Scroll indicator

### Services
- Responsive grid layout
- Icon-based cards
- Hover effects with shadow and transform

### Featured Trips
- 3x3 grid of packages
- Image zoom on hover
- Price badges
- Highlights tags

### Testimonials
- Horizontal scrollable carousel
- Star ratings
- Client avatars

### Contact Form
- Form validation
- Destination dropdown
- Dark gradient background

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚦 Next Steps

1. Install dependencies (see Installation section)
2. Run the development server
3. Customize data in `src/data/data.js`
4. Integrate with backend API
5. Add routing for multi-page functionality
6. Deploy to production

## 📄 License

© 2024 Classic Trip. All rights reserved.

## 👨‍💻 Development

Built with modern React best practices:
- Functional components with hooks
- Clean component separation
- Reusable data structures
- Responsive design patterns
- Accessible markup
