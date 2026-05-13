# ROUTER-DOM-CONCEPT

A beginner-friendly React project demonstrating the core concepts of routing using React Router DOM.

---

## Features

- React Functional Components
- React Router DOM Integration
- Navigation using `Link` and `NavLink`
- Multiple Page Routing
- Nested Routes
- Dynamic Route Parameters
- 404 Page Handling
- Responsive UI

---

## Tech Stack

- React.js
- React Router DOM
- JavaScript (ES6)
- CSS

---

## Folder Structure

```bash
ROUTER-DOM-CONCEPT/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/githarsh7/ROUTER-DOM-CONCEPT.git
```

### Navigate to Project Folder

```bash
cd ROUTER-DOM-CONCEPT
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

---

## React Router Concepts Covered

### Basic Routing

```jsx
<Route path="/" element={<Home />} />
```

### Navigation

```jsx
<Link to="/about">About</Link>
```

### Dynamic Routing

```jsx
<Route path="/user/:id" element={<User />} />
```

### Nested Routing

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

### 404 Not Found Page

```jsx
<Route path="*" element={<NotFound />} />
```

---

## Learning Outcomes

This project helps you understand:

- Client-side routing
- Single Page Application (SPA)
- Route handling in React
- Navigation between pages
- Dynamic and nested routes

---

## Contributing

Contributions are welcome.

### Steps

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## Support

If you like this project, consider giving it a star on GitHub.

---


## Connect With Me 🤝 :
- LinkedIn : [HARSHAA SG](https://www.linkedin.com/in/harshaasg)  
- Gmail : harshaavardhan8@gmail.com

⭐ Feel free to fork this project and improve it!

---

## License

This project is licensed under the MIT License.
