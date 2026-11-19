'use strict';

const CLUB_PHONE = '+375 (33) 356-74-52';
const CLUB_PHONE_LINK = 'tel:+375333567452';

const cards = [
    {
        id: 'single',
        title: 'Разовое посещение',
        subtitle: '1 тренировка',
        price: 15,
        renewal: null,
        badge: '',
        details: ['1 тренировка', 'без скидок']
    },
    {
        id: 'social',
        title: 'Льготная',
        subtitle: 'Для школьников и студентов',
        price: 55,
        renewal: 5,
        badge: '',
        details: ['ежедневно, 30 дней', 'выход до 18:00', 'посещение 2 ч', 'продление -5%']
    },
    {
        id: 'day',
        title: 'Дневная',
        subtitle: '10 посещений',
        price: 64,
        renewal: 7,
        badge: '',
        details: ['10 посещений', '30 дней', 'вход до 16:00', 'посещение 2 ч', 'продление -7%']
    },
    {
        id: 'universal',
        title: 'Универсальная',
        subtitle: '10 посещений',
        price: 79,
        renewal: 7,
        badge: '',
        details: ['10 посещений', '30 дней', 'любое время', 'посещение 2 ч', 'продление -7%']
    },
    {
        id: 'unlim',
        title: 'UNLIM',
        subtitle: 'Ежедневно, без ограничений',
        price: 99,
        renewal: 5,
        badge: 'Безлимит',
        details: ['ежедневно, 30 дней', 'без ограничений по времени', 'продление -5%']
    },
    {
        id: 'standard',
        title: 'Стандарт',
        subtitle: 'Ежедневно',
        price: 119,
        renewal: 7,
        badge: '',
        details: ['ежедневно, 30 дней', 'посещение 2 ч', 'продление -7%']
    },
    {
        id: 'standard-3',
        title: 'Стандарт 3',
        subtitle: '3 месяца',
        price: 211,
        renewal: 5,
        badge: '',
        details: ['ежедневно, 90 дней', 'посещение 2 ч', 'заморозка 10 дн', '2 гостевых визита', 'продление -5%']
    },
    {
        id: 'standard-6',
        title: 'Стандарт 6',
        subtitle: '6 месяцев',
        price: 397,
        renewal: 5,
        badge: '',
        details: ['ежедневно, 6 месяцев', 'посещение 2 ч', 'заморозка 30 дн', '4 гостевых визита', 'продление -5%']
    },
    {
        id: 'standard-12',
        title: 'Стандарт 12',
        subtitle: 'Годовая карта',
        price: 649,
        renewal: 5,
        badge: '',
        details: ['ежедневно, годовая', 'посещение 2 ч', 'заморозка 45 дн', '6 гостевых визитов', 'продление -5%']
    }
];

const services = [
    { id: 'start', title: 'Пакет «СТАРТ для новичка»', subtitle: '4 тренировки с инструктором', priceLabel: '60 BYN' },
    { id: 'personal', title: 'Персональная тренировка', subtitle: 'Индивидуальная работа с тренером', priceLabel: '40 BYN' },
    { id: 'split', title: 'СПЛИТ-тренировка', subtitle: 'Парная тренировка с тренером', priceLabel: '60 BYN' },
    { id: 'mini-group', title: 'Мини-группа с тренером', subtitle: 'Тренировка в малой группе, по записи', priceLabel: 'По записи' },
    { id: 'group-single', title: 'Групповой фитнес / Степ / Пилатес', subtitle: 'Разовое занятие по расписанию, предварительная запись', priceLabel: '15 BYN' },
    { id: 'group-8', title: 'Групповой фитнес / Степ', subtitle: '8 занятий по расписанию', priceLabel: '92 BYN' },
    { id: 'group-12', title: 'Групповой фитнес / Степ', subtitle: '12 занятий по расписанию', priceLabel: '110 BYN' },
    { id: 'trx', title: 'TRX-тренировки', subtitle: 'Вт, Чт 09:00, подвесной тренинг на всё тело', priceLabel: 'от 15 BYN' },
    { id: 'massage', title: 'Массаж', subtitle: 'Восстановление после нагрузок', priceLabel: 'от 30 BYN' },
    { id: 'training-plan', title: 'План тренировок', subtitle: 'Индивидуальная программа', priceLabel: '90 BYN' },
    { id: 'nutrition-plan', title: 'План питания', subtitle: 'Персональный рацион', priceLabel: '90 BYN' },
    { id: 'locker', title: 'Личный шкафчик', subtitle: 'Аренда для хранения на 1 месяц', priceLabel: '15 BYN' },
    { id: 'towel', title: 'Аренда полотенца', subtitle: 'На время тренировки, уточнять у администратора', priceLabel: 'Уточнять у администратора' }
];

