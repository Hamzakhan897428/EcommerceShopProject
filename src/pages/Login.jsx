import { useEffect, useState } from "react";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔄 Load logged-in user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Register + Login logic
  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      // LOGIN
      const foundUser = users.find(
        (u) =>
          u.email === form.email && u.password === form.password
      );

      if (!foundUser) {
        alert("Invalid email or password ❌");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      setUser(foundUser);
      alert("Login successful ✅");
    } else {
      // REGISTER
      const exists = users.find((u) => u.email === form.email);

      if (exists) {
        alert("User already exists ❌");
        return;
      }

      const newUser = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        password: form.password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      localStorage.setItem("currentUser", JSON.stringify(newUser));
      setUser(newUser);

      alert("Account created successfully ✅");
    }

    setForm({ name: "", email: "", password: "" });
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  // 👤 If user logged in
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow text-center w-96">
          <h2 className="text-xl font-bold mb-2">
            Welcome 👋 {user.name}
          </h2>
          <p className="text-gray-500 mb-4">{user.email}</p>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}