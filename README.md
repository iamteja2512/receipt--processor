# Receipt Processor API

A lightweight web service built with Node.js and Express to process receipts and calculate reward points.

## 🚀 How to Run

### Using Docker

```bash
docker build -t receipt-processor .
docker run -p 8000:8000 receipt-processor
```

### Without Docker

```bash
npm install
npm start
```

## 📋 Endpoints

### POST /receipts/process
Submit a receipt and receive a unique receipt ID.

### GET /receipts/{id}/points
Retrieve the calculated points for a given receipt ID.
