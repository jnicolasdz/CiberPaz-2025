from fastapi import FastAPI 
from starlette.middleware.cors import CORSMiddleware 
from service.llm import router


origins = [
    "http://localhost",  
    "http://localhost:9090",  
    "http://localhost:8000",  
]

app = FastAPI(
    title='Two Drive API',
    description='This is the API of Two Drive to manage folders and files of users',
    version='0.5'
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

app.include_router(router)