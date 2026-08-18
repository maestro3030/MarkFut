/* =========================================================
   MARKFUT — data layer
   Todo lo de abajo es DATA DE EJEMPLO (placeholder) para que
   la web funcione de forma autónoma en GitHub Pages sin backend.
   Sustituye TRANSFERS / RUMORS / TEAMS / TRAJECTORIES por datos
   reales desde tu API (fetch) cuando la tengas lista.
========================================================= */

const COMP_LABEL = { laliga:'LaLiga EA Sports', laliga2:'LaLiga Hypermotion' };

// ---- Fichajes confirmados (mercado de verano 2026, ventana abierta 1 jul – 1 sep 2026) ----
const TRANSFERS = [
  {name:'Ibrahim Konaté', symbol:'$KONATE', pos:['DFC'], from:'Liverpool FC', to:'Real Madrid', fee:'€45.0M', date:'22 jul 2026', comp:'laliga'},
  {name:'Karim Adeyemi', symbol:'$ADEYEMI', pos:['DC','EI'], from:'Borussia Dortmund', to:'FC Barcelona', fee:'€22.0M (+€7.0M var.)', date:'28 jul 2026', comp:'laliga'},
  {name:'Ronald Araújo', symbol:'$ARAUJO', pos:['DFC'], from:'FC Barcelona', to:'Liverpool FC', fee:'Cesión (opción €55.0M)', date:'10 ago 2026', comp:'laliga'},
  {name:'Morten Hjulmand', symbol:'$HJULM', pos:['MC','MCD'], from:'Sporting CP', to:'Atlético de Madrid', fee:'€40.0M', date:'19 jul 2026', comp:'laliga'},
  {name:'Robert Lewandowski', symbol:'$LEWAN', pos:['DC'], from:'FC Barcelona', to:'Chicago Fire (MLS)', fee:'Libre — fin de contrato', date:'29 jun 2026', comp:'laliga'},
  {name:'Brais Méndez', symbol:'$BMENDEZ', pos:['MCO','MC'], from:'Real Sociedad', to:'Columbus Crew (MLS)', fee:'Traspaso', date:'15 jul 2026', comp:'laliga'},
  {name:'Quilindschy Hartman', symbol:'$HARTMAN', pos:['LI'], from:'Feyenoord', to:'RCD Espanyol', fee:'€6.5M', date:'06 ago 2026', comp:'laliga'},
  {name:'Jean Ives Valou', symbol:'$JVALOU', pos:['DFC'], from:'Villarreal CF (cantera)', to:'Getafe CF', fee:'€1.2M', date:'02 ago 2026', comp:'laliga'},

  {name:'Pierre-Emerick Aubameyang', symbol:'$AUBA', pos:['DC'], from:'Al-Qadsiah FC', to:'Deportivo de La Coruña', fee:'Libre', date:'08 ago 2026', comp:'laliga2'},
  {name:'Ximo Navarro', symbol:'$XNAVARRO', pos:['LD','DFC'], from:'Deportivo de La Coruña', to:'Deportivo de La Coruña', fee:'Renovación · 2027', date:'20 jul 2026', comp:'laliga2'},
  {name:'Guido Rodríguez', symbol:'$GRODRI', pos:['MCD'], from:'Valencia CF', to:'Valencia CF', fee:'Renovación · 2028', date:'11 jul 2026', comp:'laliga2'},
  {name:'Bright Ede', symbol:'$BEDE', pos:['ED'], from:'Libre', to:'Deportivo de La Coruña', fee:'Libre', date:'24 jul 2026', comp:'laliga2'},

  {name:'Diego Villares', symbol:'$VILLARES', pos:['MC'], from:'Deportivo de La Coruña', to:'Deportivo de La Coruña', fee:'Renovación', date:'05 jul 2026', comp:'laliga2'},
  {name:'Sergio Arribas', symbol:'$ARRIBAS', pos:['MCO','DC'], from:'UD Almería', to:'UD Almería', fee:'Renovación', date:'14 jul 2026', comp:'laliga2'},
];

// ---- Rumores / fichajes inminentes ----
const RUMORS = [
  {name:'Vinicius Jr', symbol:'$VINI', pos:['EI','ED'], club:'Real Madrid', targets:'Renovación estancada — el Arsenal espera', prob:30, value:'€150.0M', note:'Vinicius ha vuelto a los entrenamientos mientras su renovación con el Real Madrid sigue sin desbloquearse. El Arsenal mantendría el seguimiento a la espera de novedades en las próximas semanas.', updated:'hace 5 h'},
  {name:'Julián Álvarez', symbol:'$JALVA', pos:['DC','MCO'], club:'Atlético de Madrid', targets:'FC Barcelona (prioridad del jugador)', prob:38, value:'€150.0M', note:'El delantero argentino querría salir del Atlético con el Barcelona como destino preferido, aunque el club rojiblanco no contempla facilitar la salida a un rival directo de LaLiga. Arsenal y PSG también siguen la operación.', updated:'hace 8 h'},
  {name:'João Cancelo', symbol:'$CANCELO', pos:['LD','LI'], club:'Al-Hilal', targets:'FC Barcelona', prob:52, value:'€20.0M', note:'El lateral portugués, que ya vistió de azulgrana a préstamo, estaría cada vez más cerca de regresar al Barcelona en esta ventana estival.', updated:'hace 14 h'},
  {name:'Thiago Almada', symbol:'$TALMADA', pos:['MCO','ED'], club:'Club Atlético River Plate', targets:'Atlético de Madrid', prob:60, value:'€20.0M (50% ficha)', note:'Acuerdo avanzado entre ambos clubes; el Atlético espera la confirmación definitiva del jugador para cerrar el traspaso.', updated:'hace 10 h'},
  {name:'William Saliba', symbol:'$SALIBA', pos:['DFC'], club:'Arsenal FC', targets:'FC Barcelona / Real Madrid', prob:18, value:'€70.0M', note:'El central francés entra en la agenda de los dos grandes de LaLiga como posible refuerzo defensivo, aunque el Arsenal no tendría intención de negociar su salida.', updated:'hace 1 día'},
  {name:'Adrià Pedrosa', symbol:'$PEDROSA', pos:['LI'], club:'Elche CF', targets:'Cádiz CF', prob:27, value:'€2.5M', note:'El lateral, cedido la pasada campaña por el Sevilla, entra en el radar del Cádiz para reforzar el carril izquierdo de cara al arranque en LaLiga2.', updated:'hace 1 día'},
];

// ---- Formaciones (plantillas de coordenadas, % dentro del campo) ----
const FORMATIONS = {
  '4-3-3': [
    {pos:'POR', x:50, y:92},
    {pos:'LI', x:14, y:73},{pos:'DFC', x:36, y:80},{pos:'DFC', x:64, y:80},{pos:'LD', x:86, y:73},
    {pos:'MC', x:28, y:52},{pos:'MC', x:50, y:46},{pos:'MC', x:72, y:52},
    {pos:'EI', x:18, y:18},{pos:'DC', x:50, y:10},{pos:'ED', x:82, y:18}
  ],
  '4-2-3-1': [
    {pos:'POR', x:50, y:92},
    {pos:'LI', x:14, y:73},{pos:'DFC', x:36, y:80},{pos:'DFC', x:64, y:80},{pos:'LD', x:86, y:73},
    {pos:'MCD', x:36, y:56},{pos:'MCD', x:64, y:56},
    {pos:'MCO', x:50, y:36},{pos:'EI', x:18, y:30},{pos:'ED', x:82, y:30},
    {pos:'DC', x:50, y:10}
  ],
  '4-4-2': [
    {pos:'POR', x:50, y:92},
    {pos:'LI', x:14, y:73},{pos:'DFC', x:36, y:80},{pos:'DFC', x:64, y:80},{pos:'LD', x:86, y:73},
    {pos:'EI', x:16, y:46},{pos:'MC', x:38, y:50},{pos:'MC', x:62, y:50},{pos:'ED', x:84, y:46},
    {pos:'DC', x:38, y:12},{pos:'DC', x:62, y:12}
  ],
  '3-5-2': [
    {pos:'POR', x:50, y:92},
    {pos:'DFC', x:28, y:78},{pos:'DFC', x:50, y:82},{pos:'DFC', x:72, y:78},
    {pos:'LI', x:10, y:50},{pos:'MC', x:33, y:50},{pos:'MC', x:50, y:44},{pos:'MC', x:67, y:50},{pos:'LD', x:90, y:50},
    {pos:'DC', x:40, y:12},{pos:'DC', x:60, y:12}
  ]
};

