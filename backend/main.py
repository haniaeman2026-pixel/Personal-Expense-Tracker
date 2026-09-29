from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles


BASE_DIR = Path(__file__).resolve().parent.parent

app = FastAPI(
    title="Personal Expense Tracker",
    description="Personal Expense Tracker with Firebase Firestore",
    version="1.0.0",
)


# Serve CSS, JavaScript and other frontend files
app.mount(
    "/assets",
    StaticFiles(directory=BASE_DIR),
    name="assets"
)


# Main UI
@app.get("/")
async def home():
    return FileResponse(BASE_DIR / "index.html")


# Explicit frontend files
@app.get("/style.css")
async def style_css():
    return FileResponse(
        BASE_DIR / "style.css",
        media_type="text/css"
    )


@app.get("/app.js")
async def app_js():
    return FileResponse(
        BASE_DIR / "app.js",
        media_type="application/javascript"
    )


@app.get("/firebase-config.js")
async def firebase_config():
    return FileResponse(
        BASE_DIR / "firebase-config.js",
        media_type="application/javascript"
    )


# API health check
@app.get("/api/health")
async def health():
    return {
        "status": "healthy",
        "message": "Personal Expense Tracker API is running"
    }


# API information
@app.get("/api")
async def api_info():
    return {
        "name": "Personal Expense Tracker API",
        "version": "1.0.0",
        "status": "running"
    }