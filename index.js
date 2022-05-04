const Inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const Suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${Suffix}`);
}

Inputs.forEach(input => input.addEventListener('change', handleUpdate));
Inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