// ---- Bancos de nombres para generar plantillas de forma determinista ----
const FIRST_NAMES = ['Adrián','Álvaro','Iker','Marc','Pau','Hugo','Diego','Rubén','Nacho','Mario','Sergio','Aitor','Unai','Jon','Gonzalo','Nico','Bruno','Marcos','Iván','Yeray','Eneko','Raúl','Óscar','Carlos','Roberto','Fran','Miguel','Xabi','Asier','Toni'];
const LAST_NAMES = ['García','Fernández','López','Martínez','Sánchez','Pérez','Gómez','Ruiz','Díaz','Moreno','Muñoz','Alonso','Romero','Navarro','Ortega','Iglesias','Delgado','Castro','Vidal','Rey','Suárez','Vázquez','Serrano','Blanco','Molina','Cabrera','Herrera','Peña','Lozano','Carrasco'];
function hashSeed(str){let h=0;for(let i=0;i<str.length;i++){h=(h*31+str.charCodeAt(i))>>>0;}return h;}
function seededPick(seed, arr){return arr[seed % arr.length];}
function generatedName(teamId, idx){
  const s1 = hashSeed(teamId+'-f-'+idx);
  const s2 = hashSeed(teamId+'-l-'+idx);
  return seededPick(s1, FIRST_NAMES)+' '+seededPick(s2, LAST_NAMES);
}

// ---- Equipos: LaLiga EA Sports (20) y LaLiga Hypermotion (22) ----
// Temporada 2026/27 — composición verificada: LaLiga incorpora a Racing de Santander,
// Deportivo de La Coruña y Málaga CF (ascendidos); descienden Real Oviedo, RCD Mallorca
// y Girona FC. LaLiga2 (Hypermotion) suma Girona, Mallorca y Oviedo, más los ascendidos
// desde Primera Federación (Tenerife, Eldense, Sabadell, Celta Fortuna). La propia
// Primera Federación ya no se muestra como competición en esta web (a petición del
// cliente): solo se listan los 20 + 22 equipos de las dos categorías profesionales.
const TEAM_LIST = [
  // LaLiga (20)
  {id:'rmadrid', name:'Real Madrid', comp:'laliga', formation:'4-3-3'},
  {id:'barca', name:'FC Barcelona', comp:'laliga', formation:'4-3-3'},
  {id:'atmadrid', name:'Atlético de Madrid', comp:'laliga', formation:'4-4-2'},
  {id:'athletic', name:'Athletic Club', comp:'laliga', formation:'4-2-3-1'},
  {id:'rsociedad', name:'Real Sociedad', comp:'laliga', formation:'4-3-3'},
  {id:'betis', name:'Real Betis', comp:'laliga', formation:'4-2-3-1'},
  {id:'villarreal', name:'Villarreal CF', comp:'laliga', formation:'4-4-2'},
  {id:'sevilla', name:'Sevilla FC', comp:'laliga', formation:'4-3-3'},
  {id:'valencia', name:'Valencia CF', comp:'laliga', formation:'4-4-2'},
  {id:'celta', name:'RC Celta de Vigo', comp:'laliga', formation:'4-2-3-1'},
  {id:'osasuna', name:'CA Osasuna', comp:'laliga', formation:'4-4-2'},
  {id:'rayo', name:'Rayo Vallecano', comp:'laliga', formation:'4-3-3'},
  {id:'getafe', name:'Getafe CF', comp:'laliga', formation:'4-4-2'},
  {id:'alaves', name:'Deportivo Alavés', comp:'laliga', formation:'4-2-3-1'},
  {id:'espanyol', name:'RCD Espanyol', comp:'laliga', formation:'4-4-2'},
  {id:'levante', name:'Levante UD', comp:'laliga', formation:'4-2-3-1'},
  {id:'elche', name:'Elche CF', comp:'laliga', formation:'4-4-2'},
  {id:'racing', name:'Racing de Santander', comp:'laliga', formation:'4-3-3'},
  {id:'depor', name:'Deportivo de La Coruña', comp:'laliga', formation:'4-2-3-1'},
  {id:'malaga', name:'Málaga CF', comp:'laliga', formation:'4-4-2'},
  // LaLiga2 · Hypermotion (22)
  {id:'cadiz', name:'Cádiz CF', comp:'laliga2', formation:'4-4-2'},
  {id:'albacete', name:'Albacete Balompié', comp:'laliga2', formation:'4-4-2'},
  {id:'almeria', name:'UD Almería', comp:'laliga2', formation:'4-3-3'},
  {id:'andorra', name:'FC Andorra', comp:'laliga2', formation:'4-4-2'},
  {id:'burgos', name:'Burgos CF', comp:'laliga2', formation:'4-4-2'},
  {id:'castellon', name:'CD Castellón', comp:'laliga2', formation:'4-2-3-1'},
  {id:'sabadell', name:'CE Sabadell', comp:'laliga2', formation:'4-4-2'},
  {id:'celtafortuna', name:'Celta Fortuna', comp:'laliga2', formation:'4-3-3'},
  {id:'ceuta', name:'AD Ceuta', comp:'laliga2', formation:'4-4-2'},
  {id:'cordoba', name:'Córdoba CF', comp:'laliga2', formation:'4-4-2'},
  {id:'eldense', name:'CD Eldense', comp:'laliga2', formation:'4-4-2'},
  {id:'eibar', name:'SD Eibar', comp:'laliga2', formation:'4-2-3-1'},
  {id:'girona', name:'Girona FC', comp:'laliga2', formation:'3-5-2'},
  {id:'granada', name:'Granada CF', comp:'laliga2', formation:'4-4-2'},
  {id:'leganes', name:'CD Leganés', comp:'laliga2', formation:'4-4-2'},
  {id:'laspalmas', name:'UD Las Palmas', comp:'laliga2', formation:'4-3-3'},
  {id:'mallorca', name:'RCD Mallorca', comp:'laliga2', formation:'4-4-2'},
  {id:'oviedo', name:'Real Oviedo', comp:'laliga2', formation:'4-4-2'},
  {id:'rsociedadb', name:'Real Sociedad B', comp:'laliga2', formation:'4-2-3-1'},
  {id:'sporting', name:'Real Sporting de Gijón', comp:'laliga2', formation:'4-4-2'},
  {id:'valladolid', name:'Real Valladolid', comp:'laliga2', formation:'4-3-3'},
  {id:'tenerife', name:'CD Tenerife', comp:'laliga2', formation:'4-4-2'},
];

