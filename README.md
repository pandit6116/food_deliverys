# Food Delivery Application

A modern, responsive React + Vite based food delivery frontend application with category filtering and beautiful UI.

## Features

- Responsive and modern UI design
- Category-based food filtering
- Shopping cart functionality
- Payment integration with modals
- Order success tracking
- Mobile-friendly interface
- Fast performance with Vite

## Tech Stack

- **React** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Programming language

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/pandit6116/CAPSTONE_PROJECT.git
cd CAPSTONE_PROJECT/food_deliverys
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and other dependencies.

### Step 3: Start the Development Server

```bash
npm run dev
```

The application will start and open in your browser at `http://localhost:5173` (or another port if 5173 is busy).

## Project Structure

```
food_deliverys/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Card.jsx        # Food card component
│   │   └── Nav.jsx         # Navigation bar
│   ├── features/           # Feature-specific components
│   │   └── home/
│   │       ├── CartSidebar.jsx
│   │       ├── CategoriesFilter.jsx
│   │       ├── PaymentModal.jsx
│   │       └── SuccessPopup.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   └── Login.jsx       # Login page
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main App component
│   ├── Category.jsx        # Category component
│   ├── food.js             # Food data/database
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static files
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── index.html              # HTML entry point
```

## Available Scripts

### Development Mode

```bash
npm run dev
```

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

Builds the app for production to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally before deploying.

## How to Use the App

1. **Browse Foods** - Explore different food items on the home page
2. **Filter by Category** - Use the category filter to find specific types of food
3. **Add to Cart** - Click on food items to add them to your shopping cart
4. **View Cart** - Check your cart from the sidebar
5. **Checkout** - Proceed to payment modal to complete your order
6. **Success** - View order confirmation popup

## Deployment

### Deploy to Vercel (Recommended for Vite projects)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click Deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Or connect your GitHub repository directly

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Modules Not Found

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### Build Issues

```bash
# Clear Vite cache
rm -r node_modules/.vite
npm run build
```

## Contributing

Feel free to fork this project and submit pull requests with improvements!

## License

This project is open source and available for educational purposes.

## Contact & Support

For questions or issues, please open an issue on [GitHub](https://github.com/pandit6116/CAPSTONE_PROJECT/issues).

---

**Happy Coding! 🚀**
