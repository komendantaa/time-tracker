# time-tracker
Time tracker based on Angular5

## Installation

Clone
Perform the clone-to-launch steps with these terminal commands.
```bash
git clone https://github.com/komendantaa/time-tracker.git time-tracker
cd time-tracker
npm install
npm run dev
```

## Simplest deployment
For the simplest deployment, build for development and copy the output directory to a web server.

1. Start with the development build
```bash
npm run build
```
2. Copy everything within the output folder "public" to a folder on the server.

3. Configure the server to redirect requests for missing files to index.html

This is not a production deployment.
See the https://github.com/angular/angular-cli/wiki/build for more details and options.

License
All what you can find at this repo shared under the MIT License