// ---- Plantillas curadas — temporada 2026/27 ----
// LaLiga EA Sports: los 20 equipos, investigados con fuentes actualizadas de agosto 2026
// (fichajes de verano incluidos: Konaté al Madrid, Adeyemi al Barça, salida de Lewandowski
// y cesión de Araújo al Liverpool, Hjulmand al Atlético, etc.)
// LaLiga Hypermotion: 9 de los 22 equipos con plantilla real verificada; el resto usa
// nombres generados de forma ilustrativa (ver generatedName) hasta conectar una API real.
const CURATED_ROSTERS = {
  // ---- LaLiga EA Sports (20/20) ----
  rmadrid: ['Thibaut Courtois','Dani Carvajal','Ibrahim Konaté','Dean Huijsen','Álvaro Carreras','Federico Valverde','Aurélien Tchouaméni','Jude Bellingham','Vinicius Jr','Kylian Mbappé','Franco Mastantuono'],
  barca: ['Joan García','Jules Koundé','Ronald Araújo','Pau Cubarsí','Álex Balde','Marc Casadó','Frenkie de Jong','Pedri','Karim Adeyemi','Ferran Torres','Lamine Yamal'],
  atmadrid: ['Jan Oblak','Nahuel Molina','José María Giménez','Robin Le Normand','Alejandro Grimaldo','Morten Hjulmand','Koke','Álex Baena','Giuliano Simeone','Julián Álvarez','Alexander Sørloth'],
  athletic: ['Unai Simón','Andoni Gorosabel','Dani Vivian','Aymeric Laporte','Yuri Berchiche','Mikel Vesga','Mikel Jauregizar','Oihan Sancet','Nico Williams','Iñaki Williams','Gorka Guruzeta'],
  alaves: ['Antonio Sivera','Nahuel Tenaglia','Facundo Garcés','Nikola Maras','Jonny Otto','Ander Guevara','Antonio Blanco','Carles Aleñá','Abde Rebbach','Toni Martínez','Lucas Boyé'],
  betis: ['Álvaro Valles','Héctor Bellerín','Marc Bartra','Natan','Junior Firpo','Marc Roca','Pablo Fornals','Isco','Antony','Abde Ezzalzouli','Cucho Hernández'],
  celta: ['Iván Villar','Sergio Carreira','Carl Starfelt','Unai Núñez','Javi Galán','Damián Rodríguez','Ilaix Moriba','Iago Aspas','Williot Swedberg','Hugo Álvarez','Borja Iglesias'],
  depor: ['Germán Parreño','Ximo Navarro','Dani Barcia','Arnau Comas','Giacomo Quagliata','José Ángel Jurado','Diego Villares','Mario Soriano','David Mella','Yeremay Hernández','Pierre-Emerick Aubameyang'],
  elche: ['Matías Dituro','Buba Sangaré','Pedro Bigas','David Affengruber','Víctor Chust','Marc Aguado','Federico Redondo','Gonzalo Villar','Germán Valera','Lucas Cepeda','Rafa Mir'],
  espanyol: ['Marko Dmitrovic','Rubén Sánchez','Leandro Cabrera','Pablo Ramón','Quilindschy Hartman','Pol Lozano','Gabriel Moscardó','Edu Expósito','Jofre Carreras','Javi Puado','Kike García'],
  getafe: ['David Soria','Kiko Femenía','Djené','Abdel Abqar','Davinchi','Mario Martín','Yvan Neyou','Ramón Terrats','Christantus Uche','Borja Mayoral','Juanmi'],
  levante: ['Pablo Campos','Víctor García','Adrián de la Fuente','Aïssa Mandi','Manu Sánchez','Oriol Rey','Kervin Arriaga','Carlos Álvarez','Roger Brugué','Iván Romero','Karl Etta Eyong'],
  malaga: ['Alfonso Herrero','Diego Murillo','Einar Galilea','Ángel Recio','Álex Pastor','Juanpe Jiménez','Carlos Dotor','Rafa Rodríguez','David Larrubia','Julen Lobete','Chupe'],
  osasuna: ['Sergio Herrera','Valentín Rosier','Alejandro Catena','Jorge Herrando','Abel Bretones','Lucas Torró','Jon Moncayola','Moi Gómez','Rubén García','Ante Budimir','Raúl García'],
  rayo: ['Dani Cárdenas','Andrei Rațiu','Florian Lejeune','Luiz Felipe','Pep Chavarría','Óscar Valentín','Unai López','Isi Palazón','Jorge de Frutos','Fran Pérez','Sergio Camello'],
  racing: ['Simon Eriksson','Jorge Salinas','Álvaro Mantilla','Manu Hernando','Íñigo Sainz-Maza','Gustavo Puerta','Sergio Canales','Iñigo Vicente','Andrés Martín','Asier Villalibre','Juan Carlos Arana'],
  rsociedad: ['Álex Remiro','Álvaro Odriozola','Igor Zubeldia','Jon Pacheco','Aihen Muñoz','Jon Gorrotxategi','Beñat Turrientes','Carlos Soler','Takefusa Kubo','Ander Barrenetxea','Mikel Oyarzabal'],
  sevilla: ['Odysseas Vlachodimos','Juanlu Sánchez','Kike Salas','Marcão','Gabriel Suazo','Lucien Agoumé','Djibril Sow','Joan Jordán','Rubén Vargas','Alfon González','Isaac Romero'],
  valencia: ['Stole Dimitrievski','Dimitri Foulquier','Mouctar Diakhaby','César Tárrega','José Gayà','Pepelu','Javi Guerra','Luis Rioja','Arnaut Danjuma','Hugo Duro','Umar Sadiq'],
  villarreal: ['Luiz Júnior','Santiago Mouriño','Renato Veiga','Pau Navarro','Carlos Romero','Santi Comesaña','Pape Gueye','Alberto Moleiro','Nicolás Pépé','Georges Mikautadze','Gerard Moreno'],
  // ---- LaLiga Hypermotion (9/22 verificados; resto generado) ----
  valladolid: ['Karl Hein','Iván Alejo','Javi Sánchez','Stanko Jurić','Iza Carcelén','Amath Ndiaye','Marcos André','Peter Federico','Chuki','Juanmi Latasa','Víctor Meseguer'],
  rsociedadb: ['Alex Padrosa','Diego Gorosito','Mariezkurrena','Jon Karrikaburu','Aritz Arambarri','Beñat Yon','Gorosabel','Carrera','Dani Díaz','Amaiur Sarriegi','Iker Vicente'],
  cordoba: ['Carlos Marín','Antonio Casas','Carlos Albarrán','Fer Guerrero','César Morgado','Dani Requena','Jacobo González','Christian Delgado','Adrián Fuentes','Adilson Mendes','Guillermo Fernández'],
  cadiz: ['Alberto Varo','Iza Carcelén','Fali','Raúl Parra','Marco Moreno','Momo Mbaye','Brian Ocampo','Suso','Iuri Tabatadze','Moussa Diakité','Jonan Marí'],
  sporting: ['Diego Mariño','Juan Otero','Enol Prendes','Nico Riestra','Amadou Coundoul','Alejandro Lozano','Jonathan Dubasin','Daniel Queipo','Alejandro Oyón','Andrés Ferrari','Guille Rosas'],
  almeria: ['Fernando Martínez','Álex Centelles','Daijiro Chirino','Álex Muñoz','Marcos Luna','César de la Hoz','Curro Sánchez','Sergio Arribas','Largie Ramazani','Adrián Embarba','Léo Baptistão'],
  mallorca: ['Leo Román','Pablo Maffeo','Antonio Raíllo','Martin Valjent','Johan Mojica','Sergi Darder','Manu Morlanes','Antonio Sánchez','Dani Rodríguez','Vedat Muriqi','Abdón Prats'],
  oviedo: ['Aarón Escandell','Alberto Reina','Rahim Alhassan','David Costas','Ilyas Chaira','Colombatto','Sibo Kpindi','Alejandro Arribas','Salvi Vidal','Santi Cazorla','Ilzat Akhmetov'],
  granada: ['Zidane Astralaga','Ricard Sánchez','Sergio Ruiz','Fran Petit','Diallo','Óscar Naasei','Pablo Trigueros','Álvaro Lama','Facundo Arnaiz','Pedro Alemañ','Jorge Pascual Medina'],
};

// asigna jugador+posición para un equipo, usando plantilla curada o generada
function getRoster(team){
  const slots = FORMATIONS[team.formation];
  const curated = CURATED_ROSTERS[team.id];
  return slots.map((slot, i) => ({
    ...slot,
    name: curated ? curated[i] : generatedName(team.id, i)
  }));
}

