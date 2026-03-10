// --- Selecting cards
const board = document.getElementById('board');

board.addEventListener('click', (event) => {
  // Check if click on inputs
  if (event.target.tagName === 'INPUT') return;

  const card = event.target.closest('.student-card');
  if (card) {
    card.classList.toggle('selected');
  }
});

// --- 2. Move cards
const btnToAnswering = document.getElementById('move-to-answering');
const btnToAnswered = document.getElementById('move-to-answered');
const listParticipants = document.getElementById('list-participants');
const listAnswering = document.getElementById('list-answering');
const listAnswered = document.getElementById('list-answered');

// Move cards function
function moveSelected(fromList, toList, resetSelection = true) {
  const selectedCards = fromList.querySelectorAll('.student-card.selected');
  selectedCards.forEach(card => {
    if (resetSelection) {
      card.classList.remove('selected'); // Снимаем выделение при переносе
    }
    toList.appendChild(card);
  });
}

btnToAnswering.addEventListener('click', () => {
  moveSelected(listParticipants, listAnswering, false);
});

btnToAnswered.addEventListener('click', () => {
  moveSelected(listAnswering, listAnswered);
});

// --- 3. Reset all (move all cards to left panel) ---
document.getElementById('reset-all').addEventListener('click', () => {
  const allCards = document.querySelectorAll('#list-answering .student-card, #list-answered .student-card');
  allCards.forEach(card => {
    card.classList.remove('selected');
    listParticipants.appendChild(card);
  });
});