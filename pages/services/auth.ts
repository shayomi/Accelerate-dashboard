export const login = async (email: string, password: string) => {
  const response = await fetch(
    "https://devapi.acceler8.africa/api/v1/auth/local",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();

  localStorage.setItem("token", data.token);
  return data;
};