const trainers = [
    {
        name: 'Анжелика',
        role: 'Дипломированный тренер',
        description: 'БГУФК, Академия фитнеса: рекомпозиция, диагностика и работа со сколиозом, MFR.',
        tags: ['БГУФК', 'рекомпозиция', 'сколиоз', 'MFR']
    },
    {
        name: 'Татьяна',
        role: 'Дипломированный тренер / БГПУ',
        description: 'БГПУ: степ-аэробика, силовые направления, функциональный тренинг, тренировки после родов, стретчинг, Pump.',
        tags: ['БГПУ', 'степ', 'силовые', 'Pump']
    },
    {
        name: 'Анастасия',
        role: 'Дипломированный тренер / БГПУ',
        description: 'БГПУ: призер соревнований по танцевальной аэробике, силовые, диетология, интервальные тренировки, стретчинг.',
        tags: ['БГПУ', 'танцевальная аэробика', 'силовые', 'диетология']
    },
    {
        name: 'Антон',
        role: 'Тренер по спорту, инструктор-методист',
        description: 'НЦРТ Фитнес Академия: постановка техники с нуля, гармоничное развитие, силовые.',
        tags: ['НЦРТ Фитнес Академия', 'техника с нуля', 'силовые']
    },
    {
        name: 'Виктория',
        role: 'Фитнес-инструктор',
        description: 'Высшая школа фитнеса «ФИТНЕС ПРОФИ»: реабилитационный фитнес, ЛФК, пилатес, йога, диетология, силовой тренинг.',
        tags: ['ФИТНЕС ПРОФИ', 'реабилитация', 'пилатес', 'йога']
    },
    {
        name: 'Татьяна',
        role: 'Тренер по спорту, инструктор-методист / НЦРТ',
        description: 'НЦРТ Фитнес Академия: осознанный фитнес, паттерны движений, работа с телом через дыхание.',
        tags: ['НЦРТ Фитнес Академия', 'паттерны движений', 'дыхание']
    },
    {
        name: 'Оксана',
        role: 'Тренер по спорту',
        description: 'БГУФК, Фитнес Академия: персональный женский тренер, высшее спортивное и медицинское образование, отстройка техники с нуля.',
        tags: ['БГУФК', 'женский тренер', 'медицинское образование']
    }
];

const schedule = {
    monday: { label: 'Понедельник', classes: [
        { time: '09:00', name: 'Степ' },
        { time: '10:10', name: 'Mind Body' },
        { time: '17:30', name: 'Силовой класс' },
        { time: '18:30', name: 'Силовой класс' },
        { time: '19:30', name: 'Степ-интервал' }
    ] },
    tuesday: { label: 'Вторник', classes: [
        { time: '09:00', name: 'TRX' },
        { time: '17:30', name: 'Сила + stretch' },
        { time: '18:30', name: 'Степ' },
        { time: '19:30', name: 'Пилатес' }
    ] },
    wednesday: { label: 'Среда', classes: [
        { time: '09:00', name: 'Силовой класс' },
        { time: '10:10', name: 'Mind Body' },
        { time: '17:30', name: 'Степ' },
        { time: '18:30', name: 'Пилатес' },
        { time: '19:30', name: 'Силовой класс' }
    ] },
    thursday: { label: 'Четверг', classes: [
        { time: '09:00', name: 'TRX' },
        { time: '17:30', name: 'Stretch' },
        { time: '18:30', name: 'Интервал' },
        { time: '19:30', name: 'Пилатес' }
    ] },
    friday: { label: 'Пятница', classes: [
        { time: '09:00', name: 'Степ-интервал' },
        { time: '10:10', name: 'Силовой класс' },
        { time: '17:30', name: 'Степ-интервал' },
        { time: '18:30', name: 'Круговая' },
        { time: '19:30', name: 'Пилатес' }
    ] }
};

const chatAnswers = {
    price: {
        question: 'Сколько стоит безлимит?',
        answer: 'Карта UNLIM стоит 99 BYN: ежедневно, 30 дней, без ограничений по времени. При продлении в течение 5 дней после окончания карты действует скидка -5%.'
    },
    'first-training': {
        question: 'Что нужно на первую тренировку?',
        answer: 'Возьмите удобную спортивную одежду, обувь и воду. Полотенце можно арендовать на время тренировки у администратора. Для старта с техникой подойдёт пакет «СТАРТ для новичка» - 4 тренировки с инструктором за 60 BYN.'
    },
    schedule: {
        question: 'Когда занятия по пилатесу и TRX?',
        answer: 'Пилатес: Вт 19:30, Ср 18:30, Чт 19:30, Пт 19:30. TRX: Вт и Чт в 09:00. Предварительная запись обязательна.'
    },
    discount: {
        question: 'Как получить скидку 15%?',
        answer: 'Скидка именинника -15% действует 5 дней до и 5 дней после дня рождения. Покажите документ администратору при покупке карты.'
    }
};

