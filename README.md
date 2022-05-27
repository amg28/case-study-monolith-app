# Master thesis case study - case-study-monolith-app

## Notice

This application is a modified version of an application from repository: [weather-app](https://github.com/nirajrajgor/weather-app)

## Local development

### Prerequisites
Please also make sure you have installed [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) already  on your operating system.

Supported Node.js version is v16+.

### Installation 

1. Clone the project using a command:
```sh
git clone https://github.com/amg28/case-study-monolith-app.git

or using SSH

git clone git@github.com:amg28/case-study-monolith-app.git
```

2. Install required dependencies
```
npm install
```

3. Start the project using a command:
```
npm start
```

### Usage

This application after start is available on http://localhost:3000/


### Error handling

In case of an error: 
> Error: error:0308010C:digital envelope routines::unsupported==

Please use a command in your terminal to set an environment variable before starting a project:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

In case command in not recognized, try to use a [Git Bash command line terminal](https://git-scm.com/downloads).