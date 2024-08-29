import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await axios.get('/api/auth/me');
    if (response.data.user) {
      setUser(response.data.user);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
};

export default useAuth;