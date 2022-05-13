# **CHANGELOG**

All notable changes to this project will be documented in this file.

The format is partially based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## **[v1.5.0] - 2022-05-13**
- ### **Feat**
  - [2022-04-30] Add intl/i18n dropdown and darkmode switch ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/01d0240f73c06799ad39df4badbdd915f3f6619d)) 
  - [2022-04-30] Set the i18n locale from the local storage ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/e721f88c7f41f45c204851f04e8483e10c720d79)) 
  - [2022-04-30] Add style of the login page (and responsive) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/24cdbb92d707a9ca7e27dd4416ac84abea06ba74)) 
  - [2022-05-02] Add style of the dashboard page ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/0a8ef1e925b57befcd6b55b938ffe057ad58ce07)) 
  - [2022-05-02] Add style of the message component ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/8b244def8c7ba6446e2365c66f7d305a13b371ad)) 
  - [2022-05-02] Add style of the tag ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/3356d84fefc275900809164a8b6fd37f97f97557)) 
  - [2022-05-04] Add autoscroll when the chat is updated ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/9bae3e65e1de560a3c03059c7fb345599291a8fa)) 
  - [2022-05-04] Add the page 404 ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/a75af00e33f651b81c0066cee9b597fd88c6730d)) 

- ### **CI**
  - [2022-05-12] Update the ci pipeline ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/38b9d5b0c0cc852d6f49f1281fc4e86ea5b4b09f)) 
  - [2022-05-13] Update the ci pipeline. remove e2e tests and heroku deployment ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/be819d90bbd17ad77cb530dd0a130768b815dcac)) 
  - [2022-05-13] Add automatic deployment to Heroku in the prepush git hook for the moment ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/a1ae97979f6bfd7a79ad9ead5c64a35b8b4a10b0)) 

- ### **Fix**
  - [2022-04-30] Local storage is not defined ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/c539b6db9b24d72e2e5773733400943e7adb83ef)) 
  - [2022-04-30] Navigator is not defined ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/a3195a8bba8a591b5d4b1174d1a06a27e4ae2730)) 

- ### **Chore**
  - [2022-05-03] Set the i18n content and use it ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/6a9728f1b566b579fc2e2eca35ecb770ac007182)) 
  - [2022-05-05] Clean up the tests scaffolding ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/040be3dc7a061836e764314d012de0f0767b1263)) 

- ### **Test**
  - [2022-04-27] Add coverage config to Vitest so SonarQube can display the results ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/792d9e6bbc1225607f548a840b4f46416102e16a)) 
  - [2022-05-03] Add unit tests ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/f2bcb5a3d9d5bfd07564b37d84e6f0e5196eab31)) 
  - [2022-05-12] Add e2e tests with cypress ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/2ecb2f5ed4df34ebb9b48ce1db8b0fa3a9f998f7)) 


## **[v1.0.0] - 2022-04-27**
- ### **CI**
  - [2022-04-13] Set mongodb local in docker development and production environments ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/4e570f421734d08484c596a6b8a245278612e801)) 

- ### **Test**
  - [2022-04-27] Add unit tests (utils and components behavior) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/3efd7376181759790e1a603b123ed53234010744)) 
  - [2022-04-27] Check why VITE_API_URL is undefined, trying with github secret ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/4ff36e93acd0763862df88d173154639b394bdc1)) 
  - [2022-04-27] Check why VITE_API_URL is undefined, trying with action env variable ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/71eb26a506fab9d06436124a010ed5a407b48a9c)) 
  - [2022-04-27] Skip tests that may fail (related to date and time) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/44db8e7b8fe4223124311aee6d8f3cfa1b0bd6d1)) 

- ### **Feat**
  - [2022-04-15] Send and display messages ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/ddadd014844915fa7e5c89ba337f01351dfd40a1)) 
  - [2022-04-15] Create the component Loader ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/2a50c3512f478ba871c49c7b8dc57496eecb2db4)) 
  - [2022-04-15] Create the component Tag and show the connection messages ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/cd0c4dff07ad2320d126bc5476fd7d32be092427)) 
  - [2022-04-17] Create the component BoardInfo and set the store using local storage ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/4043d0891b4f767bf3d49a297cf70e35e0999ace)) 
  - [2022-04-18] Create the board with the current connected users ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/50dcc2349cc589f971159c23817525891bba6750)) 

- ### **Docs**
  - [2022-04-27] Create new release (v1.0.0) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/0404aed29dc7d5d28d114552b76156db95501f33)) 
  
## **[v0.1.1] - 2022-04-13**
- ### **Chore**
  - [2022-04-11] Set MongoDB Atlas in PROD mode and Docker PROD mode ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/2e54483306a251a99a43f061a2ad74b208d24ed1)) 
  
