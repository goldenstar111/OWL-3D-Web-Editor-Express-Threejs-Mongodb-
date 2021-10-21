# Owl 3D Viewer

This needs Node.js/Express.js/Three.js/mongoDB
This express framework is ejs.
![Login page](./assets/doc/main.png)

# How to run
* yarn install
* yarn start
* ![Screen Shot](./assets/doc/screen.png)
## Login Page
### Default login Information
* UserName : admin@oe-web.com
* Password : admin1234
![Login page](./assets/doc/screen1.png)

### Dashboard Page
![Dashboard Chart](assets/doc/screen2.png)
* This is owl 3d scan file from MongoDB.
* This chart is chart.js library
* http://gionkunz.github.io/chartist-js/
* Necessary Collection : 
* [Routing file](./routes/index.js)

### Members Page
* This is CRUD page
* [Routing File](./routes/users.js)
#### Read
![IMG](./assets/doc/screen3.png)

#### Create
![IMG](./assets/doc/screen4.png)
#### Update
![IMG](./assets/doc/screen5.png)
#### Delete
![IMG](./assets/doc/screen6.png)

## Setting Page
[Routing](./routes/setting.js)
This is for necessary database
You can import needed database for model db from different database
![IMG](./assets/doc/screen7.png)

## 3D viewer Page
[Routing](./routes/index.js)
This is 3D viewer page
![IMG](./assets/doc/screen8.png)

## Data Page
[Routing](./routes/data.js)
This is 3D viewer page
![IMG](./assets/doc/screen9.png)
## Database Information
* Please look ./config.js if you want more information
* Database : MongoDB
* Database Name : OwlEyeStudioWebInterface

