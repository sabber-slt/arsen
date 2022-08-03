export const API_URL = "https://arsentech.chabk.ir/api";

export const fetchTopProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data?.data;
};
