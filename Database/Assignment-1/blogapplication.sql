-- Active: 1677132059303@@127.0.0.1@5432@blogapplication@public

--Create blog application DATABASE
CREATE DATABASE blogapplication
-- Users Table
CREATE TYPE roleType AS ENUM ('admin', 'moderator', 'author');
CREATE TABLE users(
    userID SERIAL NOT NULL PRIMARY KEY,
    fullName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(30) NOT NULL,
    role roleType NOT NULL)

--Category Table
CREATE TABLE category(
    categoryName VARCHAR(30) PRIMARY KEY NOT NULL UNIQUE,
    categoryDescription VARCHAR(100) NOT NULL
)

-- Tags table 
CREATE TABLE tags(
    tagName VARCHAR(30) NOT NULL UNIQUE PRIMARY KEY,
    tagDescription VARCHAR(100) NOT NULL
)

-- Posts and Tags Table
CREATE TABLE postsandtags (
    tagName VARCHAR(30) NOT NULL,
    FOREIGN KEY (tagName) REFERENCES tags(tagName) ON DELETE NO ACTION,
    postID INT NOT NULL,
    FOREIGN KEY (postID) REFERENCES posts(postID) ON DELETE NO ACTION,
    PRIMARY KEY (postID,tagName)
)

-- Posts Table
CREATE TYPE status as ENUM ('draft','published')
CREATE TABLE posts(
    postID SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    content VARCHAR(1000) NOT NULL,
    postStatus status NOT NULL,
    userID  INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID) ON DELETE NO ACTION,
    categoryName VARCHAR(30) NOT NULL,
    FOREIGN KEY (categoryName) REFERENCES category(categoryName) ON DELETE NO ACTION,
    metaID INT NOT NULL,
    FOREIGN KEY (metaID) REFERENCES metadata(metaID) ON DELETE NO ACTION
)

-- Comments Table
CREATE TABLE comments(
    commentID SERIAL NOT NULL PRIMARY KEY,
    comment VARCHAR(200) NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID) ON DELETE NO ACTION,
    postID INT NOT NULL,
    FOREIGN KEY (postID) REFERENCES posts(postID) ON DELETE NO ACTION
)

-- Replies Table
CREATE TABLE replies(
    replyID SERIAL PRIMARY KEY,
    reply VARCHAR(200) NOT NULL,
    commentID INT NOT NULL,
    FOREIGN KEY (commentID) REFERENCES comments(commentID) ON DELETE NO ACTION,
    userID INT NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID) ON DELETE NO ACTION
)

-- Metadata Table
CREATE TYPE meta as ENUM ('featured','popular')
CREATE TABLE metadata(
    metaID SERIAL NOT NULL PRIMARY KEY,
    metaName meta NOT NULL
)

-- Inserting new users
INSERT INTO users VALUES (1,'Devendra Gurung','learnerdev875@gmail.com','1234','admin')

INSERT INTO users(userID,fullName,email,password,role) VALUES (2,'Prithvi Chauhan','earth@gmail.com','4321','author')

-- Inserting into category
INSERT INTO category VALUES ('entertainment','This category includes everything about pop culture such as music, movies, TV,celebrity etc.')

INSERT INTO category(categoryName,categoryDescription) values('fashion', 'This category includes everything about the current fashion trends, tips and tricks for styling.')

INSERT INTO category (categoryName,categoryDescription) VALUES ('politics', 'All about politics')

INSERT INTO category (categoryName,categoryDescription) VALUES ('tech','All about latest happenings in the tech world')

-- Inserting into tags
INSERT INTO tags VALUES ('milan fashion week','2023 Milan Fashion Week')

INSERT INTO tags VALUES ('billboardhot100',' Top 100 songs this week')

INSERT INTO tags VALUES ('js','Javascript related posts')

-- Inserting into metadata
INSERT INTO metadata VALUES(200,'popular')

INSERT INTO metadata VALUES(201,'featured')

-- Creating new posts with draft
INSERT INTO posts VALUES (300,'Get Started with Canvas Animations in JavaScript','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Volutpat est velit egestas dui. Eget egestas purus viverra accumsan in nisl nisi','draft',2,'tech',201)

INSERT INTO posts VALUES(301,'Flowers by Miley Cyrus remains at 1 for total 5 weeks','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien et. Volutpat est velit egestas dui.','published',1,'entertainment',200)

INSERT INTO posts VALUES(302,'Manipulate Arrays With shift Method','pop() always removes the last element of an array. What if you want to remove the first? That is where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.','published',1,'tech',201)

-- Only admin or moderator can publish the draft post
UPDATE posts SET postStatus = 'published',userID=1 WHERE postID = 300

-- Inserting intp tagsandposts table
INSERT INTO postsandtags VALUES('js',300)

INSERT INTO postsandtags VALUES('js',302)

INSERT INTO postsandtags VALUES('billboardhot100',301)

-- Adding COMMENTS
INSERT INTO comments VALUES(401,'Congratulations Miley',2,301)

-- Adding reply to other's COMMENTS
INSERT INTO replies VALUES (501,'So pround of her',401,1)

-- retrieving posts by category
SELECT * FROM posts WHERE categoryName = 'tech'

-- retrieving posts by tag
SELECT * from posts JOIN postsandtags ON posts.postID = postsandtags.postID JOIN tags ON postsandtags.tagName = tags.tagName WHERE tags.tagName = 'js'

-- retrieving featured posts
SELECT * FROM posts JOIN metadata ON posts.metaID = metadata.metaID WHERE metaName='featured'

-- retrieving popular posts
SELECT title,content,poststatus,userid,categoryname FROM posts LEFT JOIN metadata ON posts.metaID = metadata.metaID WHERE metadata.metaName ='popular';
