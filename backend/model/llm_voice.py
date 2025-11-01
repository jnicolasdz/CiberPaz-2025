from TTS.api import TTS
tts = TTS("tts_models/multilingual/multi-dataset/xtts_v2", gpu=True)

def generate_voice(text: str) -> str:
    output_path = "speaker.wav"
    speaker_wav = "/home/astroobot/Workplace/CiberPaz-2025/resources/audio/speaker.wav"
    tts.tts_to_file(text=text,
                    file_path=output_path,
                    speaker_wav=speaker_wav,
                    language="es") 
    return output_path