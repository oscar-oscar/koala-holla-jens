CREATE TABLE "koala_table"(
	"id" serial primary key,
	"name" varchar(40) not null,
	"age" integer not null,
	"gender" varchar(1) not null,
	"ready" boolean not null,
	"notes" varchar(40)
);

INSERT INTO "koala_table"("name", "age", "gender", "ready", "notes")
VALUES ('Grant', '13', 'M', '0', 'loves other animals');

SELECT * FROM "koala_table";