const BASE_URL = "http://localhost:3002/api/todos";

export const addItemToServer = async (text, date) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, date }),
  });
  const serverItem = await response.json();

  return mapServerItemToLocalItem(serverItem);
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    text: serverItem.text,
    date: serverItem.date,
    completed: serverItem.completed,
  };
};
