/* =========================================================
   MARKFUT — data layer
   Todo lo de abajo es DATA DE EJEMPLO (placeholder) para que
   la web funcione de forma autónoma en GitHub Pages sin backend.
   Sustituye TRANSFERS / RUMORS / TEAMS / TRAJECTORIES por datos
   reales desde tu API (fetch) cuando la tengas lista.
========================================================= */

const COMP_LABEL = { laliga:'LaLiga', laliga2:'LaLiga2', primera:'Primera Federación' };

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

  {name:'Íñigo Sáinz-Maza', symbol:'$SAINZM', pos:['MC'], from:'Racing de Santander (cantera)', to:'Real Unión', fee:'Cesión', date:'12 jul 2026', comp:'primera'},
  {name:'Robert Ivanov', symbol:'$RIVAN', pos:['POR'], from:'Sestao River', to:'Bilbao Athletic', fee:'€0.2M', date:'30 jul 2026', comp:'primera'},
];

// Nota: la Primera Federación 2026/27 se reorganiza con los descensos de Real Zaragoza,
// Cultural Leonesa, SD Huesca y CD Mirandés desde LaLiga2, junto a filiales como
// Real Madrid Castilla y FC Barcelona Atlètic. Sustituye este bloque por datos de tu
// fuente/API cuando quieras fichajes reales de esta categoría.

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

// ---- Equipos: LaLiga, LaLiga2, Primera Federación (destacados) ----
// Temporada 2026/27 — composición verificada: LaLiga incorpora a Racing de Santander,
// Deportivo de La Coruña y Málaga CF (ascendidos); descienden Real Oviedo, RCD Mallorca
// y Girona FC. LaLiga2 (Hypermotion) suma Girona, Mallorca y Oviedo, más los ascendidos
// desde Primera Federación (Tenerife, Eldense, Sabadell, Celta Fortuna).
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
  // Primera Federación (destacados — 3er nivel)
  {id:'castilla', name:'Real Madrid Castilla', comp:'primera', formation:'4-3-3'},
  {id:'barcaatl', name:'FC Barcelona Atlètic', comp:'primera', formation:'4-3-3'},
  {id:'bilbaoath', name:'Bilbao Athletic', comp:'primera', formation:'4-2-3-1'},
  {id:'realunion', name:'Real Unión', comp:'primera', formation:'4-4-2'},
  {id:'zaragoza', name:'Real Zaragoza', comp:'primera', formation:'4-2-3-1'},
  {id:'huesca', name:'SD Huesca', comp:'primera', formation:'4-3-3'},
  {id:'cultural', name:'Cultural Leonesa', comp:'primera', formation:'4-4-2'},
  {id:'mirandes', name:'CD Mirandés', comp:'primera', formation:'3-5-2'},
];

// ---- Plantillas curadas para clubes destacados (verificadas a ago 2026; resto: generado) ----
// Nota: se ha limitado la curación a los clubes con datos de fichajes/salidas confirmados
// (p. ej. salida de Lewandowski y Araújo del Barça, llegada de Konaté al Real Madrid) para
// evitar mostrar jugadores que ya no compiten en España. El resto de equipos usa nombres
// generados de forma ilustrativa — sustitúyelos por tu API para plantillas 100% reales.
const CURATED_ROSTERS = {
  rmadrid: ['Thibaut Courtois','Dani Carvajal','Ibrahim Konaté','Dean Huijsen','Álvaro Carreras','Federico Valverde','Aurélien Tchouaméni','Jude Bellingham','Vinicius Jr','Kylian Mbappé','Franco Mastantuono'],
  barca: ['Joan García','Alejandro Balde','Pau Cubarsí','Íñigo Martínez','Jules Koundé','Pedri','Frenkie de Jong','Dani Olmo','Raphinha','Karim Adeyemi','Lamine Yamal'],
  atmadrid: ['Jan Oblak','Nahuel Molina','José María Giménez','Robin Le Normand','Javi Galán','Álex Baena','Morten Hjulmand','Koke','Rodrigo De Paul','Antoine Griezmann','Julián Álvarez'],
  athletic: ['Unai Simón','Andoni Gorosabel','Dani Vivian','Aitor Paredes','Yuri Berchiche','Mikel Vesga','Óscar de Marcos','Oihan Sancet','Nico Williams','Robert Navarro','Gorka Guruzeta'],
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
document.getElementById('fichajes-tabs').addEventListener('click', e=>{
  const btn = e.target.closest('.tab-btn'); if(!btn) return;
  document.querySelectorAll('#fichajes-tabs .tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderTransfers(btn.dataset.comp);
});

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
  const groups = ['laliga','laliga2','primera'];
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
document.getElementById('search-btn').addEventListener('click', doSearch);
document.getElementById('search-input').addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });

/* =========================================================
   Reloj + pequeña simulación de "vivo" en el ticker/stat panel
========================================================= */
function tickClock(){
  document.getElementById('stat-clock').textContent = new Date().toLocaleTimeString('es-ES');
}
setInterval(tickClock, 1000); tickClock();

function nudgeStats(){
  const el = document.getElementById('stat-valor');
  const current = parseFloat(el.textContent.replace('€','').replace('M',''));
  const next = (current + (Math.random()*1.2 - 0.3)).toFixed(1);
  el.textContent = '€' + next + 'M';
}
setInterval(nudgeStats, 4000);

/* =========================================================
   Init
========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();
renderTicker();
renderTransfers('all');
renderRumors();
renderTeamPanel();
renderSuggestions();
selectTeam('rmadrid');

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
