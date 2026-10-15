const BASE_URL = "http://localhost:3002/api/todos";

export const addItemToServer = async (text, date) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, date }),
  });
  
  return await response.json();

};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    text: serverItem.text,
    date: serverItem.date,
    completed: serverItem.completed,
  };
};

export const fetchFromServer = async () => {
  const response = await fetch(BASE_URL);
  const serverItem = await response.json();
  return serverItem.map(mapServerItemToLocalItem);
};

export const deleteFromServer = async (id) => {
      const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      return await response.json()

}

export const  toggleItemCompleted = async (id) => {

}