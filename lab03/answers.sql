-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id
FROM posts
WHERE user_id = 26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts
WHERE user_id = 26 or user_id=12;



-- Exercise 6
SELECT count(*) FROM posts;



-- Exercise 7
SELECT user_id, count(*)
FROM comments
GROUP BY user_id;



-- Exercise 8
SELECT posts.id, posts.image_url, user_id, username, first_name, last_name
FROM posts
JOIN users ON posts.user_id = users.id
WHERE user_id=26 or user_id=12;



-- Exercise 9
SELECT posts.id, posts.pub_date, f.following_id
FROM posts
JOIN following f on posts.user_id = f.following_id
WHERE f.user_id = 26;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks (user_id, post_id, timestamp)
VALUES (26, 219, now()),
       (26, 220, now()),
       (26, 221, now());



-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 219;

DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 220;

DELETE FROM bookmarks
WHERE user_id = 26 and post_id = 221;



-- Exercise 13
UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id = 26;



-- Exercise 14
