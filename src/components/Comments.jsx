import { useState, useEffect } from "react";
import { getComments, postComment } from "../api/CommentsService";
import { SendHorizontal, Ellipsis } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  // Cargar comentarios
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.error("Error al cargar comentarios:", error);
      }
    };
    fetchComments();
  }, []);

  // Enviar comentario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !newName.trim()) return;

    setLoading(true);
    try {
      await postComment(newName, newComment);
      const updated = await getComments();
      setComments(updated);
      setNewComment("");
      setNewName("");
    } catch (error) {
      console.error("Error al guardar comentario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="comentarios" className="py-20 bg-[#151515] text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h3 className="mb-6 text-xl font-semibold">{t("comments.title")}</h3>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="relative mb-12 rounded-2xl p-6 bg-gradient-to-br from-[#1e1e1f]/90 to-[#2a2a2b]/90 
                     backdrop-blur-lg border border-sky-400/20 shadow-lg"
        >
          <div className="relative grid gap-4">
            <input
              type="text"
              placeholder={t("comments.name-placeholder")}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#1e1e1f] border border-gray-700 focus:border-green-400 outline-none"
            />
            <textarea
              className="w-full p-3 rounded-lg bg-[#1e1e1f] border border-gray-700 focus:border-sky-400 outline-none resize-none"
              rows="3"
              placeholder={t("comments.comment-placeholder")}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>

          <div className="relative mt-6 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-3 bg-[#1e1e1f] border border-sky-400 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              {/* Icono */}
              <SendHorizontal className="w-5 h-5 text-sky-400" />

              {/* Texto con degradado */}
              <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                {loading ? t("comments.sending") : t("comments.send")}
              </span>
            </button>
          </div>
        </form>

        {/* Lista de comentarios */}
        <h3 className="mb-6 text-xl font-semibold">
          {t("comments.text-comments")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comments.length > 0 ? (
            comments.map((c) => (
              <div
                key={c.id}
                className="relative p-4 rounded-xl bg-gradient-to-br from-[#1e1e1f]/90 to-[#2a2a2b]/90
                          backdrop-blur-lg border border-green-400/20 shadow-md"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/5 to-sky-400/5 blur-xl opacity-20 pointer-events-none"></div>

                <p className="relative text-gray-200">{c.comment}</p>
                <span className="relative block text-sm text-sky-400 font-semibold mt-2">
                  - {c.name || "Anónimo"}
                </span>
                <span className="relative block text-xs text-gray-500">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-2">
              No hay comentarios aún. 🚀 Sé el primero en dejar uno.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
