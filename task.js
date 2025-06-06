function selectOption(el, price) {
      document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
        opt.querySelector('input').checked = false;
      });
      el.classList.add('selected');
      el.querySelector('input').checked = true;
      document.getElementById('total').textContent = `$${price.toFixed(2)} USD`;
    }