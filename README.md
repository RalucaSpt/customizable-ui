# Language Switcher & Configurable Sidebar - [Deploy link](https://customizable-ui.vercel.app)

A dynamic Angular app with a menu, footer, language switcher, and sidebar, fully configurable via JSON.


## Features

- **Top Menu**: Responsive, configurable items (e.g., Home, About Us), with `enabled`, `sticky`, and `transparent` properties from config.

- **Footer**: Configurable `enabled` and `sticky` properties.

- **Sidebar**: Configurable `enabled` property, toggle button for expand/collapse, and dynamic submenu based on the current page.

- **Language Switcher**: Displays languages, with properties defined in config and auto-loaded.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo

2. Install dependencies:
   ```bash
    npm install

3. Start the application:
   ```bash
    ng serve
   
4. Configuration
   Modify assets/config.json:
   ```bash
   {
    "languageSwitcher": { "enabled": true, "languages": [...] },
    "sidebar": { "enabled": true, "sticky": true }
   }

# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
