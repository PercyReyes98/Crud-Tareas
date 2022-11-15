import { Form, Formik } from "formik";
import { useTarea } from "../context/tareaContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PaginaNuevaTarea() {
  const { crearTarea, mostrarTarea, actualizarTarea } = useTarea();
  const [tarea, setTarea] = useState({
    titulo: "",
    descripcion: "",
  });
  const params = useParams();
  const navegacion = useNavigate();
  useEffect(() => {
    const cargarTarea = async () => {
      if (params.id) {
        const tarea = await mostrarTarea(params.id);
        setTarea({
          titulo: tarea.titulo,
          descripcion: tarea.descripcion,
        });
      }
    };
    cargarTarea();
  }, []);
  return (
    <div>
      <Formik
        initialValues={tarea}
        enableReinitialize={true}
        onSubmit={async (valoresCapturados, actions) => {
          console.log(valoresCapturados);
          if (params.id) {
            await actualizarTarea(params.id, valoresCapturados);
            navegacion("/");
          } else {
            await crearTarea(valoresCapturados);
            navegacion("/");
            //actions.resetForm();
          }
          //actions.resetForm();
          setTarea({
            titulo: "",
            descripcion: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className='bg-slate-400 max-w-sm rounded-md p-4 mx-auto mt-10'>
            <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Editar Tarea" : "Crear Tarea"}</h1>
            <label className="block">Titulo</label>
            <input
              type="text"
              name="titulo"
              placeholder="Escribe el titulo"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.titulo}
            ></input>
            <label className="block">Descripcion</label>
            <textarea
              name="descripcion"
              rows="3"
              placeholder="Escribe la descripcion"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.descripcion}
            ></textarea>
            <button type="submit" disabled={isSubmitting} className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md">
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default PaginaNuevaTarea;
