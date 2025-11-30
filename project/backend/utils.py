# utils.py
import pickle
import numpy as np
import os

MODEL_PATH = os.environ.get("MODEL_PATH", "model.pkl")
SCALER_PATH = os.environ.get("SCALER_PATH", "scaler.pkl")
ENCODER_PATH = os.environ.get("ENCODER_PATH", "encoder.pkl")

# lazy-load
_model = None
_scaler = None
_encoder = None

def load_objects():
    global _model, _scaler, _encoder
    if _model is None:
        with open(MODEL_PATH, "rb") as f:
            _model = pickle.load(f)
    if _scaler is None:
        with open(SCALER_PATH, "rb") as f:
            _scaler = pickle.load(f)
    if _encoder is None:
        with open(ENCODER_PATH, "rb") as f:
            _encoder = pickle.load(f)
    return _model, _scaler, _encoder

def predict_single(payload: dict):
    """
    payload example:
    {"kills": 5, "death": 2, "assist": 8}
    Returns: {"label": "silver", "label_encoded": 1, "probabilities": {...}}
    """
    model, scaler, encoder = load_objects()

    # Ensure keys exist
    required = ["kills", "death", "assist"]
    for k in required:
        if k not in payload:
            raise ValueError(f"Missing required field: {k}")

    x = np.array([[float(payload["kills"]), float(payload["death"]), float(payload["assist"])]])
    x_scaled = scaler.transform(x)
    pred_enc = model.predict(x_scaled)[0]
    probs = model.predict_proba(x_scaled)[0].tolist()
    label = encoder.inverse_transform([int(pred_enc)])[0]

    # Map probabilities to label names
    prob_map = {encoder.inverse_transform([i])[0]: float(probs[i]) for i in range(len(probs))}

    return {"label": label, "label_encoded": int(pred_enc), "probabilities": prob_map}
