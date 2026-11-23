(() => {
  'use strict';

  const STORAGE_KEY = 'cherepovets_routes_state_v1';

  const ICONS = {
    entertainment:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>',
    zarechenskiy:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 10h3l-3 6h5v5h6v-5h5l-3-6h3L12 3Z"/></svg>',
    sport:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    museum:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V9"/><path d="M19 21V9"/><path d="M9 21v-8"/><path d="M15 21v-8"/><path d="M2 9l10-6 10 6H2Z"/></svg>',
    embankment:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2 2.2-2 2.4-2"/><path d="M2 20c2.2 0 2.2-2 4.4-2s2.2 2 4.4 2 2.2-2 4.4-2 2.2 2 4.4 2 2.2-2 2.4-2"/><circle cx="12" cy="8" r="3"/></svg>'
  };

  const ROUTES = [
    {
      id: 'razvlekatelniy',
      title: 'Маршрут «Развлекательный»',
      shortTitle: 'Развлекательный',
      kicker: 'Зашекснинский район · гастрономия и городской ритм',
      summary: 'Кофейни, стрит-арт по петле квартала и неожиданные находки в ТЦ «Июнь».',
      image: 'assets/razvlekatelniy.jpg',
      icon: ICONS.entertainment,
      tasks: [
        {
          id: 'razv-1',
          title: 'Задание «Гастрономический ориентир»',
          text: 'Начните маршрут у точки «Пипяо Паназиатское». Узнайте (или предположите), почему это место так называется. Затем дойдите до кофейни и выпейте чашку кофе/чая, оценив, совпадает ли ваше настроение с атмосферой этого квартала.',
          interactive: 'gastro'
        },
        {
          id: 'razv-2',
          title: 'Задание «Урбан-арт»',
          text: 'Внимательно смотрите по сторонам, пока идете по петле маршрута. Найдите одно интересное граффити, мозаику, необычную вывеску или старинную арку. Сделайте фото на его фоне.',
          interactive: 'photo_note',
          noteLabel: 'Что интересного удалось найти?',
          notePlaceholder: 'Например: мозаика во дворе или необычная вывеска…'
        },
        {
          id: 'razv-3',
          title: 'Задание «Тайный покупатель»',
          text: 'Зайдите в ТЦ «Июнь». Найдите там самый неожиданный, на ваш взгляд, товар и сделайте его фото (не нарушая правила магазина).',
          interactive: 'photo_note',
          noteLabel: 'Самый неожиданный товар',
          notePlaceholder: 'Название или короткое описание находки…'
        }
      ]
    },
    {
      id: 'zarechenskiy',
      title: 'Маршрут «Зареченский»',
      shortTitle: 'Зареченский',
      kicker: 'Заягорбский район · контрасты и традиции',
      summary: 'Индустриальный горизонт у Макаринской рощи, книжные памятники и деревянное зодчество.',
      image: 'assets/zarechenskiy.jpg',
      icon: ICONS.zarechenskiy,
      tasks: [
        {
          id: 'zar-1',
          title: 'Задание «Контраст»',
          text: 'Сделайте фотографию, в кадр которой одновременно попадут индустриальный пейзаж (трубы завода) и природа (деревья Макаринской рощи). Оцените, насколько гармонично или контрастно это смотрится.',
          interactive: 'contrast'
        },
        {
          id: 'zar-2',
          title: 'Задание «Книжный след»',
          text: 'Возле точки «Сектор книжных памятников» найдите информацию о самой старинной книге или издании, связанном с этим местом.',
          interactive: 'note_only',
          noteLabel: 'Самая старинная книга или издание',
          notePlaceholder: 'Запишите название, век или интересный факт…'
        },
        {
          id: 'zar-3',
          title: 'Задание «Русский дух»',
          text: 'Дойдя до точки «Русская изба», рассмотрите архитектуру здания. Найдите и сфотографируйте три элемента традиционного русского деревянного зодчества (например, резные наличники, конек крыши, узор на ставнях).',
          interactive: 'wood_elements'
        }
      ]
    },
    {
      id: 'sportivniy',
      title: 'Маршрут «Спортивный»',
      shortTitle: 'Спортивный',
      kicker: 'Индустриальный район · движение и наблюдательность',
      summary: 'Спортивные площадки по пути, дворовые артефакты и геометрия городских проспектов.',
      image: 'assets/sportivniy.jpg',
      icon: ICONS.sport,
      tasks: [
        {
          id: 'sport-1',
          title: 'Задание «Спортивный чек-лист»',
          text: 'Пройдите маршрут и найдите 3 разные спортивные площадки. На каждой из них выполните простое упражнение (например: 10 приседаний, 15 отжиманий или 20 прыжков на скакалке, если она с собой).',
          interactive: 'sport_checklist'
        },
        {
          id: 'sport-2',
          title: 'Задание «Дворовый детектив»',
          text: 'Найдите самую необычную или самую старую на вид конструкцию на детских/спортивных площадках по пути. Сфотографируйте её и придумайте короткую историю (легенду) о том, как она там появилась.',
          interactive: 'photo_textarea',
          noteLabel: 'Ваша короткая легенда',
          notePlaceholder: 'Как и когда эта конструкция появилась во дворе?..'
        },
        {
          id: 'sport-3',
          title: 'Задание «Геометрия города»',
          text: 'Посчитайте, сколько раз ваш маршрут пересекает ту или иную улицу (например, улицу Мира или Победы), и найдите самый длинный прямой участок пути без поворотов.',
          interactive: 'geometry_counter'
        }
      ]
    },
    {
      id: 'muzeyniy',
      title: 'Маршрут «Музейный»',
      shortTitle: 'Музейный',
      kicker: 'Исторический центр · четыре эпохи в деталях',
      summary: 'Четыре музея на одной прогулке, архитектурные стили и истории знаменитых череповчан.',
      image: 'assets/muzeyniy.jpg',
      icon: ICONS.museum,
      tasks: [
        {
          id: 'muz-1',
          title: 'Задание «Охотник за экспонатами»',
          text: 'Вам нужно посетить все 4 музея на маршруте (Художественный, Археологии, Верещагина, Милютина). В каждом из них найдите один самый странный, самый красивый или самый древний предмет на ваш взгляд.',
          interactive: 'museums_checklist'
        },
        {
          id: 'muz-2',
          title: 'Задание «Архитектурный фотокросс»',
          text: 'Сфотографируйте фасады всех четырех зданий. Попробуйте определить, к какому архитектурному стилю относится каждое из них (например, деревянное зодчество, классицизм, модерн).',
          interactive: 'arch_styles'
        },
        {
          id: 'muz-3',
          title: 'Задание «Связь времен»',
          text: 'Найдите в Доме-музее Верещагина или Милютина информацию о том, как эти люди повлияли на развитие Череповца, и перескажите эту историю своему спутнику или запишите в заметки.',
          interactive: 'textarea_only',
          noteLabel: 'Заметка об истории Верещагина или Милютина',
          notePlaceholder: 'Запишите ключевые факты о влиянии на развитие города…'
        }
      ]
    },
    {
      id: 'naberezhnaya',
      title: 'Маршрут «Набережная»',
      shortTitle: 'Набережная',
      kicker: 'Соборная горка и парки · панорамы и тишина',
      summary: 'Виды на реку Ягорбу, арт-объект «Звезда Череповца» и 5 минут тишины в парке.',
      image: 'assets/naberezhnaya.jpg',
      icon: ICONS.embankment,
      tasks: [
        {
          id: 'nab-1',
          title: 'Задание «Панорамный фотокросс»',
          text: 'Поднимитесь на «Соборную горку» и сделайте самую красивую, на ваш взгляд, панорамную фотографию реки и противоположного берега.',
          interactive: 'photo_note',
          noteLabel: 'Подпись к панораме',
          notePlaceholder: 'Погода, время дня или впечатление от вида…'
        },
        {
          id: 'nab-2',
          title: 'Задание «Звездный час»',
          text: 'Найдите арт-объект «Звезда Череповца». Загадайте желание и сделайте креативное фото с этой звездой (используя эффект «зажатой» звезды или играя с ракурсом).',
          interactive: 'photo_note',
          noteLabel: 'Идея ракурса (или пометка о загаданном желании)',
          notePlaceholder: 'Например: звезда на ладони на фоне реки…'
        },
        {
          id: 'nab-3',
          title: 'Задание «Тихий час»',
          text: 'В Милютинском парке или парке Музея Верещагина найдите самую уединенную скамейку. Посидите на ней 5 минут в полной тишине, слушая звуки города и природы. Опишите одним словом чувство, которое вы испытали.',
          interactive: 'silence_timer'
        }
      ]
    }
  ];

  // Безопасная работа с localStorage
  function loadState() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {
      // Игнорируем переполнение или ограничения приватного режима
    }
  }

  let state = loadState();
  let currentRouteId = null;
  let toastTimer = null;

  // Таймер для задания «Тихий час»
  let silenceInterval = null;
  let silenceRemaining = 300;
  let silenceRunning = false;

  // Состояние лайтбокса
  let zoomScale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;

  // DOM-элементы
  const viewHero = document.getElementById('view-hero');
  const viewRoutes = document.getElementById('view-routes');
  const viewDetail = document.getElementById('view-detail');
  const routesGrid = document.getElementById('routes-grid');
  const overallProgressValue = document.getElementById('overall-progress-value');
  const routeSwitcher = document.getElementById('route-switcher');
  const detailKicker = document.getElementById('detail-kicker');
  const detailTitle = document.getElementById('detail-title');
  const detailProgressPill = document.getElementById('detail-progress-pill');
  const detailProgressFill = document.getElementById('detail-progress-fill');
  const detailMapImg = document.getElementById('detail-map-img');
  const tasksList = document.getElementById('tasks-list');

  const lightbox = document.getElementById('lightbox');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxViewport = document.getElementById('lightbox-viewport');
  const zoomLevelEl = document.getElementById('zoom-level');

  const confirmModal = document.getElementById('confirm-modal');
  const toastEl = document.getElementById('toast');

  function getTaskState(taskId) {
    if (!state[taskId]) {
      state[taskId] = { completed: false, data: {} };
    }
    if (!state[taskId].data) {
      state[taskId].data = {};
    }
    return state[taskId];
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2400);
  }

  function getRouteProgress(route) {
    const total = route.tasks.length;
    const done = route.tasks.filter((t) => state[t.id] && state[t.id].completed).length;
    return { done, total };
  }

  function getOverallProgress() {
    let done = 0;
    let total = 0;
    ROUTES.forEach((route) => {
      const p = getRouteProgress(route);
      done += p.done;
      total += p.total;
    });
    return { done, total };
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // ==========================================================================
  // Навигация (hash-роутинг, полностью совместимо с Cloudflare Pages)
  // ==========================================================================
  function navigate(hash) {
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      handleRouteChange();
    }
  }

  function handleRouteChange() {
    const hash = window.location.hash || '#/';
    stopSilenceTimer(false);

    if (hash === '#/routes') {
      currentRouteId = null;
      viewHero.classList.add('hidden');
      viewDetail.classList.add('hidden');
      viewRoutes.classList.remove('hidden');
      renderRoutesHub();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (hash.startsWith('#/route/')) {
      const id = hash.replace('#/route/', '');
      const route = ROUTES.find((r) => r.id === id);
      if (route) {
        currentRouteId = route.id;
        viewHero.classList.add('hidden');
        viewRoutes.classList.add('hidden');
        viewDetail.classList.remove('hidden');
        renderRouteDetail(route);
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }

    currentRouteId = null;
    viewRoutes.classList.add('hidden');
    viewDetail.classList.add('hidden');
    viewHero.classList.remove('hidden');
  }

  // ==========================================================================
  // Рендер экрана выбора 5 маршрутов (без нумерации)
  // ==========================================================================
  function renderRoutesHub() {
    const overall = getOverallProgress();
    overallProgressValue.textContent = `${overall.done} / ${overall.total}`;

    routesGrid.innerHTML = ROUTES.map((route) => {
      const { done, total } = getRouteProgress(route);
      const pct = Math.round((done / total) * 100);
      const isDone = done === total;

      return `
        <button type="button" class="route-card" data-route-id="${route.id}" role="listitem">
          <div class="route-card-bg" style="background-image: url('${route.image}')"></div>
          <div class="route-card-scrim"></div>
          <div class="route-card-top">
            <span class="route-icon-badge" aria-hidden="true">${route.icon}</span>
            <span class="route-card-status ${isDone ? 'is-done' : ''}">${isDone ? 'Пройден' : `${done} / ${total}`}</span>
          </div>
          <div class="route-card-body">
            <h3 class="route-card-title">${escapeHtml(route.title)}</h3>
            <p class="route-card-desc">${escapeHtml(route.summary)}</p>
          </div>
          <div class="route-card-foot">
            <div class="card-progress-bar">
              <div class="card-progress-fill ${isDone ? 'is-done' : ''}" style="width: ${pct}%"></div>
            </div>
            <span class="route-card-open">
              <span>Открыть</span>
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 10h10m0 0-3.5-3.5M15 10l-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </button>
      `;
    }).join('');
  }

  // ==========================================================================
  // Рендер страницы маршрута и интерактивных заданий
  // ==========================================================================
  function updateDetailProgress(route) {
    const { done, total } = getRouteProgress(route);
    const pct = Math.round((done / total) * 100);
    const isDone = done === total;

    detailProgressPill.textContent = isDone ? 'Маршрут пройден' : `${done} / ${total}`;
    detailProgressPill.classList.toggle('is-done', isDone);
    detailProgressFill.style.width = `${pct}%`;
    detailProgressFill.classList.toggle('is-done', isDone);
  }

  function renderRouteDetail(route) {
    routeSwitcher.innerHTML = ROUTES.map(
      (r) => `
        <button type="button" class="switcher-pill ${r.id === route.id ? 'active' : ''}" data-switch-route="${r.id}">
          ${escapeHtml(r.shortTitle)}
        </button>
      `
    ).join('');

    detailKicker.textContent = route.kicker;
    detailTitle.textContent = route.title;
    detailMapImg.src = route.image;
    detailMapImg.alt = `Карта: ${route.title}`;
    updateDetailProgress(route);

    tasksList.innerHTML = route.tasks.map((task) => renderTaskCard(task)).join('');
  }

  function renderPhotoBlock(taskId, photos, maxPhotos = 3) {
    const thumbs = (photos || [])
      .map(
        (src, idx) => `
          <div class="photo-thumb">
            <img src="${src}" alt="Прикреплённое фото">
            <button type="button" class="photo-remove" data-action="remove-photo" data-task-id="${taskId}" data-photo-idx="${idx}" aria-label="Удалить фото">✕</button>
          </div>
        `
      )
      .join('');

    return `
      <div class="photo-uploader">
        <div class="photo-upload-bar">
          <label class="file-btn">
            <span>Прикрепить фото</span>
            <input type="file" accept="image/*" data-action="upload-photo" data-task-id="${taskId}" data-max="${maxPhotos}">
          </label>
          <span class="photo-hint">Фото сохраняется локально в вашем браузере (до ${maxPhotos} шт.)</span>
        </div>
        ${thumbs ? `<div class="photo-preview-grid">${thumbs}</div>` : ''}
      </div>
    `;
  }

  function renderInteractiveBody(task, taskState) {
    const data = taskState.data || {};

    switch (task.interactive) {
      case 'gastro': {
        const moods = ['Да, идеально совпадает', 'Скорее да', 'Неожиданный контраст'];
        return `
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-hyp">Ваша версия: почему место называется «Пипяо Паназиатское»?</label>
            <input id="input-${task.id}-hyp" type="text" class="text-input" data-action="field" data-task-id="${task.id}" data-key="hypothesis" value="${escapeHtml(data.hypothesis || '')}" placeholder="Запишите догадку или узнанный факт…">
          </div>
          <div class="field-group">
            <span class="field-label">Совпадает ли ваше настроение с атмосферой квартала?</span>
            <div class="choice-row">
              ${moods
                .map(
                  (m) => `
                    <button type="button" class="choice-chip ${data.mood === m ? 'selected' : ''}" data-action="choice" data-task-id="${task.id}" data-key="mood" data-value="${escapeHtml(m)}">${escapeHtml(m)}</button>
                  `
                )
                .join('')}
            </div>
          </div>
        `;
      }

      case 'photo_note':
        return `
          ${renderPhotoBlock(task.id, data.photos, 2)}
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-note">${escapeHtml(task.noteLabel)}</label>
            <input id="input-${task.id}-note" type="text" class="text-input" data-action="field" data-task-id="${task.id}" data-key="note" value="${escapeHtml(data.note || '')}" placeholder="${escapeHtml(task.notePlaceholder)}">
          </div>
        `;

      case 'photo_textarea':
        return `
          ${renderPhotoBlock(task.id, data.photos, 2)}
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-note">${escapeHtml(task.noteLabel)}</label>
            <textarea id="input-${task.id}-note" class="text-area" data-action="field" data-task-id="${task.id}" data-key="note" placeholder="${escapeHtml(task.notePlaceholder)}">${escapeHtml(data.note || '')}</textarea>
          </div>
        `;

      case 'note_only':
        return `
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-note">${escapeHtml(task.noteLabel)}</label>
            <input id="input-${task.id}-note" type="text" class="text-input" data-action="field" data-task-id="${task.id}" data-key="note" value="${escapeHtml(data.note || '')}" placeholder="${escapeHtml(task.notePlaceholder)}">
          </div>
        `;

      case 'textarea_only':
        return `
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-note">${escapeHtml(task.noteLabel)}</label>
            <textarea id="input-${task.id}-note" class="text-area" data-action="field" data-task-id="${task.id}" data-key="note" placeholder="${escapeHtml(task.notePlaceholder)}">${escapeHtml(data.note || '')}</textarea>
          </div>
        `;

      case 'contrast': {
        const val = typeof data.score === 'number' ? data.score : 5;
        return `
          ${renderPhotoBlock(task.id, data.photos, 2)}
          <div class="slider-box">
            <div class="slider-labels">
              <span>Резкий контраст</span>
              <span class="slider-value" id="slider-val-${task.id}">${val} / 10</span>
              <span>Полная гармония</span>
            </div>
            <input type="range" min="1" max="10" value="${val}" class="range-input" data-action="slider" data-task-id="${task.id}" data-key="score" aria-label="Оценка гармонии и контраста">
          </div>
        `;
      }

      case 'wood_elements': {
        const items = [
          { key: 'el1', label: 'Элемент зодчества', placeholder: 'Например: резные наличники' },
          { key: 'el2', label: 'Элемент зодчества', placeholder: 'Например: конёк крыши' },
          { key: 'el3', label: 'Элемент зодчества', placeholder: 'Например: узор на ставнях' }
        ];
        return `
          <div class="subchecklist">
            ${items
              .map((item) => {
                const checked = Boolean(data[`${item.key}_done`]);
                const text = data[`${item.key}_text`] || '';
                return `
                  <div class="subcheck-item ${checked ? 'done' : ''}">
                    <label class="subcheck-label">
                      <input type="checkbox" class="subcheck-box" data-action="subcheck" data-task-id="${task.id}" data-key="${item.key}_done" ${checked ? 'checked' : ''}>
                      <span>${escapeHtml(item.label)}</span>
                    </label>
                    <input type="text" class="subcheck-input" data-action="field" data-task-id="${task.id}" data-key="${item.key}_text" value="${escapeHtml(text)}" placeholder="${escapeHtml(item.placeholder)}">
                  </div>
                `;
              })
              .join('')}
          </div>
          ${renderPhotoBlock(task.id, data.photos, 3)}
        `;
      }

      case 'sport_checklist': {
        const spots = [
          { key: 'spot1', label: 'Спортивная площадка', placeholder: 'Например: 10 приседаний' },
          { key: 'spot2', label: 'Спортивная площадка', placeholder: 'Например: 15 отжиманий' },
          { key: 'spot3', label: 'Спортивная площадка', placeholder: 'Например: 20 прыжков' }
        ];
        return `
          <div class="subchecklist">
            ${spots
              .map((s) => {
                const checked = Boolean(data[`${s.key}_done`]);
                const text = data[`${s.key}_text`] || '';
                return `
                  <div class="subcheck-item ${checked ? 'done' : ''}">
                    <label class="subcheck-label">
                      <input type="checkbox" class="subcheck-box" data-action="subcheck" data-task-id="${task.id}" data-key="${s.key}_done" ${checked ? 'checked' : ''}>
                      <span>${escapeHtml(s.label)}</span>
                    </label>
                    <input type="text" class="subcheck-input" data-action="field" data-task-id="${task.id}" data-key="${s.key}_text" value="${escapeHtml(text)}" placeholder="${escapeHtml(s.placeholder)}">
                  </div>
                `;
              })
              .join('')}
          </div>
        `;
      }

      case 'geometry_counter': {
        const count = Number(data.crossings || 0);
        return `
          <div class="counter-box">
            <div>
              <div class="field-label">Количество пересечений улицы</div>
              <div class="photo-hint">Нажимайте «+» каждый раз при пересечении</div>
            </div>
            <div class="counter-controls">
              <button type="button" class="counter-btn" data-action="counter" data-task-id="${task.id}" data-delta="-1" aria-label="Уменьшить">−</button>
              <span class="counter-num" id="counter-val-${task.id}">${count}</span>
              <button type="button" class="counter-btn" data-action="counter" data-task-id="${task.id}" data-delta="1" aria-label="Увеличить">+</button>
            </div>
          </div>
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-street">Какую улицу считали и где самый длинный прямой участок?</label>
            <input id="input-${task.id}-street" type="text" class="text-input" data-action="field" data-task-id="${task.id}" data-key="straight" value="${escapeHtml(data.straight || '')}" placeholder="Например: пр. Победы — прямой участок от… до…">
          </div>
        `;
      }

      case 'museums_checklist': {
        const museums = [
          { key: 'art', label: 'Художественный музей' },
          { key: 'arch', label: 'Музей Археологии' },
          { key: 'ver', label: 'Дом-музей Верещагина' },
          { key: 'mil', label: 'Музей «Дом И. А. Милютина»' }
        ];
        return `
          <div class="subchecklist">
            ${museums
              .map((m) => {
                const checked = Boolean(data[`${m.key}_done`]);
                const text = data[`${m.key}_item`] || '';
                return `
                  <div class="subcheck-item ${checked ? 'done' : ''}">
                    <label class="subcheck-label">
                      <input type="checkbox" class="subcheck-box" data-action="subcheck" data-task-id="${task.id}" data-key="${m.key}_done" ${checked ? 'checked' : ''}>
                      <span>${escapeHtml(m.label)}</span>
                    </label>
                    <input type="text" class="subcheck-input" data-action="field" data-task-id="${task.id}" data-key="${m.key}_item" value="${escapeHtml(text)}" placeholder="Найденный экспонат…">
                  </div>
                `;
              })
              .join('')}
          </div>
        `;
      }

      case 'arch_styles': {
        const styles = ['Деревянное зодчество', 'Классицизм', 'Модерн', 'Эклектика', 'Советский неоклассицизм'];
        const selected = Array.isArray(data.styles) ? data.styles : [];
        return `
          <div class="field-group">
            <span class="field-label">Отметьте архитектурные стили, которые вы определили</span>
            <div class="choice-row">
              ${styles
                .map(
                  (st) => `
                    <button type="button" class="choice-chip ${selected.includes(st) ? 'selected' : ''}" data-action="multichoice" data-task-id="${task.id}" data-key="styles" data-value="${escapeHtml(st)}">${escapeHtml(st)}</button>
                  `
                )
                .join('')}
            </div>
          </div>
          ${renderPhotoBlock(task.id, data.photos, 4)}
        `;
      }

      case 'silence_timer': {
        const mm = String(Math.floor(silenceRemaining / 60)).padStart(2, '0');
        const ss = String(silenceRemaining % 60).padStart(2, '0');
        return `
          <div class="timer-box">
            <div class="timer-display-wrap">
              <span class="timer-clock" id="silence-clock">${mm}:${ss}</span>
              <span class="timer-status" id="silence-status">${silenceRemaining === 0 ? 'Пять минут тишины завершены' : 'Таймер на 5 минут тишины'}</span>
            </div>
            <div class="timer-actions">
              <button type="button" class="accent-btn" id="btn-timer-toggle" data-action="timer-toggle">${silenceRunning ? 'Пауза' : 'Старт'}</button>
              <button type="button" class="subtle-btn" data-action="timer-reset">Сброс</button>
            </div>
          </div>
          <div class="field-group">
            <label class="field-label" for="input-${task.id}-word">Опишите одним словом чувство, которое вы испытали</label>
            <input id="input-${task.id}-word" type="text" class="text-input" data-action="field" data-task-id="${task.id}" data-key="feeling" value="${escapeHtml(data.feeling || '')}" placeholder="Например: умиротворение, лёгкость, спокойствие…">
          </div>
        `;
      }

      default:
        return '';
    }
  }

  function renderTaskCard(task) {
    const taskState = getTaskState(task.id);
    const done = Boolean(taskState.completed);
    return `
      <article class="task-card ${done ? 'completed' : ''}" data-task-card="${task.id}">
        <div class="task-header">
          <h4 class="task-title">${escapeHtml(task.title)}</h4>
          <button type="button" class="task-toggle ${done ? 'checked' : ''}" data-action="toggle-complete" data-task-id="${task.id}" aria-pressed="${done}">
            <span class="task-toggle-dot">${done ? '✓' : ''}</span>
            <span>${done ? 'Выполнено' : 'Отметить'}</span>
          </button>
        </div>
        <p class="task-text">${escapeHtml(task.text)}</p>
        <div class="task-interactive">
          ${renderInteractiveBody(task, taskState)}
        </div>
      </article>
    `;
  }

  // ==========================================================================
  // Таймер тишины (5 минут)
  // ==========================================================================
  function updateTimerUI() {
    const clock = document.getElementById('silence-clock');
    const status = document.getElementById('silence-status');
    const btn = document.getElementById('btn-timer-toggle');
    if (!clock) return;

    const mm = String(Math.floor(silenceRemaining / 60)).padStart(2, '0');
    const ss = String(silenceRemaining % 60).padStart(2, '0');
    clock.textContent = `${mm}:${ss}`;
    if (btn) btn.textContent = silenceRunning ? 'Пауза' : 'Старт';
    if (status) {
      if (silenceRemaining === 0) {
        status.textContent = 'Пять минут тишины завершены';
      } else if (silenceRunning) {
        status.textContent = 'Слушайте звуки города и природы…';
      } else {
        status.textContent = 'Таймер на 5 минут тишины';
      }
    }
  }

  function playGentleChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.45);
    } catch (_) {
      // Аудио недоступно
    }
  }

  function stopSilenceTimer(reset = false) {
    if (silenceInterval) {
      clearInterval(silenceInterval);
      silenceInterval = null;
    }
    silenceRunning = false;
    if (reset) {
      silenceRemaining = 300;
    }
    updateTimerUI();
  }

  function toggleSilenceTimer() {
    if (silenceRunning) {
      stopSilenceTimer(false);
      return;
    }
    if (silenceRemaining <= 0) {
      silenceRemaining = 300;
    }
    silenceRunning = true;
    updateTimerUI();
    silenceInterval = setInterval(() => {
      silenceRemaining -= 1;
      if (silenceRemaining <= 0) {
        silenceRemaining = 0;
        stopSilenceTimer(false);
        playGentleChime();
        showToast('5 минут тишины завершены');
      } else {
        updateTimerUI();
      }
    }, 1000);
  }

  // ==========================================================================
  // Сжатие загруженного пользователем фото для локального хранения
  // ==========================================================================
  function compressImageFile(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 640;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        try {
          callback(canvas.toDataURL('image/jpeg', 0.72));
        } catch (_) {
          callback(e.target.result);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // ==========================================================================
  // Лайтбокс карты (зум + перетаскивание)
  // ==========================================================================
  function applyLightboxTransform() {
    lightboxImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
    zoomLevelEl.textContent = `${Math.round(zoomScale * 100)}%`;
  }

  function openLightbox() {
    const route = ROUTES.find((r) => r.id === currentRouteId);
    if (!route) return;
    lightboxTitle.textContent = route.title;
    lightboxImg.src = route.image;
    lightboxImg.alt = `Карта: ${route.title}`;
    zoomScale = 1;
    panX = 0;
    panY = 0;
    applyLightboxTransform();
    lightbox.classList.remove('hidden');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  function adjustZoom(delta) {
    zoomScale = Math.min(4, Math.max(1, Number((zoomScale + delta).toFixed(2))));
    if (zoomScale === 1) {
      panX = 0;
      panY = 0;
    }
    applyLightboxTransform();
  }

  // ==========================================================================
  // Обработчики событий
  // ==========================================================================
  document.getElementById('btn-to-routes').addEventListener('click', () => navigate('#/routes'));
  document.getElementById('btn-back-home').addEventListener('click', () => navigate('#/'));
  document.getElementById('btn-back-routes').addEventListener('click', () => navigate('#/routes'));

  routesGrid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-route-id]');
    if (!card) return;
    navigate(`#/route/${card.dataset.routeId}`);
  });

  routeSwitcher.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-switch-route]');
    if (!btn) return;
    navigate(`#/route/${btn.dataset.switchRoute}`);
  });

  // Делегирование событий в списке заданий
  tasksList.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const taskId = target.dataset.taskId;
    const route = ROUTES.find((r) => r.id === currentRouteId);

    if (action === 'toggle-complete' && route) {
      const ts = getTaskState(taskId);
      ts.completed = !ts.completed;
      saveState();
      renderRouteDetail(route);
      showToast(ts.completed ? 'Задание отмечено выполненным' : 'Отметка снята');
      return;
    }

    if (action === 'choice' && route) {
      const ts = getTaskState(taskId);
      ts.data[target.dataset.key] = target.dataset.value;
      saveState();
      renderRouteDetail(route);
      return;
    }

    if (action === 'multichoice' && route) {
      const ts = getTaskState(taskId);
      const key = target.dataset.key;
      const val = target.dataset.value;
      const arr = Array.isArray(ts.data[key]) ? [...ts.data[key]] : [];
      const idx = arr.indexOf(val);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(val);
      ts.data[key] = arr;
      saveState();
      renderRouteDetail(route);
      return;
    }

    if (action === 'counter') {
      const ts = getTaskState(taskId);
      const delta = Number(target.dataset.delta || 0);
      const next = Math.max(0, Number(ts.data.crossings || 0) + delta);
      ts.data.crossings = next;
      saveState();
      const el = document.getElementById(`counter-val-${taskId}`);
      if (el) el.textContent = String(next);
      return;
    }

    if (action === 'remove-photo' && route) {
      const ts = getTaskState(taskId);
      const idx = Number(target.dataset.photoIdx);
      if (Array.isArray(ts.data.photos)) {
        ts.data.photos.splice(idx, 1);
        saveState();
        renderRouteDetail(route);
      }
      return;
    }

    if (action === 'timer-toggle') {
      toggleSilenceTimer();
      return;
    }

    if (action === 'timer-reset') {
      stopSilenceTimer(true);
    }
  });

  tasksList.addEventListener('input', (e) => {
    const target = e.target;
    const action = target.dataset.action;
    const taskId = target.dataset.taskId;
    if (!action || !taskId) return;

    if (action === 'field') {
      const ts = getTaskState(taskId);
      ts.data[target.dataset.key] = target.value;
      saveState();
    } else if (action === 'slider') {
      const ts = getTaskState(taskId);
      const num = Number(target.value);
      ts.data[target.dataset.key] = num;
      saveState();
      const label = document.getElementById(`slider-val-${taskId}`);
      if (label) label.textContent = `${num} / 10`;
    }
  });

  tasksList.addEventListener('change', (e) => {
    const target = e.target;
    const action = target.dataset.action;
    const taskId = target.dataset.taskId;
    const route = ROUTES.find((r) => r.id === currentRouteId);
    if (!action || !taskId || !route) return;

    if (action === 'subcheck') {
      const ts = getTaskState(taskId);
      ts.data[target.dataset.key] = target.checked;
      saveState();
      const row = target.closest('.subcheck-item');
      if (row) row.classList.toggle('done', target.checked);
      return;
    }

    if (action === 'upload-photo') {
      const file = target.files && target.files[0];
      if (!file) return;
      const max = Number(target.dataset.max || 3);
      const ts = getTaskState(taskId);
      const photos = Array.isArray(ts.data.photos) ? [...ts.data.photos] : [];
      if (photos.length >= max) {
        showToast(`Можно прикрепить до ${max} фото`);
        target.value = '';
        return;
      }
      compressImageFile(file, (dataUrl) => {
        photos.push(dataUrl);
        ts.data.photos = photos;
        saveState();
        renderRouteDetail(route);
        showToast('Фото добавлено');
      });
    }
  });

  // Лайтбокс
  document.getElementById('btn-open-lightbox').addEventListener('click', openLightbox);
  document.getElementById('map-image-trigger').addEventListener('click', openLightbox);
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
  document.getElementById('zoom-in').addEventListener('click', () => adjustZoom(0.4));
  document.getElementById('zoom-out').addEventListener('click', () => adjustZoom(-0.4));
  document.getElementById('zoom-reset').addEventListener('click', () => {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    applyLightboxTransform();
  });

  lightboxViewport.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      adjustZoom(e.deltaY < 0 ? 0.25 : -0.25);
    },
    { passive: false }
  );

  lightboxViewport.addEventListener('pointerdown', (e) => {
    if (zoomScale <= 1) return;
    isDragging = true;
    dragStartX = e.clientX - panX;
    dragStartY = e.clientY - panY;
    lightboxViewport.classList.add('grabbing');
    lightboxViewport.setPointerCapture(e.pointerId);
  });

  lightboxViewport.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - dragStartX;
    panY = e.clientY - dragStartY;
    applyLightboxTransform();
  });

  lightboxViewport.addEventListener('pointerup', () => {
    isDragging = false;
    lightboxViewport.classList.remove('grabbing');
  });

  // Сброс прогресса маршрута (внутристраничное подтверждение)
  document.getElementById('btn-reset-route').addEventListener('click', () => {
    confirmModal.classList.remove('hidden');
  });

  function closeConfirmModal() {
    confirmModal.classList.add('hidden');
  }

  document.getElementById('confirm-cancel').addEventListener('click', closeConfirmModal);
  document.getElementById('confirm-backdrop').addEventListener('click', closeConfirmModal);
  document.getElementById('confirm-ok').addEventListener('click', () => {
    const route = ROUTES.find((r) => r.id === currentRouteId);
    if (route) {
      route.tasks.forEach((t) => {
        delete state[t.id];
      });
      saveState();
      stopSilenceTimer(true);
      renderRouteDetail(route);
      showToast('Прогресс маршрута сброшен');
    }
    closeConfirmModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeConfirmModal();
    }
  });

  window.addEventListener('hashchange', handleRouteChange);

  // Старт
  handleRouteChange();
})();
