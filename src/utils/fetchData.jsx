export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '76b648d8d4mshe65e70eac57f5e0p101dadjsnf160222b5c3d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};


export const fetchData = async (url, exerciseOptions) => {
  const res = await fetch(url, exerciseOptions);
  const data = await res.json();
   

  return data;
};