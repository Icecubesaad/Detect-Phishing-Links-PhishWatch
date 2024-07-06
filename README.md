# PhishWatch
PhishWatch is a website that leverages machine learning to determine whether a URL is phishing or legitimate. Our machine learning model is trained on a dataset from  `https://github.com/GregaVrbancic/Phishing-Dataset`, which includes over 80,000 URLs with 111 features. We utilize the K-Nearest Neighbors classification algorithm to achieve optimal results. The frontend is built with React.js, and FastAPI is used for API endpoints that extracts features from the given url and predict it using our pre-trained model.
# Instructions
Here are the instructions to run our project.
# Running our model
import necessary libraries like numpy, pandas, matplotlib, sckit-learn
<br/>
```sh
pip install numpy
pip install pandas
pip install matplotlib
pip install -U scikit-learn
```
# Spinning up the API

go to the api directory
```sh
cd api
```
install necessary libraries like fastapi,pydantic, validators <br/>
```sh
pip install fastapi 
pip install pydantic
pip install validators
```
to run the api use this command <br/>
```sh
fastapi dev main.py
```
# Extracting features
Extracting features is the most important part of our project. This part of our project extracts all the 111 features from the url that then determines wether the url is phishing or not by predicting the outcomes through our pre-trained model. To achieve this, we need many http libraries, along with the couting number of entities in the url. For Feature extraction, you will need to install these libraries.
install necessary libraries 
```sh
pip install urllib3
pip install re
pip install socket
pip install dnspython
pip install whois
pip install pyOpenSSL
pip install requests
pip install datetime
pip install ipwhois
pip install beautifulsoup4
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
