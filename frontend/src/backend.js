const API_URL = "https://dasci-9.onrender.com/"; // Replace with your real backend URL

export async function getPrediction(data) {
    const response = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch prediction");
    }

    return response.json();  // Example backend returns: { prediction: "gold", score: 23 }
}
