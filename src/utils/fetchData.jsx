export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e3c0272822mshbbdd7f4e021f6cbp1912bdjsnafeec80d597d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};


export const fetchData = async (url, exerciseOptions) => {
  const res = await fetch(url, exerciseOptions);
  const data = await res.json();
   

  return data;
};