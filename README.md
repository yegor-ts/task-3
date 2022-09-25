# Radency Hometask 3

# Run locally

Clone the project

```bash
    git clone git@github.com:yegor-ts/task-3.git
```

Go to the project directory

```bash
    cd task-3
```

Install dependecies

```bash
    npm install
```

Run application

```bash
    npm start
```

# Database

The application uses [PostgreSQL](https://www.postgresql.org/) and [TypeORM](https://typeorm.io/).

Create a new PostgreSQL database with the name `radency` or the name you specified in the `.env` file.

Create `.env` file in root directory and add following values:
```
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```

When application starts, tables for all entities will be created.

To load the data into the table run the following SQL query:
```
INSERT INTO note (id, name, category, content)
     VALUES (3986481, 'Shopping List', 'Task', 'Tomatoes, bread'),
            (1634932, 'The theory of evolution', 'Random Thought', 'The evolution...'),
            (7773718, 'New Feature', 'Idea', 'Implement new feature'),
            (3031717, 'William Gaddis', 'Quote', 'Power doesnt co...'),
            (3231967, 'Books', 'Task', 'The Lean Startup'),
            (3520139, 'Home Chores', 'Task', 'Clean my house and basement'),
            (8857722, 'English Lessons', 'Task', 'Do my homework project and write essay');
```

# API Description

## Get all notes

Request

`GET /notes/`

Response

```
HTTP/1.1 200 OK
Status: 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 2015

[]
```

## Get note by id

Request

`GET /notes/:id`

Response

```
HTTP/1.1 200 OK
Status: 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 148

{"id":3986481,"name":"Shopping List","created":"2022-09-25T11:36:27.875Z","category":"Task","content":"Tomatoes, bread","dates":"","archived":false}
```

## Create note

Request

`POST /notes/`

Response

```
HTTP/1.1 201 Created
Status: 201 Created
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 131

{"name":"test","content":"test content","category":"Task","id":11,"created":"2022-09-25T15:32:39.269Z","dates":"","archived":false}
```

## Delete note by id

Request

`DELETE /notes/:id`

Response

```
HTTP/1.1 200 OK
Status: 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 0
```

## Update note by id

Request

`PATCH /notes/:id`

Response

```
HTTP/1.1 200 OK
Status: 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 147

{"id":3986481,"name":"Shopping List","created":"2022-09-25T11:36:27.875Z","category":"Task","content":"Tomatoes, bread","dates":"","archived":true}
```

## Get notes stats

Request

`GET /notes/stats`

Response

```
HTTP/1.1 200 OK
Status: 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Keep-Alive: timeout=5
Content-length: 144

{"Task":{"active":7,"archived":4},"Random Thought":{"active":1,"archived":0},"Idea":{"active":1,"archived":0},"Quote":{"active":1,"archived":0}}
```