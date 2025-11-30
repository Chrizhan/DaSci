const API_URL = "https://dasci-9.onrender.com/";

export async function predict(data) {
    const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    });

    return await res.json();
}
