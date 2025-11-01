import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, set_seed

set_seed(2024)  
prompt = "Africa is an emerging economy because"
model_checkpoint = "microsoft/Phi-3-mini-4k-instruct"

def generate_text(prompt: str) -> str:
    tokenizer = AutoTokenizer.from_pretrained(model_checkpoint,trust_remote_code=True)
    model = AutoModelForCausalLM.from_pretrained(model_checkpoint,
                                             trust_remote_code=True,
                                             torch_dtype="auto",
                                             device_map="cuda")
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, do_sample=True, max_new_tokens=120)
    response= tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response