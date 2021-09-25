import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateParticipants1632608691804 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "participants",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "code",
            type: "varchar",
          },
          {
            name: "affiliate",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "tShirtSize",
            type: "boolean",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: true,
          },

          {
            name: "subscriptionId",
            type: "uuid",
          },

          {
            name: "categoryId",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "participants",
      new TableForeignKey({
        name: "FK_participants_subscriptions",
        columnNames: ["subscriptionId"],
        referencedTableName: "subscriptions",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
      "participants",
      new TableForeignKey({
        name: "FK_participants_categories",
        columnNames: ["categoryId"],
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "participants",
      "FK_participants_categories"
    );
    await queryRunner.dropForeignKey(
      "participants",
      "FK_participants_subscriptions"
    );
    await queryRunner.dropTable("participants");
  }
}
