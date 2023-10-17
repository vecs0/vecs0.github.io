let baseDePreguntas = [
  {
    pregunta: "Según lo visto en clase, ¿qué expresaba la nota del 20 de julio de 1811 en Paraguay?",
    ayudaImg: "imag/documentos-originales-independencia-paraguaya-guias-latinas-18.jpg",
    ayuda: "Fue un documento clave en el proceso independentista paraguayo.",
    respuesta: "La decisión irrevocable de mantener la autonomía e independencia.",
    distractores: ["Establecer la forma de gobierno.", "Permitir libre navegación de los ríos.", "Crear una academia militar."],
  },

  {
    pregunta: "¿Cómo también se conoce la independencia de Brasil en 1822?",
    ayudaImg: "imag/Grito-de-Ipiranga.jpg",
    ayuda: "Marcó el fin del dominio colonial portugués.",
    respuesta: "El Grito de Ipiranga.",
    distractores: ["Grito de Dolores", "Grito de Chuquisaca", "Grito de Asencio"],
  },

  {
    pregunta: "Tras su independencia, ¿qué forma de gobierno adoptaron los pueblos americanos?",
    ayudaImg: "imag/independencia_de_los_paises_latinoamericanos_resumen_2944_600.jpg",
    respuesta: "Republicana.",
    distractores: ["Monarquía", "Centralismo", "Anarquismo"],
  },  

  {
    pregunta: "¿Cuáles países tienen actualmente una economía emergente?",
    respuesta: "Indonesia, Filipinas, Perú, Chile, Rusia.",
    distractores: ["Venezuela, Ecuador, Puerto Rico, Estados Unidos.", "Marruecos, Argelia, China, Alemania.", "Perú, Argentina, Colombia, Rusia."],
  },

  {
    pregunta: "¿En qué consistió la teoría económica neoliberal?",
    ayudaImg: "imag/que_es_el_neoliberalismo_definicion_facil_5838_0_600.jpg",
    respuesta: "Libre mercado, desregulación, minimización del Estado y globalización.",
    distractores: ["Economía social de mercado.", "Economía mixta.", "Economía del bienestar social." ],
  },

  {  
    pregunta: "Según el liberalismo, ¿a qué tienen derecho las personas?",
    respuesta: "A la vida y a la libertad.",
    distractores: ["Censura y vigilancia.", "Pobreza.", "Desplazamiento forzado."],
  },

  {
    pregunta: "¿Cuál es la mayor reserva de agua dulce de América del Sur?",
    ayudaImg: "imag/acuifero-guarani-mapa1.jpg",
    ayuda: "Se extiende por varios países de la región.",
    respuesta: "El Acuífero Guaraní.",
    distractores: ["Sistema kárstico", "Sistema poroso", "Sistema fisurado"],
  },

  {
    pregunta: "¿A quién corresponden estas obras de gobierno?: Creación de un batallón de granaderos para asegurar la independencia.",
    ayuda:"",
    respuesta: "José Gaspar Rodríguez de Francia.",
    distractores: ["Carlos Antonio López", "Fulgencio Yegros", "Fernando de la Mora"],
  },

  {
    pregunta: "¿A quién pertenecen estas obras de gobierno?: Fundición de hierro, ferrocarril, telégrafo, Teatro Municipal, Palacio de Gobierno?",
    ayuda:"",
    respuesta: "Carlos Antonio López.",
    distractores: ["José Gaspar Rodríguez de Francia", "Fulgencio Yegros", "Fernando de la Mora"],
  },

  {
    pregunta: "¿Cuáles fueron algunas causas de los procesos independentistas americanos?",
    ayuda:"",
    respuesta: "Ideales ilustrados, descontento colonial y liderazgos carismáticos.",
    distractores: ["División interna, lucha prolongada, descontento colonial.", "Falta de unidad, ideales ilustrados, intervención extranjera.", "Influencia de la Revolución Francesa, lealtad a la corona, conflictos internos en Europa."],
  },

  {
    pregunta: "¿Quiénes fueron algunos de los líderes independentistas sudamericanos?",
    ayudaImg: "imag/Acción_militar_en_Pueblo_Viejo.jpg",
    respuesta: "Francisco de Miranda, José de San Martín, Simón Bolívar, Manuel Belgrano y José Artigas.", 
    distractores: ["Pedro II, Bartolomé Mitre, Fulgencio Yegros, José de San Martín, José Gaspar Rodríguez de Francia.", "Francisco de Miranda, Simón Bolívar, Domingo F. Sarmiento, Venancio Flores, José Artigas.", "Simón Bolívar, Manuel Belgrano, José Artigas, Fernando de la Mora, Fulgencio Yegros."],
  },

  {
    pregunta: "¿Qué son los recursos renovables según su definición?",
    ayuda:"",
    respuesta: "Recursos con capacidad de regenerarse por sí mismos, como flora, fauna y agua.",
    distractores: ["Recursos no renovables.", "Proceso sostenible.", "Movimiento poblacional."],
  },

  {
    pregunta: "¿A qué se refiere el concepto de recursos no renovables?",
    ayuda:"",
    respuesta: "Recursos que no se reproducen ni regeneran, como los minerales.",
    distractores: ["Recursos renovables.", "Proceso sostenible.", "Movimiento poblacional."],
  },

  {
    pregunta: "¿Qué se entiende por desarrollo sostenible?",
    ayuda:"",
    respuesta: "Satisface necesidades presentes sin comprometer recursos futuros, con equilibrio entre crecimiento, ambiente y bienestar.",
    distractores: ["Recursos no renovables.", "Recursos renovables.", "Movimiento poblacional."],
  },

  { 
    pregunta: "¿A qué se refiere el concepto de movimiento poblacional?",
    ayuda:"",
    respuesta: "Registro de nacimientos, defunciones, matrimonios y otros eventos demográficos.",
    distractores: ["Proceso sostenible.", "Recursos renovables.", "Recursos no renovables."],
  },

  {
    pregunta: "¿Qué es una economía emergente?",
    ayuda:"",
    respuesta: "País en desarrollo que comienza a crecer con su propia producción industrial y exportaciones.",
    distractores: ["Movimiento poblacional.", "Proceso sostenible.", "Recursos no renovables."],
  },

  {
    pregunta: "¿Cuál fue el primer país americano en lograr su independencia?",
    ayuda:"",
    respuesta: "Haití.",
    distractores: ["Jamaica", "Cuba", "Guatemala"],
  },

  {
    pregunta: "Según tu profesor, ¿cuál fue la ideología de José Gaspar Rodríguez de Francia?",
    ayudaImg: "imag/doctor-francia-dictadura-900x600.jpg",
    ayuda: "Gobernó el Paraguay como Dictador Supremo entre 1814 y 1840.",
    respuesta: "Mantenimiento de la independencia y la integridad territorial.",
    distractores: ["Autoritarismo y represión política.", "Aislamiento y falta de relaciones internacionales.", "Legado ambivalente en la historia paraguaya."],
  },

  {
    pregunta: "¿Qué ideas sostuvo el Congreso Extraordinario de Paraguay en 1842?",
    ayuda:"",
    respuesta: "La nación paraguaya es para siempre libre e independiente de todo poder extranjero.",
    distractores: ["Centralización del poder en el Ejecutivo.", "Aislamiento internacional de Paraguay.", "Legado ambivalente de sus políticas."],
  },

  {
    pregunta: "¿A qué proceso corresponde esta definición?: Desplazamiento de personas dentro o fuera de un país.",
    ayuda:"",
    respuesta: "Emigración.",
    distractores: ["Migrantes ilegales.", "Inmigrantes calificados.", "Éxodo rural."],
  }
];