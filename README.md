# Cashboxtest

# Angular Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# DJANGO

To run the backend part, Use another terminal to change directory into the django folder (cd Django), then change directory into cashboxtest folder (cd cashboxtest), then change directory again into the cashboxtest folder (cd cashboxtest). In this folder, edit the settings.py, change the database details to your database, this should include Name, Host, User and Password. After this you change directory out of this folder (cd ..). Then run the following command:
Make sure you have python installed in your system,
  pip install django
  pip install djangorestframework
  pip install django-cors-headers
After successfully running this installation.
Run 
  python manage.py check 
to check if your application is ok.
Then run 
  python manage.py migrate
To run the migrations already in the project and create the necessary tables in the database.

NOTE: While setting up your database make sure the owner/user has permission to create, delete, update and select. This can be easily achieved by setting the USER as the OWNER of the database.

Then run,
  python manage.py runserver 
to start your backend server so the angular project can connect.
  