let calcMode = 'regular';
let activeDay = 'monday';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function getCardPrice(card) {
    if (calcMode === 'birthday' && card.renewal !== null) {
        return Math.round(card.price * 0.85);
    }
    if (calcMode === 'renewal' && card.renewal !== null) {
        return Math.round(card.price * (1 - card.renewal / 100));
    }
    return card.price;
}

function renderCards() {
    const grid = $('#priceGridCards');
    if (!grid) return;

    grid.innerHTML = cards.map((card, index) => {
        const current = getCardPrice(card);
        const hasDiscount = current < card.price;
        const number = String(index + 1).padStart(2, '0');

        return `
            <article class="tariff-row${card.id === 'unlim' ? ' is-featured' : ''}">
                <div class="tariff-info">
                    <span class="tariff-index">${number}</span>
                    <div class="tariff-copy">
                        <h3>${card.title}${card.badge ? `<span class="tariff-badge">${card.badge}</span>` : ''}</h3>
                        <p>${card.details.join(' · ')}</p>
                    </div>
                </div>
                <div class="tariff-buy">
                    <div class="tariff-price">
                        ${hasDiscount ? `<span class="tariff-old">${card.price} BYN</span>` : ''}
                        <span class="tariff-current">${current}<small> BYN</small></span>
                    </div>
                    <button class="btn btn-outline select-offer" type="button" data-type="card" data-id="${card.id}">Выбрать</button>
                </div>
            </article>
        `;
    }).join('');
}

function renderServices() {
    const grid = $('#priceGridServices');
    if (!grid) return;

    grid.innerHTML = services.map((service) => {
        const hasUnit = service.priceLabel.includes('BYN');
        const priceMain = service.priceLabel.replace(' BYN', '');
        return `
            <article class="service-row">
                <div class="service-copy">
                    <h3>${service.title}</h3>
                    <p>${service.subtitle}</p>
                </div>
                <div class="service-buy">
                    <div class="service-price">${priceMain}${hasUnit ? '<small>BYN</small>' : ''}</div>
                    <button class="btn btn-outline select-offer" type="button" data-type="service" data-id="${service.id}">Запись</button>
                </div>
            </article>
        `;
    }).join('');
}

function renderTrainers() {
    const grid = $('#teamGrid');
    if (!grid) return;

    grid.innerHTML = trainers.map((trainer, index) => `
        <article class="team-card">
            <div class="team-top">
                <span class="team-number">${String(index + 1).padStart(2, '0')}</span>
                <span class="team-initial">${trainer.name.charAt(0)}</span>
            </div>
            <h3>${trainer.name}</h3>
            <p class="team-role">${trainer.role}</p>
            <p class="team-description">${trainer.description}</p>
            <div class="team-tags">${trainer.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
            <button class="btn btn-outline trainer-select" type="button" data-trainer="${trainer.name}">Записаться к тренеру</button>
        </article>
    `).join('');
}

function buildDatalist() {
    const datalist = $('#serviceOptions');
    if (!datalist) return;

    const cardOptions = cards.map((card) => `<option value="${card.title} - ${card.price} BYN"></option>`);
    const serviceOptions = services.map((service) => `<option value="${service.title} - ${service.priceLabel}"></option>`);
    const trainerOptions = trainers.map((trainer) => `<option value="Тренировка с тренером: ${trainer.name}"></option>`);
    datalist.innerHTML = [...cardOptions, ...serviceOptions, ...trainerOptions].join('');
}

function findOffer(type, id) {
    if (type === 'card') {
        const card = cards.find((item) => item.id === id);
        if (!card) return null;
        const current = getCardPrice(card);
        const discount = calcMode === 'birthday' ? ' (скидка именинника)' : calcMode === 'renewal' ? ' (скидка на продление)' : '';
        return `Карта «${card.title}» - ${current} BYN${discount}`;
    }

    const service = services.find((item) => item.id === id);
    if (!service) return null;
    return `${service.title} - ${service.priceLabel}`;
}

