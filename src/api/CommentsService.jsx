import axios from "axios";

const API_URL = import.meta.env.VITE_COMMENTS_API_URL;

// Obtener comentarios
export const getComments = async () => {
  const res = await axios.get(API_URL+"-latest");
  console.log(res.data);
  return res.data;
};

// Guardar comentario
export const postComment = async (name, comment) => {
  const res = await axios.post(API_URL, { name, comment });
  console.log(res.data);
  return res.data;
};
