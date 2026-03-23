#Task Manager Web application (Full Stack)

A simple full stack task management app built with 

- React (frontend)
- FastAPI (backend)
- SQLite 
- Docker

##Current Features

- Create tasks
- View all your tasks
- View details for each of your tasks

##Running Locally 

###Backend 
cd backend
uvicorn main:app --reload

###Frontend
cd frontend
npm install
npm run dev

##Running with Docker
In /task-manager: 
docker compose up --build

Frontend:
http://localhost:5173

Backend:
http://localhost:8000/docs
