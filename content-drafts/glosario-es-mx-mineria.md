# Glosario Chile → México — Vocabulario Minero para es-mx

**Status:** Investigado y listo para aplicar (no requiere vetting — fuentes citadas por término)
**Hallazgo clave de auditoría (2026-07-21):** es-mx ya está PARCIALMENTE mexicanizado (crud 58 vs borra 18; tanques 19 vs estanques 2; mantenimiento 36 vs mantención 13) pero es inconsistente — la página habla los dos dialectos a la vez. Y los dos términos mexicanos de mayor valor SEO no aparecen ni una vez: **ESDE** y **electrodepósito**.

---

## Pares confirmados (aplicar en es-mx)

| Chile (es-cl) | México (es-mx) | Confianza | Restantes en es-mx | Evidencia |
|---|---|---|---|---|
| borra | **crud** | Alta (confirmado por stakeholders + ya domina en es-mx) | 18 | uso actual del sitio |
| SX/EW, electroobtención | **ESDE / electrodepósito** (planta de Extracción por Solventes y Electrodepósito) | Alta | 9 electroobtención; 0 ESDE | Grupo México llama "Planta ESDE" a Buenavista/Cananea — la planta SX más grande del mundo (Revista Geomimet, Metso, Expansión Obras) |
| relaves | **jales** | Alta | 2 | término regulatorio mexicano (NOM-141-SEMARNAT); proveedores mexicanos: "filtros prensa para jales" (fimsa.mx, sodimate.com.mx) |
| mantención | **mantenimiento** | Alta | 13 | mantención es chilenismo puro |
| faena (minera) | **unidad minera / operación** | Alta | 4 | uso estándar MX/PE; "faena" no se entiende en México |
| estanque | **tanque** | Alta | 2 | "estanque" en México = laguna ornamental |
| arriendo | **renta** | Alta | 0 (ya usa renta ×6) | "renta de equipo" es la búsqueda comercial mexicana; "arriendo" es chilenismo |
| queque (de filtro) | **torta (de filtración)** | Alta | 0 (ya usa torta) | fuentes mexicanas de filtros prensa usan "torta" |
| chancado | **trituración** | Alta | 0 (para contenido futuro) | chancado es chilenismo/peruanismo |
| harnero / harneado | **criba / cribado** | Alta | 0 (futuro) | estándar mexicano |

## Pares de confianza media (aplicar con dual-etiqueta o verificar en contexto)

| Chile | México | Nota |
|---|---|---|
| piscina (de proceso/emergencia) | **pileta / presa** | 9 restantes. "Presa" en MX se asocia a presa de jales (tailings dam); para pozas de solución el uso varía por región. Recomendación: "pileta" con "piscina" entre paréntesis la primera vez. |
| refino (rafinato SX) | **refinado** | 5 restantes. Literatura técnica mexicana tiende a "refinado"; "refino" se entiende. Riesgo bajo. |
| ripios (de lixiviación) | **terreros** | 0 en sitio. Para el artículo de México: "terreros" es el término histórico de Cananea. Verificar en el uso moderno. |
| pilas de lixiviación | **patios de lixiviación** | 1 restante. Ambos se entienden; "patios" es el uso histórico mexicano. |

## Términos que NO cambian
settler (jerga SX regional, 14 usos — se mantiene) · PLS · cátodo · espesador · clarificador · filtro prensa · orgánico · electrolito · lixiviación

---

## Regla de aplicación: dual-etiqueta para no romper LATAM

es-mx sirve a TODO hispanohablante fuera de Chile (hreflang `es` → es-mx), incluida Argentina — y un argentino no dice "jales". Regla: **término mexicano como principal + término regional entre paréntesis en la primera mención de cada página**: "jales (relaves)", "planta ESDE (SX/EW)", "crud (borra)". Beneficio doble: la página matchea las búsquedas mexicanas Y sigue siendo comprensible para el resto de LATAM — además Google indexa ambos vocabularios.

## Implicación SEO principal

Las consultas mexicanas objetivo cambian de vocabulario completo:
- `tratamiento de crud planta ESDE` (no "tratamiento de borra SX")
- `deshidratación de jales` / `filtro prensa para jales` (no "relaves")
- `renta de filtro prensa minería` (no "arriendo")
- `limpieza de celdas de electrodepósito` (no "electroobtención")

Metadata (titles/descriptions/keywords) de es-mx debe migrar a este vocabulario — hoy usa el chileno.

## Plan de aplicación
1. Pasada mecánica sobre `messages/es-mx.json` con los pares de confianza alta (con revisión manual de cada reemplazo — "borra" aparece en contextos donde podría ser verbo, etc.).
2. Dual-etiqueta en primera mención por página.
3. Metadata es-mx (layouts): titles/keywords al vocabulario mexicano.
4. Los pares de confianza media: caso por caso durante la pasada.
