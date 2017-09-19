const { FuseBox, EnvPlugin, TypeScriptHelpers } = require("fuse-box");
const path = require("path");
process.env.NODE_ENV = "debug";

const fuse = FuseBox.init({
	homeDir: "src/",
	output: "dist/$name.js",
	log: true,
	debug: true,
	plugins: [
		EnvPlugin({ NODE_ENV: "debug" }),
		TypeScriptHelpers(),
	],
	modulesFolder: "../generated"
});

// To avoid problems with HMR settings below set the development server config before you define further bundle configuration
// Furthermore, the config below prevents Fusebox from creating its own HTTP webserver. Instead we create a websocket that listens
// for events on localhost at port 5000
fuse.dev({ httpServer: false, port: 5000, socketURI: "ws://localhost:5000" });

// Below here is the Bundle chain
// Cache is true for HMR
fuse.bundle("app-bundle")
	.instructions("> index.tsx")
	.sourceMaps(true)
	.cache(true)
	.watch()
	.hmr()

fuse.run();

startDevServer();

// We create our own custom HTTP server using an Express.js application. This server serves the index.html page
// and is used to proxy API requests to the locally deployed backend server. The server is started on localhost port 3000
function startDevServer() {
	var express = require('express');
	var app = express();
	var http = require('http');
	var fs = require('fs');

	app.use(express.static('dist'));
	app.get('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
	})


	http.createServer(app).listen(3000);
	console.log("-----------------------DEV SERVER STARTED!-----------------------");
	console.log("Started HTTP dev server on port 3000");
	console.log("Navigate to localhost:3000");
	console.log("-----------------------------------------------------------------");
}

