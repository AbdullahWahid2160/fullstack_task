import { useEffect, useState } from "react";
import axios from "axios";

const useUser = () => {
  const [user, setUser] = useState<{ name: string; email: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const randomUserId = Math.floor(Math.random() * 10) + 1; // Random user ID between 1 and 10
        const response = await axios.get(
          `/proxy/api-users/users/${randomUserId}`
        );
        setUser(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useUser;
