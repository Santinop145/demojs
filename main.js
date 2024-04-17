function handleSubmit(event) {
    event.preventDefault();
    let n = +document.forms[0].n.value;
    let h3 = document.querySelector('#bin');
    let hex = document.querySelector('#hex');
    h3.textContent = n.toString(2);
    hex.textContent = n.toString(16);
  }