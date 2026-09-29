// Utilidades compartidas por los componentes de ejercicio.

/** Copia desordenada (Fisher-Yates); no modifica la lista original. */
export function mezclar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function aleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

/**
 * Un subejercicio ya aprobado o sin intentos no vuelve a registrarse: si no,
 * se podria acertar (nota 5) y luego bajarla con otro intento.
 */
export function puedeResponder(ev) {
  return ev.estadoCargado && !ev.bloqueado && !ev.cargando;
}