// ---- Trayectorias para el buscador (actualizado a ago 2026) ----
const TRAJECTORIES = {
  'Vinicius Jr': {positions:['EI','ED'], club:'Real Madrid', value:'€150.0M', history:[
    {club:'Real Madrid', years:'2018 — actualidad', fee:'€45.0M (desde Flamengo)'},
    {club:'Flamengo', years:'2017 — 2018', fee:'Cantera'},
  ]},
  'Jude Bellingham': {positions:['MCO','MC'], club:'Real Madrid', value:'€180.0M', history:[
    {club:'Real Madrid', years:'2023 — actualidad', fee:'€103.0M (desde Borussia Dortmund)'},
    {club:'Borussia Dortmund', years:'2020 — 2023', fee:'€25.0M (desde Birmingham City)'},
    {club:'Birmingham City', years:'2019 — 2020', fee:'Cantera'},
  ]},
  'Kylian Mbappé': {positions:['DC','EI'], club:'Real Madrid', value:'€180.0M', history:[
    {club:'Real Madrid', years:'2024 — actualidad', fee:'Libre (desde PSG)'},
    {club:'Paris Saint-Germain', years:'2017 — 2024', fee:'€180.0M (desde Mónaco)'},
    {club:'AS Mónaco', years:'2015 — 2017', fee:'Cantera'},
  ]},
  'Ibrahim Konaté': {positions:['DFC'], club:'Real Madrid', value:'€70.0M', history:[
    {club:'Real Madrid', years:'2026 — actualidad', fee:'€45.0M (desde Liverpool FC)'},
    {club:'Liverpool FC', years:'2021 — 2026', fee:'€38.0M (desde RB Leipzig)'},
    {club:'RB Leipzig', years:'2017 — 2021', fee:'€8.0M'},
  ]},
  'Franco Mastantuono': {positions:['ED','MCO'], club:'Real Madrid', value:'€60.0M', history:[
    {club:'Real Madrid', years:'2025 — actualidad', fee:'€45.0M (desde River Plate)'},
    {club:'River Plate', years:'2022 — 2025', fee:'Cantera'},
  ]},
  'Lamine Yamal': {positions:['ED'], club:'FC Barcelona', value:'€200.0M', history:[
    {club:'FC Barcelona', years:'2023 — actualidad', fee:'Cantera'},
  ]},
  'Pedri': {positions:['MC','MCO'], club:'FC Barcelona', value:'€100.0M', history:[
    {club:'FC Barcelona', years:'2020 — actualidad', fee:'€5.0M (desde Las Palmas)'},
    {club:'UD Las Palmas', years:'2018 — 2020', fee:'Cantera'},
  ]},
  'Robert Lewandowski': {positions:['DC'], club:'Chicago Fire (MLS)', value:'—', history:[
    {club:'Chicago Fire (MLS)', years:'2026 — actualidad', fee:'Libre (desde FC Barcelona)'},
    {club:'FC Barcelona', years:'2022 — 2026', fee:'€45.0M (desde Bayern de Múnich)'},
    {club:'Bayern de Múnich', years:'2014 — 2022', fee:'Libre (desde Borussia Dortmund)'},
    {club:'Borussia Dortmund', years:'2010 — 2014', fee:'€4.5M'},
  ]},
  'Ronald Araújo': {positions:['DFC'], club:'Liverpool FC (cedido)', value:'€55.0M', history:[
    {club:'Liverpool FC', years:'2026 — 2027 (cesión)', fee:'Cesión desde FC Barcelona (opción €55.0M)'},
    {club:'FC Barcelona', years:'2018 — 2026', fee:'€5.0M (desde Boston River, Uruguay)'},
  ]},
  'Karim Adeyemi': {positions:['DC','EI'], club:'FC Barcelona', value:'€45.0M', history:[
    {club:'FC Barcelona', years:'2026 — actualidad', fee:'€22.0M (+€7.0M var., desde Borussia Dortmund)'},
    {club:'Borussia Dortmund', years:'2022 — 2026', fee:'€30.0M'},
    {club:'RB Salzburg', years:'2018 — 2022', fee:'Cantera'},
  ]},
  'Raphinha': {positions:['ED','EI'], club:'FC Barcelona', value:'€100.0M', history:[
    {club:'FC Barcelona', years:'2022 — actualidad', fee:'€58.0M (desde Leeds United)'},
    {club:'Leeds United', years:'2020 — 2022', fee:'€19.5M'},
  ]},
  'Antoine Griezmann': {positions:['DC','MCO'], club:'Atlético de Madrid', value:'€20.0M', history:[
    {club:'Atlético de Madrid', years:'2021 — actualidad', fee:'€20.0M (retorno desde Barcelona)'},
    {club:'FC Barcelona', years:'2019 — 2021', fee:'€120.0M'},
    {club:'Atlético de Madrid', years:'2014 — 2019', fee:'€30.0M'},
  ]},
  'Julián Álvarez': {positions:['DC','MCO'], club:'Atlético de Madrid', value:'€150.0M', history:[
    {club:'Atlético de Madrid', years:'2024 — actualidad', fee:'€75.0M (desde Manchester City)'},
    {club:'Manchester City', years:'2022 — 2024', fee:'€21.0M'},
    {club:'River Plate', years:'2018 — 2022', fee:'Cantera'},
  ]},
  'Morten Hjulmand': {positions:['MC','MCD'], club:'Atlético de Madrid', value:'€45.0M', history:[
    {club:'Atlético de Madrid', years:'2026 — actualidad', fee:'€40.0M (desde Sporting CP)'},
    {club:'Sporting CP', years:'2022 — 2026', fee:'€6.5M'},
  ]},
  'Álex Baena': {positions:['MC','MCO'], club:'Atlético de Madrid', value:'€45.0M', history:[
    {club:'Atlético de Madrid', years:'2025 — actualidad', fee:'€40.0M (desde Villarreal)'},
    {club:'Villarreal CF', years:'2020 — 2025', fee:'Cantera'},
  ]},
  'Nico Williams': {positions:['EI'], club:'Athletic Club', value:'€70.0M', history:[
    {club:'Athletic Club', years:'2021 — actualidad', fee:'Cantera'},
  ]},
  'Take Kubo': {positions:['ED','EI'], club:'Real Sociedad', value:'€45.0M', history:[
    {club:'Real Sociedad', years:'2023 — actualidad', fee:'€6.0M (desde Mallorca, retorno de cesión)'},
    {club:'RCD Mallorca', years:'2022 — 2023', fee:'Cesión'},
    {club:'Real Madrid', years:'2019 — 2022', fee:'Libre'},
  ]},
  'Brais Méndez': {positions:['MCO','MC'], club:'Columbus Crew (MLS)', value:'—', history:[
    {club:'Columbus Crew (MLS)', years:'2026 — actualidad', fee:'Traspaso desde Real Sociedad'},
    {club:'Real Sociedad', years:'2022 — 2026', fee:'€12.0M (desde Celta de Vigo)'},
  ]},
  'Nico Paz': {positions:['MCO'], club:'Como 1907', value:'€35.0M', history:[
    {club:'Como 1907', years:'2024 — actualidad', fee:'€8.0M (desde Real Madrid)'},
    {club:'Real Madrid Castilla', years:'2023 — 2024', fee:'Cantera'},
  ]},
};

/* =========================================================
   RENDER — Ticker
========================================================= */
function renderTicker(){
  const items = [...TRANSFERS.slice(0,8).map(t=>({name:t.name, symbol:t.symbol, val:t.fee, up:true})),
                  ...RUMORS.map(r=>({name:r.name, symbol:r.symbol, val:r.value, up: r.prob>=50}))];
  const track = document.getElementById('ticker-track');
  const html = items.map(i => `
    <div class="tick">
      <span class="sym">${i.symbol}</span>
      <span class="name">${i.name}</span>
      <span class="val ${i.up?'arrow-up':'arrow-down'}">${i.up?'▲':'▼'} ${i.val}</span>
    </div>`).join('');
  track.innerHTML = html + html; // duplicado para loop continuo
}

