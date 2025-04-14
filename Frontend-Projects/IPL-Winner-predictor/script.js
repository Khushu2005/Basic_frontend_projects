let btn = document.querySelector('button');
let winner = document.querySelector('h3');

var team = [
   {
      team: 'CSK',
      primary: 'yellow',
      secondary: 'green'
   },
   {
      team: 'RCB',
      primary: 'red',
      secondary: 'black'
   },
   {
      team: 'MI',
      primary: 'blue',
      secondary: 'gold'
   },
   {
      team: 'KKR',
      primary: 'purple',
      secondary: 'gold'
   },
   {
      team: 'SRH',
      primary: 'orange',
      secondary: 'black'
   }
]

btn.addEventListener('click', function () {
   let w = Math.floor(Math.random() * team.length);

   winner.innerHTML = team[w].team;
   winner.style.backgroundColor = team[w].primary;
   winner.style.color = team[w].secondary;
});