function selectOffer(text) {
    const serviceInput = $('#serviceInput');
    if (serviceInput) serviceInput.value = text;
    const booking = $('#booking');
    if (booking) booking.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateCalcNote() {
    const note = $('#calcNote');
    if (!note) return;
    if (calcMode === 'birthday') {
        note.textContent = 'Цены со скидкой именинника -15%. Скидка действует 5 дней до и 5 дней после дня рождения.';
    } else if (calcMode === 'renewal') {
        note.textContent = 'Цены с продлением: -5% или -7% в зависимости от карты. Скидка действует 5 дней после окончания предыдущего абонемента.';
    } else {
        note.textContent = 'Показаны базовые цены клуба.';
    }
}

function renderSchedule() {
    const list = $('#scheduleList');
    if (!list) return;
    const day = schedule[activeDay];

    list.innerHTML = day.classes.map((item) => `
        <article class="schedule-row">
            <span class="schedule-time">${item.time}</span>
            <span class="schedule-name">${item.name}<small>${day.label} / предварительная запись</small></span>
            <button class="btn btn-outline group-select" type="button" data-time="${item.time}" data-name="${item.name}" data-day="${day.label}">Записаться</button>
        </article>
    `).join('');
}

function formatPhone(raw) {
    let digits = raw.replace(/\D/g, '');
    if (digits.startsWith('375')) digits = digits.slice(3);
    if (digits.startsWith('80')) digits = digits.slice(2);
    if (digits.startsWith('0')) digits = digits.slice(1);
    digits = digits.slice(0, 9);

    let result = '+375';
    if (!digits.length) return result;
    result += ` (${digits.slice(0, 2)}`;
    if (digits.length >= 2) result += ')';
    if (digits.length > 2) result += ` ${digits.slice(2, 5)}`;
    if (digits.length > 5) result += `-${digits.slice(5, 7)}`;
    if (digits.length > 7) result += `-${digits.slice(7, 9)}`;
    return result;
}

function getPhoneDigits(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('375')) digits = digits.slice(3);
    if (digits.startsWith('80')) digits = digits.slice(2);
    if (digits.startsWith('0')) digits = digits.slice(1);
    return digits.slice(0, 9);
}

function showFormStatus(message, isError = false) {
    const status = $('#formStatus');
    if (!status) return;
    status.innerHTML = message;
    status.classList.add('is-visible');
    status.style.borderColor = isError ? 'rgba(224, 92, 92, 0.5)' : '';
    status.style.background = isError ? 'rgba(224, 92, 92, 0.1)' : '';
}

function setupPriceTabs() {
    $$('.price-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            $$('.price-tab').forEach((item) => {
                const active = item === tab;
                item.classList.toggle('is-active', active);
                item.setAttribute('aria-selected', String(active));
            });
            const isCards = tab.dataset.tab === 'cards';
            $('#cardsPanel').hidden = !isCards;
            $('#servicesPanel').hidden = isCards;
        });
    });
}

function setupCalc() {
    $$('.calc-btn').forEach((button) => {
        button.addEventListener('click', () => {
            calcMode = button.dataset.calc;
            $$('.calc-btn').forEach((item) => {
                const active = item === button;
                item.classList.toggle('is-active', active);
                item.setAttribute('aria-pressed', String(active));
            });
            updateCalcNote();
            renderCards();
        });
    });
}

function setupScheduleTabs() {
    $$('.day-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            activeDay = tab.dataset.day;
            $$('.day-tab').forEach((item) => {
                const active = item === tab;
                item.classList.toggle('is-active', active);
                item.setAttribute('aria-selected', String(active));
            });
            renderSchedule();
        });
    });
}

function setupOfferClicks() {
    document.addEventListener('click', (event) => {
        const selectButton = event.target.closest('.select-offer');
        if (selectButton) {
            const offer = findOffer(selectButton.dataset.type, selectButton.dataset.id);
            if (offer) selectOffer(offer);
            return;
        }

        const groupButton = event.target.closest('.group-select');
        if (groupButton) {
            selectOffer(`Групповое занятие: ${groupButton.dataset.name} (${groupButton.dataset.day}, ${groupButton.dataset.time})`);
            return;
        }

        const trainerButton = event.target.closest('.trainer-select');
        if (trainerButton) {
            selectOffer(`Тренировка с тренером: ${trainerButton.dataset.trainer}`);
        }
    });
}

function setupPhoneMask() {
    const phoneInput = $('#phoneInput');
    if (!phoneInput) return;

    phoneInput.addEventListener('focus', () => {
        if (!phoneInput.value) phoneInput.value = '+375 (';
    });

    phoneInput.addEventListener('input', () => {
        phoneInput.value = formatPhone(phoneInput.value);
        phoneInput.classList.remove('is-invalid');
    });

    phoneInput.addEventListener('blur', () => {
        if (getPhoneDigits(phoneInput.value).length === 0) phoneInput.value = '';
    });
}

