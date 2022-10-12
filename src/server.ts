import http from "http";

export function server() {
	http.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("Pong.");
	}).listen(8080, "0.0.0.0");
}
