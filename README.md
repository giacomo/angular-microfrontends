# Angular Microfrontend Architecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.
This project is a microfrontend architecture example using Angular.

## Creation steps

### Create the main empty application

```bash
  ng new --no-create-application
```

### Install module-federation
  
```bash
  yarn add --dev @angular-architects/module-federation
```

### Create a shell application

The shell application is the main application that will load the microfrontends.

```bash
  ng generate application shell
```

### Create the microfrontend applications

The microfrontends will be loaded in the shell to be used correctly.
Anyhow, the microfrontends should also work as a standalone application by itself.

```bash
  ng generate application microfrontend1
  ng generate application microfrontend2
```

### Setting up the host

```bash
  ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
```

### Setting up the remotes (microfrontends)

```bash
  ng g @angular-architects/native-federation:init --project microfrontend1 --port 4201 --type remote
```

## Running the applications

All applications muss be running at the same time. Starting by the microfrontends and then the shell.

```bash
  ng serve microfrontend1
  [...]
  ng serve shell
```

## Accessing the applications

All applications can be accessed by the following URLs:

```bash
  http://localhost:4200/ # Shell
  http://localhost:4200/microfrontend1 # Microfrontend1
  http://localhost:4200/microfrontend2 # Microfrontend2
```

## Building & Deploying the applications

Each application should be deployed by itself.

### Building

```bash
  ng build microfrontend1
  [...]
  ng build shell
```

### Deploying

When running in production you should use a web server to serve the static files.
You should change the production path to the microfrontends with the right urls in the shell application manifest file.

```bash
  dist/shell/assets/federation.manifest.json
```


## Further help

This project was should only seen as an example of how to use microfrontends with Angular.
There are a lot more possibilities to implement microfrontends with Angular. This is just one of them.


