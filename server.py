import http.server
import socketserver
import os

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Change to the directory containing the files
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create an object of the above class
handler_object = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), handler_object) as httpd:
    print(f"Server started at http://localhost:{PORT}")
    print("Use the arrow keys (← →) to navigate and 'B' key to select a level")
    print("Press Ctrl+C to stop the server")
    
    # Start the server
    httpd.serve_forever()
