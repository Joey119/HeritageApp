ALTER TABLE "Heritages" DROP CONSTRAINT "FK_Heritages_ActivationModes_ActivationModeId";

DROP INDEX "IX_Heritages_ActivationModeId";

ALTER TABLE "Heritages" DROP COLUMN "ActivationModeId";

CREATE TABLE "EvaluationParameters" (
    "Id" serial NOT NULL,
    "ParameterValue" double precision NOT NULL,
    CONSTRAINT "PK_EvaluationParameters" PRIMARY KEY ("Id")
);

CREATE TABLE "HeritageActivationModes" (
    "Id" serial NOT NULL,
    "HeritageId" integer NOT NULL,
    "ActivationModeId" integer NOT NULL,
    CONSTRAINT "PK_HeritageActivationModes" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_HeritageActivationModes_ActivationModes_ActivationModeId" FOREIGN KEY ("ActivationModeId") REFERENCES "ActivationModes" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_HeritageActivationModes_Heritages_HeritageId" FOREIGN KEY ("HeritageId") REFERENCES "Heritages" ("Id") ON DELETE CASCADE
);

CREATE INDEX "IX_HeritageActivationModes_ActivationModeId" ON "HeritageActivationModes" ("ActivationModeId");

CREATE INDEX "IX_HeritageActivationModes_HeritageId" ON "HeritageActivationModes" ("HeritageId");

INSERT INTO "EvaluationParameters" ("ParameterValue")
VALUES ('0.2');

INSERT INTO "EvaluationParameters" ("ParameterValue")
VALUES ('0.2');

INSERT INTO "EvaluationParameters" ("ParameterValue")
VALUES ('0.2');

INSERT INTO "EvaluationParameters" ("ParameterValue")
VALUES ('0.2');

INSERT INTO "EvaluationParameters" ("ParameterValue")
VALUES ('0.2');

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20181104175836_DbConversion1', '2.1.1-rtm-30846');