function setupForm() {
    const form = $('#leadForm');
    if (!form) return;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nameInput = $('#nameInput');
        const phoneInput = $('#phoneInput');
        const serviceInput = $('#serviceInput');
        const submitButton = form.querySelector('button[type="submit"]');
        const name = nameInput.value.trim();
        const phoneDigits = getPhoneDigits(phoneInput.value);
        const service = serviceInput.value.trim();

        nameInput.classList.toggle('is-invalid', !name);
        phoneInput.classList.toggle('is-invalid', phoneDigits.length !== 9);

        if (!name) {
            showFormStatus('Укажите имя, чтобы мы знали, как к вам обращаться.', true);
            nameInput.focus();
            return;
        }

        if (phoneDigits.length !== 9) {
            showFormStatus('Укажите телефон в формате +375 (__) ___-__-__.', true);
            phoneInput.focus();
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Отправляем...';
        showFormStatus('Отправляем заявку...');

        const showStaticConfirmation = () => {
            showFormStatus(`Заявка принята. Подтвердите запись по телефону <a href="${CLUB_PHONE_LINK}">${CLUB_PHONE}</a>.`);
            form.reset();
            phoneInput.value = '';
        };

        if (window.location.hostname.endsWith('.github.io')) {
            showStaticConfirmation();
            return;
        }

        try {
            const response = await fetch('api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone: phoneInput.value, service: service || 'Не указана' })
            });

            if (response.status === 404 || response.status === 405) {
                showStaticConfirmation();
                return;
            }

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.error || 'Ошибка сервера');
            }

            if (data.delivered === false) {
                showFormStatus(`Заявка принята. Бот пока не подключён, поэтому подтвердите запись по телефону <a href="${CLUB_PHONE_LINK}">${CLUB_PHONE}</a>.`);
            } else {
                showFormStatus(`Заявка принята. Мы скоро свяжемся с вами. Если удобнее, позвоните: <a href="${CLUB_PHONE_LINK}">${CLUB_PHONE}</a>.`);
            }

            form.reset();
            phoneInput.value = '';
        } catch (error) {
            if (error instanceof TypeError) {
                showStaticConfirmation();
            } else {
                showFormStatus(`Не удалось отправить заявку с сайта. Позвоните нам: <a href="${CLUB_PHONE_LINK}">${CLUB_PHONE}</a>.`, true);
            }
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Отправить заявку';
        }
    });
}

function setupChat() {
    const widget = $('#chatWidget');
    const toggle = $('#chatToggle');
    const panel = $('#chatPanel');
    const close = $('#chatClose');
    const body = $('#chatBody');
    if (!widget || !toggle || !panel || !body) return;

    const openChat = () => {
        panel.classList.add('is-open');
        panel.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        body.scrollTop = body.scrollHeight;
    };

    const closeChat = () => {
        panel.classList.remove('is-open');
        panel.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        if (panel.classList.contains('is-open')) {
            closeChat();
        } else {
            openChat();
        }
    });

    close.addEventListener('click', closeChat);

    document.addEventListener('click', (event) => {
        if (!widget.contains(event.target)) closeChat();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeChat();
    });

    body.addEventListener('click', (event) => {
        const questionButton = event.target.closest('[data-question]');
        if (questionButton) {
            const item = chatAnswers[questionButton.dataset.question];
            if (!item) return;

            const answer = document.createElement('div');
            answer.className = 'chat-answer';
            answer.textContent = item.answer;
            body.appendChild(answer);

            const formLink = document.createElement('button');
            formLink.type = 'button';
            formLink.className = 'chat-form-link';
            formLink.textContent = 'Оставить телефон для записи';
            formLink.dataset.chatService = `Вопрос: ${item.question}`;
            body.appendChild(formLink);
            body.scrollTop = body.scrollHeight;
            return;
        }

        const formLink = event.target.closest('[data-chat-service]');
        if (formLink) {
            selectOffer(formLink.dataset.chatService);
            closeChat();
        }
    });
}

function init() {
    renderCards();
    renderServices();
    renderTrainers();
    buildDatalist();
    renderSchedule();
    updateCalcNote();
    setupPriceTabs();
    setupCalc();
    setupScheduleTabs();
    setupOfferClicks();
    setupPhoneMask();
    setupForm();
    setupChat();

    const year = $('#currentYear');
    if (year) year.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', init);
