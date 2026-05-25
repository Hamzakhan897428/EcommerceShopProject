const cardKey = "cardItems";
export const loadCart = () => {
  try {
    const data = localStorage.getItem(cardKey);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
export const saveCart = (cardItems) => {
  localStorage.setItem(cardKey, JSON.stringify(cardItems));
};