# PhishWatch
PhishWatch is a website that leverages machine learning to determine whether a URL is phishing or legitimate. Our machine learning model is trained on a dataset from  `https://github.com/GregaVrbancic/Phishing-Dataset`, which includes over 80,000 URLs with 111 features. We utilize the K-Nearest Neighbors classification algorithm to achieve optimal results. The frontend is built with React.js, and FastAPI is used for API endpoints that extracts features from the given url and predict it using our pre-trained model.
# Instructions
Here are the instructions to run our project.
# Running our model
import necessary libraries like numpy, pandas, matplotlib, sckit-learn
<br/>
```sh
pip install -r requirements.txt
```
# running the frontend 
go to frontend directory using command 
```sh
cd frontend
```
install the node_modules and run the development server
```sh
npm install
npm run dev
```
