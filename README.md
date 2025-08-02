# FreshMart 🛒🍎🍌

> This is my first ever React.js project!  
> Here, I tried to make a fun, mini Instamart/FreshMart e-grocery store — with add/remove, images, product cards, and a running cart total.  
> I’m a React beginner and this was built while experimenting and learning how modern web apps work!

## 🚀 What does it do?

- Displays fruit products as beautiful cards (with images)
- Lets you increment/decrement product quantities (never goes below zero!)
- Shows each item's total and a sticky cart total at the bottom
- Responsive (grid adjusts for mobile/desktop)
- Styled with Bootstrap and custom CSS

## 🖼️ Screenshot

![FreshMart React Project](public/images/AppPreview.png How it works (Component Flow)

## ✨ How it works (Component Flow)

```
+--------+           +--------------+         +----------+
| Navbar |           |  ProductList |         |  Footer  |
+--------+           +--------------+         +----------+
                        |   ^
          props         |   | props
                        v   |
                   +-----------------+
                   |    Product      |
                   +-----------------+
                   | img, name, qty  |
                   | + and - buttons |
                   +-----------------+
                        |
              updates quantity via props
                        |
                   +---------+
                   |  Cart   |
                   +---------+
        (shows total below the grid)
```

- `App.js` is the parent — it manages state, passes products and handler functions (add/remove).
- `ProductList` receives the data and maps each product to a `Product` card.
- `Product` cards let user change quantities.
- The cart total updates automatically.

## 🛠️ How to run this project (Step-by-step)

1. **Clone or download the repo**  
   ```bash
   git clone https://github.com/your-github-username/freshmart.git
   cd freshmart
   ```
2. **Install dependencies (React, Bootstrap — comes with Create React App)**
   ```bash
   npm install
   ```
3. **Add product images**  
   - Create a folder: `public/images/`
   - Add images named: `apple.jpg`, `banana.jpg`, `orange.jpg`, `mango.jpg`, `grapes.jpg`, `pineapple.jpg`

4. **Start the app locally**
   ```bash
   npm start
   ```
   - Then open your browser to [http://localhost:3000](http://localhost:3000)
   - You should see the FreshMart page just like the screenshot above!

5. **Optional: Customization**
   - Edit `App.js` to change products or prices
   - Edit `components/Product.js` & `App.css` or `Product.css` for new styles or layouts

## 🎓 What I learned

- Basics of React components, props, and state
- How to map over data and render lists
- Passing event handlers via props (`incrementQuantity`, `decrementQuantity`)
- Handling images and public/static files in React
- Using Bootstrap for responsive, real-world web layouts

## 💡 Next Steps

- Add routing (pages for cart, checkout)
- Store cart in localStorage
- Add login or user profile
- Connect to a backend/server for products

> Built while learning — your suggestions to improve are welcome! 😊

**_FreshMart — My First React E-Commerce UI_**
