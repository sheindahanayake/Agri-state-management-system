# Agriculture State Management System

## Overview
The Agriculture State Management System (ASMS) is designed to help farmers optimize their fertilizer usage by providing real-time fertilizer recommendations based on soil health. The system uses an **Arduino ESP32** with **NPK sensors** to collect data on the soil's Nitrogen (N), Phosphorus (P), and Potassium (K) levels. This data is processed through a **Django** backend, and fertilizer recommendations are generated using **Machine Learning (ML)** models. 

The system also features a **React.js** frontend that displays the fertilizer recommendations and sensor data, as well as real-time monitoring through **Blynk** and notifications through **Firebase**. **SQLite** is used for data storage, and the system enables farmers to track soil health over time.

## Features
- **Real-Time Data Collection**: Soil health is monitored in real-time through **NPK sensors** connected to an **Arduino ESP32**.
- **Fertilizer Recommendations**: Based on the data collected, the system uses **Machine Learning (ML)** to recommend the optimal fertilizer mix.
- **Real-Time Dashboard**: The **React.js** frontend displays sensor data and recommendations, including charts and graphs.
- **Mobile Monitoring**: Farmers can monitor sensor data on their mobile devices using the **Blynk** app.
- **Notifications**: Real-time alerts and notifications are sent via **Firebase** if soil parameters are out of optimal ranges or if fertilizer application is required.
- **Historical Data Tracking**: **SQLite** stores sensor data over time for analysis and historical insights.

## Technologies Used
- **Frontend**:
  - **React.js**: Dynamic, real-time user interface for data visualization and fertilizer recommendations.
  - **Chart.js**: For graphical representation of soil data (e.g., NPK levels) and recommendations.
  - **Blynk**: For real-time mobile monitoring of soil data.
  
- **Backend**:
  - **Django**: Python-based framework used for handling APIs and data processing.
  - **SQLite**: Lightweight database used for storing sensor data and fertilizer recommendations.
  
- **Machine Learning**:
  - **Scikit-learn** or **TensorFlow**: Used to build models for fertilizer recommendations based on soil health data.

- **IoT Devices**:
  - **Arduino ESP32**: Used to collect NPK data through connected sensors.
  - **NPK Sensor**: Measures the Nitrogen, Phosphorus, and Potassium levels in the soil.
  
- **Real-Time Monitoring and Notifications**:
  - **Blynk**: Mobile app for real-time monitoring.
  - **Firebase**: For notifications and live data updates.

## Setup Instructions

### Prerequisites
- **Python 3.x** 
- **Node.js** (for React.js frontend)
- **Composer** (for Django dependencies)
- **SQLite** (for database)
- **Arduino IDE** (for Arduino ESP32 and sensor configuration)
- **Firebase** account (for notifications)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/agriculture-state-management-system.git
   cd agriculture-state-management-system
