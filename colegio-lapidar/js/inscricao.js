/* Colégio Lapidar — enrollment wizard */
(function () {
  const form = document.getElementById('enroll-form');
  if (!form) return;

  const WA = '244950456485';
  let current = 1;

  const panes = form.querySelectorAll('.enroll-pane');
  const steps = document.querySelectorAll('.enroll-step');

  function goTo(step) {
    current = step;
    panes.forEach(p => p.classList.toggle('active', Number(p.dataset.pane) === step));
    steps.forEach(s => {
      const n = Number(s.dataset.step);
      s.classList.toggle('active', n === step);
      s.classList.toggle('done', n < step);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step === 3) buildSummary();
    updateDocsHint();
  }

  function fieldsForStep(step) {
    const pane = form.querySelector(`.enroll-pane[data-pane="${step}"]`);
    if (!pane) return [];
    return [...pane.querySelectorAll('input[required], select[required], textarea[required]')];
  }

  function validateStep(step) {
    const fields = fieldsForStep(step);
    let ok = true;
    fields.forEach(f => {
      const empty = !f.value || (f.type === 'checkbox' && !f.checked);
      f.classList.toggle('invalid', empty);
      if (empty) ok = false;
    });
    // radio groups required
    if (step === 1) {
      const tipo = form.querySelector('input[name="tipo"]:checked');
      if (!tipo) ok = false;
    }
    if (step === 3) {
      const conf = form.querySelector('input[name="confirmacao"]:checked');
      const aceito = document.getElementById('aceito');
      if (!conf) ok = false;
      if (aceito && !aceito.checked) {
        aceito.classList.add('invalid');
        ok = false;
      }
    }
    if (!ok) {
      const first = form.querySelector('.invalid');
      first?.focus();
      alert('Por favor preencha todos os campos obrigatórios.');
    }
    return ok;
  }

  form.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = Number(btn.dataset.next);
      if (validateStep(current)) goTo(next);
    });
  });

  form.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => goTo(Number(btn.dataset.prev)));
  });

  // Toggle docs list by enrollment type
  function updateDocsHint() {
    const tipo = form.querySelector('input[name="tipo"]:checked')?.value;
    const nova = document.getElementById('docs-list-nova');
    const conf = document.getElementById('docs-list-conf');
    if (!nova || !conf) return;
    if (tipo === 'confirmacao') {
      nova.hidden = true;
      conf.hidden = false;
    } else {
      nova.hidden = false;
      conf.hidden = true;
    }
  }

  form.querySelectorAll('input[name="tipo"]').forEach(r => {
    r.addEventListener('change', updateDocsHint);
  });

  function val(name) {
    const el = form.elements[name];
    if (!el) return '';
    if (el instanceof RadioNodeList) {
      const checked = form.querySelector(`input[name="${name}"]:checked`);
      return checked ? checked.value : '';
    }
    return el.value?.trim() || '';
  }

  function extras() {
    return [...form.querySelectorAll('input[name="extra"]:checked')].map(c => c.value);
  }

  function buildSummary() {
    const box = document.getElementById('enroll-summary');
    if (!box) return;
    const tipoLabel = val('tipo') === 'confirmacao' ? 'Confirmação' : 'Matrícula nova';
    const extraList = extras();
    const items = [
      ['Tipo', tipoLabel],
      ['Aluno', val('aluno_nome')],
      ['Nascimento', val('aluno_nasc')],
      ['Género', val('aluno_genero') === 'M' ? 'Masculino' : val('aluno_genero') === 'F' ? 'Feminino' : '—'],
      ['Nível', val('nivel') || '—'],
      ['Ano lectivo', val('ano_lectivo') || '2026/2027'],
      ['Encarregado', val('enc_nome')],
      ['Contacto', val('enc_tel')],
      ['Parentesco', val('enc_parentesco') || '—'],
      ['Extracurriculares', extraList.length ? extraList.join(', ') : 'Nenhuma'],
    ];
    box.innerHTML = items.map(([k, v]) =>
      `<div class="enroll-summary-item"><span>${k}</span><strong>${v || '—'}</strong></div>`
    ).join('');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    const tipoLabel = val('tipo') === 'confirmacao' ? 'Confirmação' : 'Matrícula nova';
    const extraList = extras();
    const confMode = val('confirmacao');

    let text = `*Pré-inscrição Colégio Lapidar — ${tipoLabel}*\n`;
    text += `Ano lectivo: ${val('ano_lectivo') || '2026/2027'}\n\n`;
    text += `*Aluno*\n`;
    text += `Nome: ${val('aluno_nome')}\n`;
    text += `Nascimento: ${val('aluno_nasc')}\n`;
    text += `Género: ${val('aluno_genero') === 'M' ? 'Masculino' : 'Feminino'}\n`;
    if (val('aluno_bi')) text += `BI/Cédula: ${val('aluno_bi')}\n`;
    text += `Morada: ${val('aluno_morada')}\n\n`;
    text += `*Encarregado*\n`;
    text += `Nome: ${val('enc_nome')}\n`;
    text += `Parentesco: ${val('enc_parentesco')}\n`;
    text += `BI: ${val('enc_bi')}\n`;
    text += `Telefone: ${val('enc_tel')}\n`;
    if (val('enc_tel2')) text += `Tel. alt.: ${val('enc_tel2')}\n`;
    if (val('enc_email')) text += `E-mail: ${val('enc_email')}\n`;
    text += `\n*Académico*\n`;
    text += `Nível: ${val('nivel')}\n`;
    if (val('escola_prev')) text += `Escola anterior: ${val('escola_prev')}\n`;
    if (val('classe_concluida')) text += `Última classe: ${val('classe_concluida')}\n`;
    text += `Extracurriculares: ${extraList.length ? extraList.join(', ') : 'Nenhuma'}\n`;
    if (val('obs')) text += `Observações: ${val('obs')}\n`;
    text += `\nConfirmação preferida: ${confMode === 'whatsapp' ? 'WhatsApp / orientação da secretaria' : 'Presencial na secretaria'}`;

    if (confMode === 'whatsapp' || confMode === 'presencial') {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank');
    }
  });

  // Clear invalid on input
  form.addEventListener('input', (e) => {
    if (e.target.classList.contains('invalid') && e.target.value) {
      e.target.classList.remove('invalid');
    }
  });

  updateDocsHint();
})();
