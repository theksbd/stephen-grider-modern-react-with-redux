import axios from 'redaxios';

// 0K7FjZI4n1Mg2_ugP4mL_y89qPRhm8tsZsRUYvYDDXg

const searchImages = async searchTerm => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 0K7FjZI4n1Mg2_ugP4mL_y89qPRhm8tsZsRUYvYDDXg'
    },
    params: {
      query: searchTerm
    }
  });

  return response.data.results;
};

export default searchImages;