- ### **Fix**
  - [2022-04-11] Remove ENV reader from the pipeline ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/82f2d2d09b3f2b04bfa4f534c7706518232edb77)) 
  - [2022-04-12] Cannot switch between mongodb and mongodb atlas according to the environment ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/6966d530642455ccc2ab493c587d858dc1de7bb8)) 
  - [2022-04-12] The VITE_API_URL env variable is undefined when the actions pipeline runs ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/10883b036a5e0ee5dc82c5280166cb231be58152)) 
  - [2022-04-12] The VITE_API_URL env variable is undefined when the actions pipeline runs ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/fe295661e0a422cc1aa037097732a65cb60547cb)) 
  - [2022-04-12] The VITE_API_URL env variable is undefined when the actions pipeline runs (fix) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/5fc381bb409f5b02ae849d7bb922316b656d0b44)) 
  
- ### **CI**
  - [2022-04-11] Set the current APP versions in ENV variables ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/f892d3cee4d429562e0b6c611c0df45135275bee)) 

## **[v0.1.0] - 2022-04-10**

- ### **Feat**
  - [2022-03-10] Create first version of the login and chat page ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/71c429b9dfd1c359c067f5e7a166615410db51e9))

- ### **Fix**
  - [2022-03-10] Docker-compose.prod wasn't working properly ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/8e81db9650af26a769583631aa2ea37611616640))
  - [2022-03-10] Package-lock.json crashes ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/574635c7e24e6ddd052737d338120e24fd17943a))
  - [2022-03-10] Package-lock.json crashes (fix) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/d726de6e6e5862ac57d54fa8173da63ae5cc7c9d))
  - [2022-03-22] Remove duplication of test checks in pre-push hook ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/e948b75b51165cfa5af4b198aee3b7901fd1fc89))
  - [2022-03-23] Vite ENV variables are undefined in production mode ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/b02dba2809afdfd297cb2b4fe2da192e8be7d6ae))
  - [2022-03-27] Difference between Docker prod and real prod environments ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/f4641b887ec0544709eef0f2eb055d70db0cf99d))
  - [2022-03-27] Difference between Docker prod and real prod environments (fix) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/a9b802ad3d80a229c2a49fd6c24492cfd5eaa609))

- ### **CI**
  - [2022-03-14] Add API APP to the docker-compose files ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/1d83accc8e3f5970e9fda32e5c1ace326d6ec746))
  - [2022-03-14] Add API APP to the docker-compose files (fix) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/3ffeece94113a5f86265792ab08bc4cf97960eac))
  - [2022-03-20] Build Docker image and deploy in Dev branch ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/b60b01ec72433172d86730df580c218473560ede))
  - [2022-03-21] Finish up the Docker config to make possible the mix develop between UI and API ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/ed5965c6f6cc252d3163ae6e367db439943875bd))

- ### **Test**
  - [2022-03-19] Add sonarqube ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/607b7921fae6420e504cfdc4fc6ced6a7c969e49))
  - [2022-03-20] Run SonarQube before pushing on main and dev ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/463976aa88918f4a7a6df53b3b38e10cf0ad5ab3))

- ### **Chore**
  - [2022-03-07] Dockerize the app using development and production environments ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/d8d320392a97ef787ed53390292d0e2960e85bc3))
  - [2022-03-07] Create CI/CD pipeline using Docker ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/56af7302a18e6861270c89bf12a0745e35ddd9ac))
  - [2022-03-09] Deploy the app to Heroku ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/ec34e4f09c79721a16e441000b155d4772d01420))
  - [2022-03-09] Create docker-compose.prod for real production environment ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/e1cc0d658cb8ec7a1ed389445833648492a04e5a))
  - [2022-03-11] Set up Husky and commit message checking script ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/9ce13f4b26cf970383d537a85ae7276c5a1b0b13))
  - [2022-03-20] Set up the project structure to start to develop with sockets ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/a14aa29a17096fb0e82287896fe2014eaacdf79a))
  - [2022-03-22] Set ENV variable for socket server depending DEV or PROD environment ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/1955770ad4d8b781f8849308012da38b5294ed10))
  - [2022-03-22] Set ENV variable for socket server depending DEV or PROD environment (fix) ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/f0c33a4fe37877161e2b21e0ad22dfe4573c8b96))

- ### **Docs**
  - [2022-03-29] Add comments and fix code smells ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/95cc53e5638fb116232487be9227d0099dc2e2be))
  - [2022-04-10] Create CHANGELOG and modify README ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/40b4ac327d9a984aa4774e4dad8137687fff44f8))

- ### **Build**
  - [2022-04-10] Set coverage with vitest ([View commit](https://github.com/IvaanTorres/ui-real-time-chat-app/commit/650339db6d257c9d336be3ac0dc6c3bbcb51eeed))
