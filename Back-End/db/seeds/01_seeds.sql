INSERT INTO users (first_name, last_name, email, password)
VALUES ('Ami','Smith', 'ami@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Andrew', 'Qdah', 'andrew@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO events (user_id, event_name, date, address, description)
VALUES (1, '21st Birthday Party', '2021-04-04', '3000 Presents Lane', 'Hey, It is my birthday and everyone is always confused as to what to get me so here is my wish list ^_^'),
(2, 'Christmas', '2021-12-21', 'My House', 'It is that time of year again! Here is my wishlist for the secret santa event!');

INSERT INTO wishlist_gifts (event_id, gift_name, price, notes, store_url, quantity, most_wanted, reserved)
VALUES (1, 'Inuyasha POP Figure', 20, 'DO NOT pay more than $30 for it!', 'https://www.amazon.ca/Funko-Pop-Animation-Inuyasha/dp/B07YQH31DD/ref=sr_1_12?keywords=inuyasha+nendoroid&qid=1637364283&sr=8-12', 1, TRUE, FALSE),
(1, 'Books', 10, 'Any mystery or horror book. I like Stephen King. Hardcover please!', null, 2, TRUE, FALSE),
(1, 'Shampoo', 5, 'Any scent works (except vanilla)', null, 3, TRUE, FALSE),
(2, 'Mario Party Switch Game', 80, 'Cost is around $60-80 depending on where you buy it', 'https://www.amazon.ca/Mario-Party-Superstars-Nintendo-Standard/dp/B097B53NRZ/ref=sr_1_1_sspa?keywords=switch+games&qid=1637366963&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzT0JIRDk5RTlXWUxHJmVuY3J5cHRlZElkPUEwOTMwNzc0V0RUWU9PN1YyQ0cyJmVuY3J5cHRlZEFkSWQ9QTA3MDM5MDkyOFRZRTRBRkdUVUczJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==', 1, TRUE, FALSE),
(2, 'Back Scratcher', 15, null, 'https://www.amazon.ca/Pack-Telescoping-Back-Scratcher-Backscratcher/dp/B07VM85S2M/ref=sr_1_1_sspa?keywords=back+scratcher&qid=1637366846&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNU1ZV0tQTzJJRDZOJmVuY3J5cHRlZElkPUEwODcwODc4MkowSVBPWVdWTFdBWSZlbmNyeXB0ZWRBZElkPUEwOTUxNDExMzA2MEVBWU5PM1BXRyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=', 1, FALSE, TRUE);
