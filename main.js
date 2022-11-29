function createGame(player1, hour, player2, link) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    <div class="links">
      <a target="_blank" href="${link}">Acompanhe</a>
    </div>
  `
}

let delay = 1;
function createCard(date, day, games) {
  delay = delay + 1.1;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

;;;;;;;;;document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Domingo",
    createGame(
      "catar",
      "13:00",
      "equador",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11jlxs1nl6;2;/m/030q7;dt;fp;1;;;"
    )
  ) +
  createCard(
    "21/11",
    "Segunda",
    createGame(
      "inglaterra",
      "10:00",
      "ira",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xcxh4;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "senegal",
        "13:00",
        "holanda",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyr0ln;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "usa",
        "16:00",
        "paisdegales",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xfqrq;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "22/11",
    "Terça",
    createGame(
      "argentina",
      "07:00",
      "arabiasaudita",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xdxn0;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "dinamarca",
        "10:00",
        "tunisia",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xdfz3;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "mexico",
        "13:00",
        "polonia",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1ynfxq;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "franca",
        "16:00",
        "australia",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyz1_s;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "23/11",
    "Quarta",
    createGame(
      "marrocos",
      "07:00",
      "croacia",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xm65t;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "alemanha",
        "10:00",
        "japao",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyrxp_;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "espanha",
        "13:00",
        "costarica",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyqzsy;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "belgica",
        "16:00",
        "canada",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyvbdl;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "24/11",
    "Quinta",
    createGame(
      "suica",
      "07:00",
      "camaroes",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnz4q4c;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "uruguai",
        "10:00",
        "coreiadosul",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spny_y9v;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "portugal",
        "13:00",
        "gana",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1z2nn2;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "brasil",
        "16:00",
        "servia",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnz1c_1;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "25/11",
    "Sexta",
    createGame(
      "paisdegales",
      "07:00",
      "ira",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xc5lj;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "catar",
        "10:00",
        "senegal",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnys7jb;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "holanda",
        "13:00",
        "equador",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnykxwt;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "inglaterra",
        "16:00",
        "usa",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1yn7mq;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "26/11",
    "Sábado",
    createGame(
      "tunisia",
      "07:00",
      "australia",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1ywyxm;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "polonia",
        "10:00",
        "arabiasaudita",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xhssj;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "franca",
        "13:00",
        "dinamarca",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1yw8zc;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "argentina",
        "16:00",
        "mexico",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=ca&aqs=edge.0.69i59j69i57j0i433i512j0i131i433i512j0i512j0i433i512j69i60j69i61j69i60.1160j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xgzbp;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "27/11",
    "Domingo",
    createGame(
      "japao",
      "07:00",
      "costarica",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xg9v5;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "belgica",
        "10:00",
        "marrocos",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1yqdbb;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "croacia",
        "13:00",
        "canada",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnytbtg;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "espanha",
        "16:00",
        "alemanha",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnywqh1;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame(
      "camaroes",
      "07:00",
      "servia",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1z0h3c;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "coreiadosul",
        "10:00",
        "gana",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xnh3t;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "brasil",
        "13:00",
        "suica",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xv7k8;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "portugal",
        "16:00",
        "uruguai",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1z5w1m;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "29/11",
    "Terça",
    createGame(
      "equador",
      "12:00",
      "senegal",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0x9q0c;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "holanda",
        "12:00",
        "catar",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xcd15;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "ira",
        "16:00",
        "usa",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1ym5x8;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "paisdegales",
        "16:00",
        "inglaterra",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnypbd5;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "30/11",
    "Quarta",
    createGame(
      "tunisia",
      "12:00",
      "franca",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xf4ld;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "australia",
        "12:00",
        "dinamarca",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyz1_j;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "polonia",
        "16:00",
        "argentina",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xc18c;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "arabiasaudita",
        "16:00",
        "mexico",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnytv3l;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "01/12",
    "Quinta",
    createGame(
      "croacia",
      "12:00",
      "belgica",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xhssz;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "canada",
        "12:00",
        "marrocos",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1z3ddq;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "japao",
        "16:00",
        "espanha",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xg2kk;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "costarica",
        "16:00",
        "alemanha",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyqsbq;2;/m/030q7;dt;fp;1;;;"
      )
  ) +
  createCard(
    "02/12",
    "Sexta",
    createGame(
      "coreiadosul",
      "12:00",
      "portugal",
      "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11pz0xr3gs;2;/m/030q7;dt;fp;1;;;"
    ) +
      createGame(
        "gana",
        "12:00",
        "uruguai",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11rq1z1pn9;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "servia",
        "16:00",
        "suica",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnyz8qh;2;/m/030q7;dt;fp;1;;;"
      ) +
      createGame(
        "camaroes",
        "16:00",
        "brasil",
        "https://www.google.com/search?q=calendario+copa+do+mundo+2022&oq=calendari&aqs=edge.0.69i59j69i57j0i512j0i3j0i433i512j0i512j69i60l3.1331j0j1&sourceid=chrome&ie=UTF-8#sie=m;/g/11spnz0dkc;2;/m/030q7;dt;fp;1;;;"
      )
  )