/* =========================================================
   RENDER — Fichajes
========================================================= */
function renderTransfers(filter='all'){
  const grid = document.getElementById('fichajes-grid');
  const list = filter==='all' ? TRANSFERS : TRANSFERS.filter(t=>t.comp===filter);
  grid.innerHTML = list.map(t => `
    <div class="transfer-card">
      <div class="tc-top">
        <div>
          <div class="tc-name">${t.name}</div>
          <div class="tc-symbol">${t.symbol} · ${COMP_LABEL[t.comp]}</div>
          <div class="tc-positions">${t.pos.map(p=>`<span class="chip">${p}</span>`).join('')}</div>
        </div>
        <span class="status-oficial">OFICIAL</span>
      </div>
      <div class="tc-flow"><span class="club">${t.from}</span><span class="arrow">→</span><span class="club">${t.to}</span></div>
      <div class="tc-foot">
        <span class="tc-fee">${t.fee}</span>
        <span class="tc-date">${t.date}</span>
      </div>
    </div>`).join('');
}
if(document.getElementById('fichajes-tabs')){
  document.getElementById('fichajes-tabs').addEventListener('click', e=>{
    const btn = e.target.closest('.tab-btn'); if(!btn) return;
    document.querySelectorAll('#fichajes-tabs .tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderTransfers(btn.dataset.comp);
  });
}

/* =========================================================
   RENDER — Rumores
========================================================= */
function renderRumors(){
  const list = document.getElementById('rumor-list');
  list.innerHTML = RUMORS.map(r => `
    <div class="rumor-card">
      <div class="rumor-head">
        <div>
          <div class="rumor-name">${r.name} <span class="tc-symbol">${r.symbol}</span></div>
          <div class="rumor-sub">${r.pos.map(p=>`<span class="chip red" style="margin-right:5px;">${p}</span>`).join('')}${r.club}</div>
        </div>
      </div>
      <div class="prob-wrap">
        <div class="prob-label"><span>PROBABILIDAD</span><span>${r.prob}%</span></div>
        <div class="prob-bar"><div class="prob-fill" style="width:${r.prob}%"></div></div>
        <div class="rumor-sub" style="margin-top:8px;">${r.targets}</div>
      </div>
      <div class="rumor-value">
        <div class="v">${r.value}</div>
        <div class="u">VALOR ESTIMADO</div>
        <div class="u" style="margin-top:6px;color:var(--text-dim);">${r.updated}</div>
      </div>
      <div class="rumor-note">${r.note}</div>
    </div>`).join('');
}

/* =========================================================
   RENDER — Alineaciones
========================================================= */
let currentTeamId = null;
function renderTeamPanel(){
  const groups = ['laliga','laliga2'];
  const panel = document.getElementById('team-panel');
  panel.innerHTML = groups.map(g => `
    <div class="team-group-label">${COMP_LABEL[g]}</div>
    ${TEAM_LIST.filter(t=>t.comp===g).map(t => `
      <div class="team-row" data-id="${t.id}">
        <span class="badge" style="border-color:${teamHue(t.id)}">${initials(t.name)}</span>
        <span>${t.name}</span>
      </div>`).join('')}
  `).join('');
  panel.addEventListener('click', e=>{
    const row = e.target.closest('.team-row'); if(!row) return;
    selectTeam(row.dataset.id);
  });
}
function initials(name){
  return name.split(' ').filter(w=>!/^(de|del|la|los|ud|cd|cf|rc|rcd|ca)$/i.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase().slice(0,2);
}
function teamHue(id){
  const h = hashSeed(id) % 360;
  return `hsl(${h},70%,55%)`;
}
function selectTeam(id){
  currentTeamId = id;
  document.querySelectorAll('.team-row').forEach(r=>r.classList.toggle('active', r.dataset.id===id));
  const team = TEAM_LIST.find(t=>t.id===id);
  document.getElementById('pitch-team-name').textContent = team.name;
  document.getElementById('pitch-team-comp').textContent = COMP_LABEL[team.comp];
  document.getElementById('pitch-formation').textContent = team.formation;
  const roster = getRoster(team);
  const pitch = document.getElementById('pitch');
  pitch.innerHTML = roster.map(p => `
    <div class="pnode ${p.pos==='POR'?'gk':''}" style="left:${p.x}%; top:${p.y}%;">
      <div class="dot"></div>
      <div class="plabel">${p.name} <span class="ppos">${p.pos}</span></div>
    </div>`).join('');
}

/* =========================================================
   RENDER — Buscador de trayectoria
========================================================= */
function renderSuggestions(){
  const row = document.getElementById('suggest-row');
  const names = Object.keys(TRAJECTORIES).slice(0,6);
  row.innerHTML = names.map(n=>`<button class="suggest-chip" data-name="${n}">${n}</button>`).join('');
  row.addEventListener('click', e=>{
    const c = e.target.closest('.suggest-chip'); if(!c) return;
    document.getElementById('search-input').value = c.dataset.name;
    doSearch();
  });
  const datalist = document.getElementById('player-suggestions');
  datalist.innerHTML = Object.keys(TRAJECTORIES).map(n=>`<option value="${n}">`).join('');
}
function doSearch(){
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  const result = document.getElementById('player-result');
  const noResult = document.getElementById('no-result');
  const key = Object.keys(TRAJECTORIES).find(n=>n.toLowerCase()===q);
  if(!key){
    result.classList.remove('show');
    noResult.classList.toggle('show', q.length>0);
    return;
  }
  noResult.classList.remove('show');
  const p = TRAJECTORIES[key];
  document.getElementById('pr-name').textContent = key;
  document.getElementById('pr-positions').innerHTML = p.positions.map(x=>`<span class="chip" style="margin-right:4px;">${x}</span>`).join('');
  document.getElementById('pr-club').textContent = p.club;
  document.getElementById('pr-value').textContent = p.value;
  document.getElementById('pr-timeline').innerHTML = p.history.map(h => `
    <div class="tl-item">
      <div class="tl-row"><span class="tl-club">${h.club}</span><span class="tl-years">${h.years}</span></div>
      <div class="tl-fee">${h.fee}</div>
    </div>`).join('');
  result.classList.add('show');
}
if(document.getElementById('search-btn')){
  document.getElementById('search-btn').addEventListener('click', doSearch);
  document.getElementById('search-input').addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });
}

/* =========================================================
   Reloj + pequeña simulación de "vivo" en el ticker/stat panel
========================================================= */
function tickClock(){
  document.getElementById('stat-clock').textContent = new Date().toLocaleTimeString('es-ES');
}
if(document.getElementById('stat-clock')){ setInterval(tickClock, 1000); tickClock(); }

function nudgeStats(){
  const el = document.getElementById('stat-valor');
  const current = parseFloat(el.textContent.replace('€','').replace('M',''));
  const next = (current + (Math.random()*1.2 - 0.3)).toFixed(1);
  el.textContent = '€' + next + 'M';
}
if(document.getElementById('stat-valor')){ setInterval(nudgeStats, 4000); }

/* =========================================================
   LEYENDAS — clubes históricos y jugadores legendarios
   Datos de ejemplo curados con hechos históricos ampliamente
   documentados. Los escudos son formas originales generadas por
   código (no reproducen escudos reales) y los retratos son
   siluetas genéricas, no imágenes de personas reales.
========================================================= */
const HISTORIC_CLUBS = [
  {id:'rmadrid', name:'Real Madrid', founded:1902, city:'Madrid', color:'#00f6ff', tag:'14+ Copas de Europa'},
  {id:'barca', name:'FC Barcelona', founded:1899, city:'Barcelona', color:'#ff2149', tag:'Cuna del Dream Team'},
  {id:'atmadrid', name:'Atlético de Madrid', founded:1903, city:'Madrid', color:'#ff2149', tag:'El Cholismo y su cantera'},
  {id:'athletic', name:'Athletic Club', founded:1898, city:'Bilbao', color:'#ff2149', tag:'Cantera vasca desde 1898'},
  {id:'valencia', name:'Valencia CF', founded:1919, city:'Valencia', color:'#f5a623', tag:'El Matador y los años dorados'},
  {id:'sevilla', name:'Sevilla FC', founded:1890, city:'Sevilla', color:'#ff2149', tag:'El club más antiguo de España'},
];

