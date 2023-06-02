import axios from 'axios';

const apiURL = 'https://randomuser.me/api';

interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
}

const fetchRandomUserData = async (): Promise<User> => {
  const response = await axios.get(apiURL);
  return response.data.results[0];
};

export default fetchRandomUserData;
