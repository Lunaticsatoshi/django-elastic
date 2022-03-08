# Django Elastic
A repository to host test project for demonstrating elasticsearch with django.


### 🏗️ Built With

<div>

[<img src="https://img.shields.io/badge/-Next-FFFFFF?style=for-the-badge&labelColor=black&logo=nextdotjs&logoColor=white">](https://nextjs.org/)

[<img src="https://img.shields.io/badge/-SCSS-cc6699?style=for-the-badge&labelColor=black&logo=sass&logoColor=cc6699">](https://sass-lang.com/)

[<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&labelColor=black&logo=tailwind-css&logoColor=white" >](https://tailwindcss.com/)

[<img src="https://img.shields.io/badge/-Python-306998?style=for-the-badge&labelColor=black&logo=python&logoColor=4b8bbe" >](https://www.python.org/)

[<img src="https://img.shields.io/badge/-Django-092e20?style=for-the-badge&labelColor=black&logo=Django&logoColor=092e20" >](https://www.djangoproject.com/)

[<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&labelColor=black&logo=sqlite&logoColor=white" >](https://www.sqlite.org/index.html)

[<img src="https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc">](https://www.typescriptlang.org/)

</div>

## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Clone the repo
1. Clone the repository using the following command

```bash
git clone https://github.com/Lunaticsatoshi/django-elastic.git
# After cloning, move into the directory having the project files using the change directory command
cd django-elastic
```

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


### Run Client

1 Install dependencies

```sh
yarn install
```

2. Run the dev server

```sh
yarn dev
```