import axios from 'axios'

const fetchDataFromLink = async (link:string) => {
  try {
    const res = await axios.get(`${link}`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

const fetchDataWithParams = async (params:string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${params}`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

const fetchDataWithLimit = async (params:string, count:number) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${params}/?limit=${count}`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

const fetchDataPramsWithId = async (params:string, id:string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${params}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export const getAllMovieList = async () => {
  try {
    const data = await fetchDataWithParams('films');
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

export const getMovieWithlimit = async (count:number) => {
  try {
    const data = await fetchDataWithLimit('films', count);
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

export const getMovieDataById = async (id:string) => {
  try {
    const data = await fetchDataPramsWithId('films', id);
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}

export const getCharDataFromMovieDetail = async (link:string) => {
  try {
    const data = await fetchDataFromLink(link);
    return data;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
}