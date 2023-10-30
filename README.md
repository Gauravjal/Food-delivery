## Food Delivery App

Welcome to the Food Delivery App project! This application allows users to browse a variety of foods, add items to their cart, and place orders for delivery.

### Getting Started

To run the application, follow these steps:

#### Run the Application
```bash
npm start
```

This command will start the development server and you can access the app at `http://localhost:3000`.

#### Run JSON Server
To simulate a backend, you can use JSON Server.
```bash
npx json-server --watch foods.json --port 8000
```

This command will start JSON Server using the data in `foods.json` file on `http://localhost:8000`.

### Technologies Used

- **Frontend:** React.js, Redux, CSS
- **Backend Simulation:** JSON Server
- **State Management:** Redux
- **Routing:** React Router
- **API Calls:** Axios

### Features

- **Browse Menu:** Users can browse a variety of food items available in the menu.
- **Add to Cart:** Users can add food items to their cart for ordering.
- **Place Order:** Users can review their cart and place orders for delivery.
- **Realistic Data:** Backend data is simulated using JSON Server for a realistic experience.

### Folder Structure

- **`src/components`:** React components for different sections of the app.
- **`src/redux`:** Redux store, actions, and reducers for state management.
- **`public`:** Static assets and `index.html`.

### How to Contribute

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature: `git checkout -b feature-name`
4. Make your changes and commit them: `git commit -m 'Add new feature'`
5. Push to the branch: `git push origin feature-name`
6. Create a pull request in the original repository.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
