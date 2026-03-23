# 🚀 Gender Checker App (Next.js)

A simple web application built with Next.js that predicts gender based on a name using the Genderize.io API.

## 🌐 API Used
https://api.genderize.io/

This API predicts gender using statistical data based on names and returns:
- Gender (male/female)
- Probability
- Count (data samples)

## ✨ Features

- 🔍 Enter any name to check gender
- ⚡ Fast API response
- 📊 Shows probability & accuracy
- 🎨 Clean and simple UI
- 📱 Responsive design

## 🛠️ Tech Stack

- Next.js
- React.js
- Fetch API
- CSS / Tailwind (optional)

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/amanxploit/gender-checker-api-app.git
cd gender-checker-api-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the app
```bash
npm run dev
```

### 4️⃣ Open in browser
```
http://localhost:3000
```

## 📦 API Example

```
https://api.genderize.io/?name=Aman
```

Response:
```json
{
  "name": "Aman",
  "gender": "male",
  "probability": 0.99,
  "count": 12345
}
```

## 📊 How It Works

The app sends a GET request to the Genderize API and displays the response.

The API predicts gender based on historical data and returns a probability score indicating confidence. :contentReference[oaicite:0]{index=0}

## 📸 Screenshots

## 📸 Screenshots

<p align="center">
  <img src="./screenshots/ScreenShot Tool -20260323171059.png" width="600"/>
</p>

<p align="center">
  <img src="./screenshots/ScreenShot Tool -20260323171231.png" width="600"/>
</p>

<p align="center">
  <img src="./screenshots/ScreenShot Tool -20260323171301.png" width="600"/>
</p>

## 📌 Future Improvements

- 🌍 Add country filter
- 📈 Save search history
- 🔐 Add authentication for advanced features
- 🎨 Improve UI/UX

## 🤝 Contributing

Feel free to fork this repo and improve it!

## 📜 License

This project is open-source and available under the MIT License.

---

💡 Made with ❤️ using Next.js