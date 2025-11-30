# train_model.py
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pickle
import os

DATA_PATH = os.environ.get("DATA_PATH", "mldataset.csv")  # default filename

def load_data(path=DATA_PATH):
    df = pd.read_csv(path)
    # Basic cleaning similar to your notebook
    df = df.dropna().copy()
    # Remove extreme outliers by z-score (same logic you used)
    for col in ["kills", "death", "assist"]:
        z = (df[col] - df[col].mean()) / df[col].std()
        df = df[np.abs(z) < 3]
    return df

def preprocess(df):
    X = df[["kills", "death", "assist"]].copy()
    y = df["label"].copy()
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)
    le = LabelEncoder()
    y_enc = le.fit_transform(y)
    return X_scaled, y_enc, scaler, le

def train_and_save(df, model_path="model.pkl", scaler_path="scaler.pkl", encoder_path="encoder.pkl"):
    X, y, scaler, le = preprocess(df)
    model = LogisticRegression(max_iter=1000)
    model.fit(X, y)
    # Save objects
    with open(model_path, "wb") as f:
        pickle.dump(model, f)
    with open(scaler_path, "wb") as f:
        pickle.dump(scaler, f)
    with open(encoder_path, "wb") as f:
        pickle.dump(le, f)
    print("Saved model to", model_path)
    print("Saved scaler to", scaler_path)
    print("Saved encoder to", encoder_path)
    return model, scaler, le

if __name__ == "__main__":
    df = load_data()
    train_and_save(df)
