import axios from 'axios';

const useAuth = () => {
  const login = async (body) => {
    try {
      const res = await axios.post('http://localhost:3000/login', body);
      return res;
    } catch (error) {
      return error;
    }
  };

  return {
    login,
  };
};

export default useAuth;
