
let baseDePreguntas = [
  {
    pregunta: "¿Cómo describirías los eventos de la Revolución Rusa a principios del siglo XX?",
    ayudaImg: "imag/arton12829.jpg",
    ayuda: "Fue un punto de inflexión que transformó radicalmente la sociedad y política de Rusia.",
    respuesta: "Fue un período de agitación política y social que derrocó al régimen zarista e instauró el comunismo soviético.",
    distractores: ["Había gran descontento entre los campesinos y trabajadores.", "Se desató una larga guerra civil entre facciones.", "Rusia sufrió enormemente en la Primera Guerra Mundial."],
  },

  {
    pregunta: "¿En qué consistió el sistema político del Zarismo en Rusia hasta 1917?",
    ayudaImg: "imag/arton12768.jpg",
    ayuda: "El Zar ejercía un poder absoluto sobre Rusia durante siglos hasta el colapso del imperio en 1917.", 
    respuesta: "Era una monarquía autocrática con el Zar como gobernante supremo.",
    distractores: ["No permitía oposición política y aplicaba censura.", "El imperio ocupaba un inmenso territorio multiétnico.", "El Zar tenía poder absoluto sobre el Estado."],
  },

  {
    pregunta: "¿Qué países conformaron la Triple Alianza en América del Sur?",
    respuesta: "Brasil, Argentina y Uruguay.",
    distractores: ["Venezuela, Argentina y Bolivia.", "Brasil, Chile y Argentina.", "Uruguay, Venezuela y Chile."],
  },

  {
    pregunta: "¿Entre qué años se desarrolló la Primera Guerra Mundial?",
    ayudaImg: "imag/I-Guerra-Mundial.jpg",
    respuesta: "De 1914 a 1918.", 
    distractores: ["1917 a 1919", "1914 a 1923", "1917 a 1918"],
  },

  {
    pregunta: "¿A qué se debió el inicio de la Segunda Guerra Mundial en tu opinión?",
    ayuda: "Fue producto de múltiples factores políticos, económicos y sociales de la época.",
    respuesta: "No se puede atribuir a una sola causa, fue un proceso complejo.",
    distractores: ["La invasión alemana de Polonia en 1939.", "Las duras condiciones impuestas a Alemania tras la Primera Guerra.", "La Gran Depresión y el ascenso de regímenes totalitarios."],
  },

  {
    pregunta: "¿Qué países formaron parte de las Potencias del Eje en la Segunda Guerra Mundial?",
    ayudaImg: "imag/Map_of_participants_in_World_War_II.png",
    respuesta: "Alemania, Italia y Japón.",
    distractores: ["Japón, Francia y Reino Unido.", "Italia, Estados Unidos y Unión Soviética.", "Alemania, Italia y Estados Unidos."],
  },  

  {
    pregunta: "¿Cómo describirías los hechos ocurridos durante la Segunda Guerra Mundial?",
    ayuda: "Fue el conflicto armado más devastador del siglo XX a escala global.",
    respuesta: "Fue una guerra total entre 1939 y 1945 con participación de la mayoría de países.",
    distractores: ["Comenzó con la invasión alemana de la Unión Soviética.", "Los nazis perpetraron el Holocausto contra los judíos.", "Estados Unidos lanzó bombas atómicas sobre Japón."],
  },

  {
    pregunta: "¿Sobre qué ciudades japonesas se lanzaron bombas atómicas durante la Segunda Guerra Mundial?",
    ayuda:"",
    respuesta: "Hiroshima y Nagasaki.",
    distractores: ["Tokio y Kioto.", "Osaka y Nagasaki.", "Hiroshima y Kioto."],
  },

  {
    pregunta: "¿Por qué la Revolución Industrial comenzó en Gran Bretaña antes que en otros países europeos?",
    ayuda:"",
    respuesta: "Por una combinación de factores como capital, recursos, mano de obra y desarrollo tecnológico.",
    distractores: ["No fue por el apoyo directo de su gobierno.", "No estuvo influenciada principalmente por otras potencias.", "No fue consecuencia directa de la Revolución Francesa."],
  },

  {
    pregunta: "¿Cuál fue una de las causas principales de la Segunda Guerra Mundial?",
    ayuda:"",
    respuesta: "Las duras condiciones impuestas a Alemania tras la Primera Guerra Mundial.",
    distractores: ["La Gran Depresión de la década de 1930.", "La Guerra Civil Española entre 1936-1939.", "La Revolución Rusa de 1917."],
  },

  {  
    pregunta: "¿Qué líderes mundiales participaron en la Segunda Guerra Mundial?",
    ayudaImg:"imag/5fa53aad147db.jpeg",
    respuesta: "Adolf Hitler, Dwight Eisenhower y Charles de Gaulle.",
    distractores: ["Richard Nixon, Hideki Tojo, Joseph Stalin.", "Albert Einstein, Winston Churchill, Charles de Gaulle.", "Mahatma Gandhi, Benito Mussolini, Adolf Hitler."],
  },

  {
    pregunta: "¿A qué proceso histórico corresponde esta definición?: Un periodo de cambios significativos en las prácticas agrícolas y la producción de alimentos",
    ayuda:"",
    respuesta: "La Revolución Agrícola.",
    distractores: ["Introducción de nuevas tecnologías agrícolas.", "Consecuencias económicas y medioambientales.", "Impacto en la población y la sociedad."],
  },  

  {
    pregunta: "¿Dónde se inició la Revolución Industrial según tus conocimientos?",
    ayuda:"",
    respuesta: "En el Reino Unido, específicamente en las regiones de Lancashire y Midlands.",
    distractores: ["Se extendió por el mundo durante el siglo XIX y principios del XX.", "La industria textil fue de las primeras en adoptar maquinaria.", "Tuvo gran impacto en la sociedad y en las condiciones laborales."],
  },

  {
    pregunta: "¿Qué dos medios de transporte clave surgieron durante la Revolución Industrial?",
    ayuda:"",
    respuesta: "Los ferrocarriles y los barcos de vapor.",
    distractores: ["Telégrafos y carruajes mejorados.", "Ferrocarriles y canales navegables.", "Barcos de vapor y telégrafos." ],
  },

  {
    pregunta: "¿Cuáles fueron algunas de las industrias clave durante la primera Revolución Industrial?",
    ayuda:"",
    respuesta: "La textil, del carbón/hierro y del acero.",
    distractores: ["Construcción, energía y química.", "Carbón/hierro, construcción y vidrio.", "Textil, acero y química."],
  },

  {
    pregunta: "¿Cuáles fueron las etapas de la Primera Guerra Mundial?",
    ayuda:"",
    respuesta: "Guerra de movimientos, guerra de trincheras y segunda guerra de movimientos.",
    distractores: ["Frente oriental y trincheras.", "Revolución Rusa y segunda guerra de movimientos.", "Participación de potencias y guerra de movimientos."],
  },

  {
    pregunta: "¿Qué países de América del Sur participaron en la Segunda Guerra Mundial?",
    ayuda:"",
    respuesta: "Brasil, Argentina y Chile.", 
    distractores: ["Argentina, Uruguay y Colombia.", "Chile, Perú y Brasil.", "Perú, Argentina y Chile."],
  },  

  {
    pregunta: "¿Cómo culminó la Primera Guerra Mundial?",
    ayuda:"",
    respuesta: "Con la firma del Tratado de Versalles.",
    distractores: ["Disolución de imperios coloniales.", "Pandemia de la gripe española.", "Revolución Rusa."],
  },

  {
    pregunta: "¿A qué hace referencia la siguiente afirmación?: Las pérdidas humanas en la Primera Guerra Mundial se estiman en aproximadamente 9 millones.",
    ayuda:"",
    respuesta: "A las terribles consecuencias en vidas humanas del conflicto.",
    distractores: ["Al tratado de paz.", "A la crisis de 1917.", "A las causas de la guerra."],
  },

  {
    pregunta: "En tu opinión, ¿cuál fue la batalla más sangrienta de la Segunda Guerra Mundial?",
    ayuda:"",
    respuesta: "La batalla de Stalingrado.",
    distractores: ["Batalla de Normandía.", "Batalla de las Ardenas.", "Batalla de Berlín."],
  }
];