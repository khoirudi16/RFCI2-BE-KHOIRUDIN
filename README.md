# CodeDebugging

Code debugging built with NodeJs


# Menambahkan instalasi express framework
    - npm : $ npm install express --save
    - digunakan sebagai dependesi framework node js web application

# Menambahkan instalasi dotenv
    - npm : npm install dotenv
    - digunakan untuk me 'load' / memuat file .env

# Mengubah file env menjadi .env
    - detail isian configurasi bisa dilihat melalui file .env


# Folder src/config/index.js
    
    - old code 
    const config = {
    port: process.env.PORT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    oauthUrl: process.env.OAUTH_URL,
    apiUrl: process.env.API_URL,
    }

    - new code 
    module.exports = {
    port: process.env.PORT,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    oauthUrl: process.env.OAUTH_URL,
    apiUrl: process.env.API_URL
    }   

    catatan : langsung melakukan exports function beberapa properties