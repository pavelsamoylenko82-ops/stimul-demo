const CLUB_PHONE = '+375 (33) 356-74-52';

function cleanText(value, maxLength) {
    if (typeof value !== 'string') return '';
    return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = req.body || {};
    const name = cleanText(body.name, 80);
    const phone = cleanText(body.phone, 30);
    const service = cleanText(body.service, 160) || 'Не указана';
    const phoneDigits = phone.replace(/\D/g, '');

    if (!name || phoneDigits.length < 10) {
        return res.status(400).json({ error: 'Имя и телефон обязательны' });
    }

    const token = process.env.TG_BOT_TOKEN || process.env.BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID || process.env.CHAT_ID;

    if (!token || !chatId) {
        return res.status(200).json({
            ok: true,
            delivered: false,
            phone: CLUB_PHONE
        });
    }

    const text = [
        'Новая заявка с сайта СТИМУЛ:',
        `Имя: ${name}`,
        `Телефон: ${phone}`,
        `Карта или тренировка: ${service}`
    ].join('\n');

    try {
        const tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                disable_web_page_preview: true
            })
        });

        if (!tgResponse.ok) {
            throw new Error('Telegram API error');
        }

        return res.status(200).json({ ok: true, delivered: true, phone: CLUB_PHONE });
    } catch (error) {
        return res.status(502).json({
            error: 'Не удалось отправить заявку в Telegram',
            phone: CLUB_PHONE
        });
    }
}