const LEGENDS = {
  rmadrid: [
    {
      id:'distefano', name:'Alfredo Di Stéfano', position:'Delantero', yearsAtClub:'1953–1964', status:'fallecido',
      career:[{club:'River Plate', years:'1944–1949'},{club:'Millonarios (Colombia)', years:'1949–1953'},{club:'Real Madrid', years:'1953–1964'},{club:'Español', years:'1964–1966'}],
      trophies:['5 Copas de Europa (1956–1960)','8 Ligas españolas','1 Copa Latina','1 Copa Intercontinental'],
      stats:{goals:307, assists:'—', matches:396},
      fact:'Su fichaje en 1953 desató un litigio entre el Real Madrid y el FC Barcelona, que también había pactado su incorporación. La federación española obligó a un reparto salomónico de temporadas que finalmente se resolvió a favor del conjunto blanco, dando inicio a una de las rivalidades más intensas del fútbol mundial.'
    },
    {
      id:'raul', name:'Raúl González', position:'Delantero', yearsAtClub:'1994–2010', status:'retirado',
      career:[{club:'Real Madrid', years:'1994–2010'},{club:'Schalke 04', years:'2010–2012'},{club:'Al Sadd', years:'2012–2014'},{club:'New York Cosmos', years:'2015'}],
      trophies:['3 Champions League (1998, 2000, 2002)','6 Ligas españolas','1 Copa Intercontinental','3 Supercopas de Europa'],
      stats:{goals:323, assists:'—', matches:741},
      fact:'Debutó con apenas 17 años y se convirtió en el capitán y máximo goleador histórico del club durante más de una década, título que mantuvo hasta que Cristiano Ronaldo lo superó años después de su marcha.'
    },
    {
      id:'figo', name:'Luis Figo', position:'Extremo', yearsAtClub:'2000–2005', status:'retirado',
      career:[{club:'Sporting CP', years:'1989–1995'},{club:'FC Barcelona', years:'1995–2000'},{club:'Real Madrid', years:'2000–2005'},{club:'Inter de Milán', years:'2005–2009'}],
      trophies:['1 Champions League (2002)','2 Ligas españolas (2001, 2003)','1 Copa Intercontinental','Balón de Oro 2000'],
      stats:{goals:57, assists:'—', matches:239},
      fact:'Su fichaje por el Real Madrid en 2000, procedente del eterno rival, se considera una de las traiciones más sonadas de la historia del fútbol español. En su primer regreso al Camp Nou en 2002, la afición azulgrana le lanzó objetos al campo, incluida la famosa cabeza de cerdo, en una de las imágenes más recordadas de un Clásico.'
    },
  ],
  barca: [
    {
      id:'cruyff', name:'Johan Cruyff', position:'Delantero', yearsAtClub:'1973–1978', status:'fallecido',
      career:[{club:'Ajax', years:'1964–1973'},{club:'FC Barcelona', years:'1973–1978'},{club:'Los Angeles Aztecs', years:'1979–1980'},{club:'Levante UD', years:'1981'},{club:'Ajax', years:'1981–1983'},{club:'Feyenoord', years:'1983–1984'}],
      trophies:['1 Liga española (1974)','1 Copa del Generalísimo (1978)'],
      stats:{goals:48, assists:'—', matches:143},
      fact:'Su llegada en 1973 acabó con 14 años sin liga para el Barça, incluyendo una histórica goleada 0–5 en el Santiago Bernabéu. Años después regresaría como entrenador para crear el "Dream Team" y sentar las bases de la identidad futbolística del club durante décadas.'
    },
    {
      id:'messi', name:'Lionel Messi', position:'Delantero', yearsAtClub:'2004–2021', status:'activo',
      career:[{club:'Newell\'s Old Boys (cantera)', years:'1994–2000'},{club:'FC Barcelona', years:'2004–2021'},{club:'Paris Saint-Germain', years:'2021–2023'},{club:'Inter Miami CF', years:'2023–actualidad'}],
      trophies:['4 Champions League (2006, 2009, 2011, 2015)','10 Ligas españolas','7 Copas del Rey','Múltiples Balones de Oro en el club'],
      stats:{goals:672, assists:316, matches:778},
      fact:'Se convirtió en el máximo goleador histórico del club en 2012, superando el récord que llevaba más de cinco décadas en pie. Su salida en 2021 se produjo entre lágrimas en una rueda de prensa, después de que el club no pudiera inscribir su renovación por límites financieros de LaLiga.'
    },
    {
      id:'ronaldinho', name:'Ronaldinho', position:'Extremo', yearsAtClub:'2003–2008', status:'retirado',
      career:[{club:'Grêmio', years:'1998–2001'},{club:'Paris Saint-Germain', years:'2001–2003'},{club:'FC Barcelona', years:'2003–2008'},{club:'AC Milan', years:'2008–2011'}],
      trophies:['1 Champions League (2006)','2 Ligas españolas (2005, 2006)','Balón de Oro 2005'],
      stats:{goals:94, assists:'—', matches:207},
      fact:'En un Clásico de 2005 en el Santiago Bernabéu, tras anotar dos goles y regatear a media defensa rival, recibió una ovación del propio público del Real Madrid — un gesto extraordinario y muy poco habitual hacia un jugador visitante.'
    },
  ],
  atmadrid: [
    {
      id:'aragones', name:'Luis Aragonés', position:'Delantero', yearsAtClub:'1964–1974', status:'fallecido',
      career:[{club:'Getafe CF (antiguo)', years:'1958–1961'},{club:'Real Betis', years:'1961–1964'},{club:'Atlético de Madrid', years:'1964–1974'},{club:'Atlético de Madrid (segunda etapa)', years:'1974–1976'}],
      trophies:['1 Liga española (1970)','2 Copas del Generalísimo'],
      stats:{goals:172, assists:'—', matches:360},
      fact:'Apodado "El Sabio de Hortaleza", fue durante años el máximo goleador histórico del club gracias en parte a su especialidad en el lanzamiento de faltas directas. Décadas más tarde regresó al Atlético como entrenador y, sobre todo, se convirtió en leyenda nacional al llevar a la selección española a ganar la Eurocopa 2008.'
    },
    {
      id:'torres', name:'Fernando Torres', position:'Delantero', yearsAtClub:'2001–2007 y 2015–2018', status:'retirado',
      career:[{club:'Atlético de Madrid (cantera y 1ª etapa)', years:'2001–2007'},{club:'Liverpool FC', years:'2007–2011'},{club:'Chelsea FC', years:'2011–2014'},{club:'AC Milan (cesión)', years:'2014–2015'},{club:'Atlético de Madrid (2ª etapa)', years:'2015–2018'},{club:'Sagan Tosu', years:'2018–2019'}],
      trophies:['1 Europa League (2018)','1 Supercopa de Europa (2018)'],
      stats:{goals:129, assists:'—', matches:404},
      fact:'Se convirtió en el capitán más joven de la historia del club con solo 19 años. Su marcha al Liverpool en 2007 por una cifra récord en su momento generó un intenso debate entre la afición, que veía partir a su ídolo de cantera en plena madurez futbolística.'
    },
    {
      id:'simeone', name:'Diego Simeone', position:'Centrocampista', yearsAtClub:'1994–1997 y 2003–2005 (como jugador)', status:'activo',
      career:[{club:'Vélez Sarsfield', years:'1987–1990'},{club:'Pisa', years:'1990–1992'},{club:'Sevilla FC', years:'1992–1994'},{club:'Atlético de Madrid', years:'1994–1997'},{club:'Inter de Milán', years:'1997–1999'},{club:'Lazio', years:'1999–2003'},{club:'Atlético de Madrid', years:'2003–2005'}],
      trophies:['1 Liga y Copa del Rey — doblete (1996)'],
      stats:{goals:38, assists:'—', matches:214},
      fact:'Como jugador ya destacaba por su carácter competitivo y su liderazgo en el campo, cualidades que definirían después su identidad como entrenador. Desde 2011 dirige al club como técnico, convirtiéndose en el entrenador con más títulos de la historia rojiblanca — una leyenda doble, como futbolista y como estratega.'
    },
  ],
  athletic: [
    {
      id:'pichichi', name:'Rafael "Pichichi" Moreno', position:'Delantero', yearsAtClub:'1911–1921', status:'fallecido',
      career:[{club:'Athletic Club', years:'1911–1921'}],
      trophies:['4 Copas del Rey (entonces Copa de España)'],
      stats:{goals:'aprox. 200 (todas las competiciones)', assists:'—', matches:'—'},
      fact:'Marcó el primer gol de la historia en el estadio de San Mamés en 1913. Tras su temprana muerte en 1922, un periódico deportivo instauró en su honor el "Trofeo Pichichi", que hoy en día sigue premiando cada temporada al máximo goleador de LaLiga.'
    },
    {
      id:'zarra', name:'Telmo Zarra', position:'Delantero', yearsAtClub:'1940–1955', status:'fallecido',
      career:[{club:'Athletic Club', years:'1940–1955'}],
      trophies:['1 Liga española (1943)','6 Copas del Generalísimo'],
      stats:{goals:335, assists:'—', matches:333},
      fact:'Fue durante más de cinco décadas el máximo goleador histórico de la Liga española y ganó seis veces el Trofeo Pichichi, un récord que resistió durante generaciones. En su honor, LaLiga entrega hoy el "Trofeo Zarra" al máximo goleador español de cada temporada.'
    },
    {
      id:'iribar', name:'José Ángel Iribar', position:'Portero', yearsAtClub:'1962–1980', status:'retirado',
      career:[{club:'Athletic Club', years:'1962–1980'}],
      trophies:['1 Liga española (1983, como director deportivo no cuenta; como jugador: subcampeonatos)','2 Copas del Generalísimo (1969, 1973)'],
      stats:{goals:0, assists:'—', matches:614},
      fact:'Considerado un símbolo de la identidad vasca durante el franquismo, en 1976 portó la ikurriña (bandera vasca, entonces no oficializada) en el túnel de vestuarios antes de un partido, un gesto de gran carga simbólica en plena Transición española.'
    },
  ],
  valencia: [
    {
      id:'kempes', name:'Mario Kempes', position:'Delantero', yearsAtClub:'1976–1981 y 1982–1984', status:'retirado',
      career:[{club:'Rosario Central', years:'1973–1976'},{club:'Valencia CF', years:'1976–1981'},{club:'River Plate', years:'1981–1982'},{club:'Valencia CF', years:'1982–1984'},{club:'Hércules CF', years:'1984'}],
      trophies:['1 Copa del Rey (1979)','1 Recopa de Europa (1980)','1 Supercopa de Europa (1980)'],
      stats:{goals:116, assists:'—', matches:184},
      fact:'Llegó a España poco antes de convertirse en el máximo goleador y mejor jugador del Mundial 1978 con Argentina. Su vínculo con la afición valencianista fue tan fuerte que hoy es recordado con el sobrenombre de "El Matador" y sigue vinculado al club como embajador.'
    },
    {
      id:'villa', name:'David Villa', position:'Delantero', yearsAtClub:'2005–2010', status:'retirado',
      career:[{club:'Sporting de Gijón', years:'2001–2003'},{club:'Real Zaragoza', years:'2003–2005'},{club:'Valencia CF', years:'2005–2010'},{club:'FC Barcelona', years:'2010–2013'},{club:'Atlético de Madrid', years:'2013–2014'},{club:'New York City FC', years:'2015–2018'}],
      trophies:['Sin títulos de liga en su etapa valencianista (subcampeonatos de Copa y Champions)'],
      stats:{goals:129, assists:'—', matches:235},
      fact:'Durante su etapa en Mestalla se consolidó como uno de los delanteros más letales de Europa y, poco después, se convertiría en el máximo goleador histórico de la selección española, un récord que tardó años en ser superado.'
    },
    {
      id:'canizares', name:'Santiago Cañizares', position:'Portero', yearsAtClub:'2001–2010', status:'retirado',
      career:[{club:'Real Madrid', years:'1990–1994'},{club:'Celta de Vigo', years:'1994–1996'},{club:'Real Madrid', years:'1996–1998'},{club:'Valencia CF', years:'1998–2010'}],
      trophies:['2 Ligas españolas (2002, 2004)','1 Copa del Rey (1999)','1 Copa de la UEFA (2004)'],
      stats:{goals:0, assists:'—', matches:396},
      fact:'Quedó fuera del Mundial 2002 tras lesionarse un dedo del pie al caérsele un frasco de colonia de cristal en el hotel de concentración de la selección española, uno de los episodios más recordados —y comentados— de la historia reciente del fútbol español.'
    },
  ],
  sevilla: [
    {
      id:'puerta', name:'Antonio Puerta', position:'Lateral / Centrocampista', yearsAtClub:'2004–2007', status:'fallecido',
      career:[{club:'Sevilla FC (cantera y primer equipo)', years:'2004–2007'}],
      trophies:['1 Copa de la UEFA (2006)','1 Supercopa de Europa (2006)'],
      stats:{goals:10, assists:'—', matches:97},
      fact:'Sufrió un colapso cardíaco durante un partido de liga en agosto de 2007 y falleció días después a los 22 años. El club retiró su dorsal (16) en su memoria y su historia sigue muy presente en la identidad sevillista.'
    },
    {
      id:'navas', name:'Jesús Navas', position:'Extremo / Lateral', yearsAtClub:'2003–2013 y 2017–actualidad', status:'activo',
      career:[{club:'Sevilla FC (cantera)', years:'2003–2013'},{club:'Manchester City', years:'2013–2017'},{club:'Sevilla FC', years:'2017–actualidad'}],
      trophies:['4 Copas de la UEFA / Europa League (2006, 2007, 2014, 2020)','1 Supercopa de España (2007)'],
      stats:{goals:56, assists:'—', matches:'600+'},
      fact:'De joven sufrió episodios severos de nostalgia (morriña) que le llevaron a abandonar concentraciones con las categorías inferiores de la selección española por no poder estar lejos de Sevilla, una anécdota muy conocida entre la afición sobre su fuerte arraigo a la ciudad.'
    },
    {
      id:'reyes', name:'José Antonio Reyes', position:'Extremo', yearsAtClub:'2000–2004 y 2012–2016', status:'fallecido',
      career:[{club:'Sevilla FC', years:'2000–2004'},{club:'Arsenal FC', years:'2004–2007'},{club:'Real Madrid (cesión)', years:'2006–2007'},{club:'Atlético de Madrid', years:'2007–2012'},{club:'Sevilla FC', years:'2012–2016'}],
      trophies:['2 Copas de la UEFA / Europa League (2014, 2015)','1 Supercopa de Europa (2015)'],
      stats:{goals:47, assists:'—', matches:198},
      fact:'Su traspaso al Arsenal en 2004 fue, en su momento, el fichaje más caro de la historia de un jugador español. Falleció en 2019 en un accidente de tráfico con solo 35 años, y el Sevilla y varios de sus exclubes le rindieron homenajes conjuntos.'
    },
  ],
};

