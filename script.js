const ORDER = ["Available","InProgress","Incomplete","Complete"];
  const LABELS = {Available:"AVAILABLE", InProgress:"IN PROGRESS", Incomplete:"INCOMPLETE", Complete:"COMPLETE"};
  const HINTS = {
    Available:"tap to claim",
    InProgress:"tap to mark abandoned",
    Incomplete:"tap to reclaim",
    Complete:"tap to reset demo"
  };
  const tasks = [
    {name:"Fill Coffee", loc:"Rack 7", state:"Available"},
    {name:"Restock Milk", loc:"Walk-in Fridge, Door 3", state:"InProgress"},
    {name:"Fill Chicken", loc:"Freezer Door 10", state:"Incomplete"},
    {name:"Kroger Pickup — Produce", loc:"Loading Dock", state:"Complete"},
  ];
  const board = document.getElementById('board');
  function render(){
    board.innerHTML = "";
    tasks.forEach((t) => {
      const card = document.createElement('div');
      card.className = `task-card status-${t.state}`;
      card.innerHTML = `
        <span class="status-dot"></span><span class="status-label">${LABELS[t.state]}</span>
        <div class="task-name">${t.name}</div>
        <div class="task-loc">${t.loc}</div>
        <div class="task-hint">${HINTS[t.state]}</div>
      `;
      card.addEventListener('click', () => {
        const idx = ORDER.indexOf(t.state);
        t.state = ORDER[(idx + 1) % ORDER.length];
        render();
      });
      board.appendChild(card);
    });
  }
  render();