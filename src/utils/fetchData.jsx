export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7782c003bcmshd64005d3172a0a8p1a4e53jsnd40d9e2d2ed7',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};


export const fetchData = async (url, exerciseOptions) => {
  const res = await fetch(url, exerciseOptions);
  const data = await res.json();
   

  return data;
};