from backend.model.llm_voice import generate_voice
from backend.model.llm_text import generate_text
from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel

from model import *

router = APIRouter()

@router.post("/llm/voice")
def generate_voice_endpoint(text: str):
    return generate_voice(text)

@router.post("/llm/text")
def generate_text_endpoint(prompt: str):
    return generate_text(prompt)