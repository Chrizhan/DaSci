# app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from utils import predict_single

class InputSchema(BaseModel):
    kills: float
    death: float
    assist: float

app = FastAPI(title="ML Predict API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "ML Predict API is running"}

@app.post("/predict")
def predict(payload: InputSchema):
    try:
        result = predict_single(payload.dict())
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Prediction error: " + str(e))
