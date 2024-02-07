

export const excersiseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4a39028d52msh4d5a5f3eaf57025p18d91bjsn5f7a0fa7aa87',
      'X-RapidAPI-Host': 'keto-diet.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };