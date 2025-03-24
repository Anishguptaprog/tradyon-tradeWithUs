# TradeWithUs

TradeWithUs is a **Next.js**-based marketplace with a **FastAPI backend** and **MongoDB database**. It allows users to trade goods efficiently with a responsive UI.

---

## 🚀 Features
- Browse, add, update, and delete products and profiles.
- Secure user authentication.
- REST API for backend interactions.
- Fully responsive UI with **Next.js & Tailwind CSS**.

---

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/TradeWithUs.git
cd TradeWithUs
```
### **2️⃣ Install Frontend Dependencies
```sh
npm install
```
### **3️⃣ Set Up the Backend
Install Dependencies
Ensure Python 3.9+ is installed, then run:
```sh
cd backend
pip install -r requirements.txt
```
Configure Environment Variables
Create a .env file inside the backend/ directory and add:
```ini
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/tradewithus
SECRET_KEY=your-secret-key
```
Run the Backend
```sh
uvicorn main:app --reload
```
Your FastAPI backend will be live at http://127.0.0.1:8000

## **⚙️ Frontend Setup
### **1️⃣ Set Up .env.local in Next.js
```ini
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```
### **2️⃣ Start the Frontend
```sh
npm run dev
```
The frontend will run at http://localhost:3000

** 📡 API Documentation (FastAPI)
Visit http://127.0.0.1:8000/docs for interactive API documentation.

1️⃣ Get All Products
```http
GET /products
```
Example:
```sh
curl -X GET http://127.0.0.1:8000/product
```
Response:
```json
[
  {
    "id": "65a2b1...",
    "name": "Apple",
    "origin": "USA",
    "packing": "Box of 10kg",
    "price": 20
  }
]
```
2️⃣ Get a Single Product
```http
GET /product/{id}
```
Example:
```sh
curl -X GET http://127.0.0.1:8000/products/65a2b1...
```
3️⃣ Add a New Product
```http
POST /product
```
Example:
```sh
curl -X POST http://127.0.0.1:8000/product \
-H "Content-Type: application/json" \
-d '{
  "name": "Banana",
  "origin": "India",
  "packing": "Box of 5kg",
  "price": 15
}'
```
4️⃣ Update a Product
```http
PUT /product/{id}
```
Example:
```sh
curl -X PUT http://127.0.0.1:8000/products/65a2b1... \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated Apple",
  "origin": "Canada",
  "price": 25
}'
```
5️⃣ Delete a Product
```http
DELETE /product/{id}
```
Example:
```sh
curl -X DELETE http://127.0.0.1:8000/products/65a2b1...
```
Similar for Profile APIs.

This README file covers:
- **Next.js frontend**
- **FastAPI backend**
- **MongoDB database**
- **Installation, running, and API docs.

## ** Attaching Screenshots for references
** All Profiles
![Image](profiles.png)
