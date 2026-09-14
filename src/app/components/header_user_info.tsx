import { useEffect, useState } from "react";

export default function HeaderUserInfo() {
  const [username, setUsername] = useState<string | null>(
    () => localStorage.getItem("username")
  );

  useEffect(() => {
    const updateUsername = () => {
      setUsername(localStorage.getItem("username"));
    };

    updateUsername();

    window.addEventListener("storage", updateUsername);
    window.addEventListener("username-updated", updateUsername);

    return () => {
      window.removeEventListener("storage", updateUsername);
      window.removeEventListener("username-updated", updateUsername);
    };
  }, []);

  return (
    <div className="headerUserInfo">
      <p>{username}</p>
    </div>
  );
}