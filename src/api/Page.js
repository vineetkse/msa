const fetchPageAll = async () => {
  const response = await fetch("http://localhost:3004/pages");
  return await response.json();
};

const insertPage = async (data) => {
  const response = await fetch("http://localhost:3004/pages", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

const updatePageById = async (data) => {
  const response = await fetch(`http://localhost:3004/pages/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

export { fetchPageAll, insertPage, updatePageById };
