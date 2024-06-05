DROP SCHEMA IF EXISTS dev;
DROP SCHEMA IF EXISTS tst;
DROP TABLE IF EXISTS dev.character;
DROP TABLE IF EXISTS dev.profile;
DROP TABLE IF EXISTS dev.character_profile;
DROP TABLE IF EXISTS tst.character;
DROP TABLE IF EXISTS tst.profile;
DROP TABLE IF EXISTS tst.character_profile;

-- スキーマの作成
CREATE SCHEMA IF NOT EXISTS dev;
CREATE SCHEMA IF NOT EXISTS tst;

-- テーブル作成 dev
CREATE TABLE IF NOT EXISTS dev.character
(
     character_id UUID    PRIMARY KEY,
     name         VARCHAR NOT NULL
);
CREATE TABLE IF NOT EXISTS dev.profile
(
    profile_id UUID PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS dev.character_profile
(
    character_id UUID NOT NULL REFERENCES dev.character (character_id) ON DELETE CASCADE,
    profile_id   UUID NOT NULL REFERENCES dev.profile (profile_id)     ON DELETE CASCADE
);

-- テーブル作成 tst
CREATE TABLE IF NOT EXISTS tst.character
(
     character_id UUID    PRIMARY KEY,
     name         VARCHAR NOT NULL
);
CREATE TABLE IF NOT EXISTS tst.profile
(
    profile_id UUID PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS tst.character_profile
(
    character_id UUID NOT NULL REFERENCES tst.character (character_id) ON DELETE CASCADE,
    profile_id   UUID NOT NULL REFERENCES tst.profile (profile_id)     ON DELETE CASCADE
);
