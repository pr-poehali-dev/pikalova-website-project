-- Create news table
CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    image_url TEXT,
    published_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tickets table
CREATE TABLE IF NOT EXISTS tickets (
    id SERIAL PRIMARY KEY,
    event_name VARCHAR(500) NOT NULL,
    event_date VARCHAR(100) NOT NULL,
    venue VARCHAR(300),
    price VARCHAR(100),
    image_url TEXT,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample news
INSERT INTO news (title, description, content, image_url) VALUES
('Премьера: "Лебединое озеро"', 'Грандиозная постановка классического балета', 'PIKALOVA 5 представляет новую интерпретацию легендарного балета Чайковского. Хореограф-постановщик Мария Александрова создала уникальное прочтение вечной истории любви и предательства.', 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800'),
('Гастроли в Париже', 'Труппа театра выступит в Гранд Опера', 'В июне PIKALOVA 5 отправляется на гастроли в Париж. Зрителям французской столицы будут представлены лучшие постановки сезона.', 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=800'),
('Мастер-класс для молодых артистов', 'Открыт набор в летнюю школу', 'Приглашаем талантливую молодёжь на интенсивный курс от ведущих солистов театра. Программа включает балет, актёрское мастерство и сценическое движение.', 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800');

-- Insert sample tickets
INSERT INTO tickets (event_name, event_date, venue, price, category, image_url) VALUES
('Лебединое озеро', '15 декабря 2024, 19:00', 'Большой зал', 'от 3500₽', 'Балет', 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400'),
('Ромео и Джульетта', '22 декабря 2024, 18:30', 'Большой зал', 'от 4000₽', 'Балет', 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400'),
('Щелкунчик', '31 декабря 2024, 20:00', 'Большой зал', 'от 5000₽', 'Балет', 'https://images.unsplash.com/photo-1485153585452-00b8c6cbb930?w=400'),
('Кармен', '10 января 2025, 19:00', 'Малый зал', 'от 2500₽', 'Опера', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400');