function makeShield(color, initials){
  return `<svg viewBox="0 0 64 72" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 2 L60 12 V36 C60 54 48 66 32 70 C16 66 4 54 4 36 V12 Z" fill="#0a0f13" stroke="${color}" stroke-width="2"/>
    <path d="M32 8 L54 16 V36 C54 50 44 60 32 64 C20 60 10 50 10 36 V16 Z" fill="none" stroke="${color}" stroke-width="1" opacity="0.35"/>
    <text x="32" y="42" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700" fill="${color}" text-anchor="middle">${initials}</text>
  </svg>`;
}
function makeSilhouette(color){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#0a0f13" stroke="${color}" stroke-width="1.5" opacity="0.5"/>
    <circle cx="50" cy="38" r="17" fill="${color}" opacity="0.85"/>
    <path d="M18 92 C18 66 34 54 50 54 C66 54 82 66 82 92 Z" fill="${color}" opacity="0.85"/>
  </svg>`;
}
function clubInitials(name){
  return name.split(' ').filter(w=>!/^(de|del|la|los|cf|fc|club|ud|cd)$/i.test(w)).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}

function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top: document.getElementById('leyendas-top')?.offsetTop || 0, behavior:'smooth'});
}

function renderClubs(){
  const grid = document.getElementById('clubs-grid');
  grid.innerHTML = HISTORIC_CLUBS.map(c => `
    <div class="club-card" data-club="${c.id}">
      <div class="club-shield">${makeShield(c.color, clubInitials(c.name))}</div>
      <div class="club-name">${c.name}</div>
      <div class="club-meta">${c.city} · Fundado en ${c.founded}</div>
      <div class="club-meta" style="color:var(--cyan);">${c.tag}</div>
    </div>`).join('');
  grid.addEventListener('click', e=>{
    const card = e.target.closest('.club-card'); if(!card) return;
    renderLegends(card.dataset.club);
  });
}

let currentClubId = null;
function renderLegends(clubId){
  currentClubId = clubId;
  const club = HISTORIC_CLUBS.find(c=>c.id===clubId);
  const legends = LEGENDS[clubId] || [];
  document.getElementById('legends-club-name').textContent = club.name;
  document.getElementById('legends-club-shield').innerHTML = makeShield(club.color, clubInitials(club.name));
  const grid = document.getElementById('legends-grid');
  grid.innerHTML = legends.map(p => `
    <div class="legend-card" data-legend="${p.id}">
      <div class="legend-avatar">${makeSilhouette(club.color)}</div>
      <div class="legend-name">${p.name}</div>
      <div class="legend-meta">${p.position} · ${p.yearsAtClub}</div>
      <span class="status-badge ${p.status}">${p.status}</span>
    </div>`).join('');
  grid.onclick = e=>{
    const card = e.target.closest('.legend-card'); if(!card) return;
    renderPlayerDetail(clubId, card.dataset.legend);
  };
  showView('legends-view');
}

function renderPlayerDetail(clubId, legendId){
  const club = HISTORIC_CLUBS.find(c=>c.id===clubId);
  const player = (LEGENDS[clubId]||[]).find(p=>p.id===legendId);
  document.getElementById('player-avatar').innerHTML = makeSilhouette(club.color);
  document.getElementById('player-club-tag').textContent = `LEYENDA · ${club.name.toUpperCase()}`;
  document.getElementById('player-name').textContent = player.name;
  document.getElementById('player-meta').innerHTML = `
    <span class="chip">${player.position}</span>
    <span>${player.yearsAtClub}</span>
    <span class="status-badge ${player.status}">${player.status}</span>`;

  document.getElementById('player-career').innerHTML = player.career.map(c => `
    <div class="tl-item">
      <div class="tl-row"><span class="tl-club">${c.club}</span><span class="tl-years">${c.years}</span></div>
    </div>`).join('');

  document.getElementById('player-trophies').innerHTML = player.trophies.map(t=>`<span class="trophy-chip">🏆 ${t}</span>`).join('');

  const statsLabel = player.status==='activo' ? 'ESTADÍSTICAS HASTA LA FECHA' : 'ESTADÍSTICAS HISTÓRICAS EN EL CLUB';
  document.getElementById('player-stats-label').textContent = statsLabel;
  document.getElementById('player-stats').innerHTML = `
    <div class="stat-box"><div class="n">${player.stats.goals}</div><div class="l">GOLES</div></div>
    <div class="stat-box"><div class="n">${player.stats.assists}</div><div class="l">ASISTENCIAS</div></div>
    <div class="stat-box"><div class="n">${player.stats.matches}</div><div class="l">PARTIDOS</div></div>`;

  document.getElementById('player-fact').textContent = player.fact;

  showView('player-view');
}

/* =========================================================
   Init — cada bloque se ejecuta solo si la página actual tiene
   los elementos correspondientes (MARKFUT ahora es multi-página:
   cada utilidad puede vivir en su propia página o en el inicio).
========================================================= */
if(document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
if(document.getElementById('ticker-track')) renderTicker();
if(document.getElementById('fichajes-grid')) renderTransfers('all');
if(document.getElementById('rumor-list')) renderRumors();
if(document.getElementById('team-panel')){ renderTeamPanel(); selectTeam('rmadrid'); }
if(document.getElementById('suggest-row')) renderSuggestions();
if(document.getElementById('clubs-grid')) renderClubs();
if(document.getElementById('back-to-clubs')){
  document.getElementById('back-to-clubs').addEventListener('click', ()=> showView('clubs-view'));
}
if(document.getElementById('back-to-legends')){
  document.getElementById('back-to-legends').addEventListener('click', ()=> renderLegends(currentClubId));
}

/* =========================================================
   MENÚ MÓVIL (burger)
   El CSS de la página ya reserva un botón `.burger` (oculto en
   escritorio, visible en móvil <900px) pero la página no incluía
   ni el botón ni el panel desplegable. Se generan aquí en tiempo
   de ejecución, sin tocar el HTML, reutilizando las variables de
   color/tipografía ya definidas en el <style> de la página.
========================================================= */
(function initMobileMenu(){
  const nav = document.querySelector('header nav');
  const navLinksSource = document.querySelector('.navlinks');
  if(!nav || !navLinksSource) return;

  // Botón hamburguesa (usa la clase .burger ya estilada en el CSS de la página)
  const burgerBtn = document.createElement('button');
  burgerBtn.className = 'burger';
  burgerBtn.id = 'burger-btn';
  burgerBtn.setAttribute('aria-label', 'Abrir menú');
  burgerBtn.setAttribute('aria-expanded', 'false');
  burgerBtn.innerHTML = '☰';
  nav.appendChild(burgerBtn);

  // Panel desplegable móvil (mismos enlaces que .navlinks + el CTA)
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.style.cssText = [
    'display:none',
    'position:absolute',
    'top:68px',
    'left:0',
    'right:0',
    'background:rgba(5,8,10,.97)',
    'backdrop-filter:blur(10px)',
    'border-bottom:1px solid var(--line-strong)',
    'flex-direction:column',
    'padding:8px 28px 20px',
    'gap:2px',
    'z-index:49',
    'font-family:var(--font-mono)',
    'font-size:13px',
    'letter-spacing:.06em',
    'text-transform:uppercase'
  ].join(';');

  // Clona los enlaces de navegación existentes (mismos href/textos, sin duplicar contenido nuevo)
  const links = [...navLinksSource.querySelectorAll('a')];
  const ctaLink = document.querySelector('.nav-cta');
  [...links, ctaLink].filter(Boolean).forEach(orig => {
    const a = document.createElement('a');
    a.href = orig.getAttribute('href');
    a.textContent = orig.textContent;
    a.style.cssText = 'display:block;padding:14px 0;color:var(--text-dim);border-bottom:1px solid var(--line);';
    a.addEventListener('mouseenter', () => a.style.color = 'var(--cyan)');
    a.addEventListener('mouseleave', () => a.style.color = 'var(--text-dim)');
    a.addEventListener('click', closeMobileMenu);
    mobileMenu.appendChild(a);
  });

  nav.style.position = nav.style.position || 'relative';
  document.querySelector('header').style.position = 'sticky';
  document.querySelector('header').appendChild(mobileMenu);

  function openMobileMenu(){
    mobileMenu.style.display = 'flex';
    burgerBtn.innerHTML = '✕';
    burgerBtn.setAttribute('aria-expanded', 'true');
  }
  function closeMobileMenu(){
    mobileMenu.style.display = 'none';
    burgerBtn.innerHTML = '☰';
    burgerBtn.setAttribute('aria-expanded', 'false');
  }
  function toggleMobileMenu(){
    const isOpen = mobileMenu.style.display === 'flex';
    isOpen ? closeMobileMenu() : openMobileMenu();
  }

  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Cierra si se hace click fuera del menú
  document.addEventListener('click', (e) => {
    if(mobileMenu.style.display === 'flex' && !mobileMenu.contains(e.target) && e.target !== burgerBtn){
      closeMobileMenu();
    }
  });

  // Cierra el menú si la ventana vuelve a tamaño de escritorio
  window.addEventListener('resize', () => {
    if(window.innerWidth > 900) closeMobileMenu();
  });

  // Cierra con tecla Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeMobileMenu();
  });
})();

/* =========================================================
   MEJORAS DE ACCESIBILIDAD / UX PARA BOTONES YA EXISTENTES
   (no altera comportamiento visual, solo añade estados/teclado)
========================================================= */

// Los tabs de fichajes ya cambian de filtro al hacer click (ver arriba);
// aquí se añade navegación por teclado (flechas) entre tabs.
(function enhanceTabsKeyboardNav(){
  const tabs = document.querySelectorAll('#fichajes-tabs .tab-btn');
  tabs.forEach((tab, i) => {
    tab.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight'){ (tabs[i+1] || tabs[0]).focus(); }
      if(e.key === 'ArrowLeft'){ (tabs[i-1] || tabs[tabs.length-1]).focus(); }
    });
  });
})();

// El botón "Buscar" y las suggest-chip ya funcionan (ver doSearch arriba);
// aquí se añade limpieza de resultados cuando el input queda vacío.
(function enhanceSearchClear(){
  const input = document.getElementById('search-input');
  if(!input) return;
  input.addEventListener('input', () => {
    if(input.value.trim() === ''){
      document.getElementById('player-result').classList.remove('show');
      document.getElementById('no-result').classList.remove('show');
    }
  });
})();
