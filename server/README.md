# Django Elastic
A django api for demonstrating elasticsearch with django.


## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Starting the development server with docker 🐳

#### Prerequisites

Make sure you have Docker and docker-compose installed on your machine.

#### Steps to start the server

1. Add environment file .env in server directory with the variables fiven in the .env.example file.
2. Run the following command in the project directory itself.

      ```sh
      docker-compose -f docker/docker-compose.debug.yml up --build
      ```

3. Open <http://localhost:8000> to view it in the browser.

### Starting the development server without docker 📡

#### Prerequisites

Make sure you have Python and django installed on your machine.

> **_NOTE:_**
>
>_The project was made with python version 3.9._ and requires pipenv

### Install pipenv globally
```bash
pip install pipenv
```

1. Create a virtual environment using pipenv where all the required python packages will be installed

```bash
# Use this on Windows
py -m pipenv shell
# Use this on Linux and Mac
python -m pipenv shell
```
2. Install pipenv

```bash
# Windows
pip install pipenv
# Linux and Mac
pip install pipenv
```

3. Install all the project Requirements
```bash
pipenv install 
```
-Apply migrations and create your superuser (follow the prompts)

```bash
# apply migrations and create your database
python manage.py migrate

# Create a user with manage.py
python manage.py createsuperuser
```


4. Run the development server

```bash
# run django development server
python manage.py runserver
```