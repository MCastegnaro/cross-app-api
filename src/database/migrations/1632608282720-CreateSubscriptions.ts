import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateSubscriptions1632608282720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "subscriptions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "responsibleName",
            type: "varchar",
          },
          {
            name: "responsibleEmail",
            type: "varchar",
          },
          {
            name: "responsiblePhone",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "isTeam",
            type: "boolean",
          },
          {
            name: "teamName",
            type: "varchar",
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
            name: "ticketId",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "subscriptions",
      new TableForeignKey({
        name: "FK_subscriptions_ticket",
        columnNames: ["ticketId"],
        referencedTableName: "tickets",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "subscriptions",
      "FK_subscriptions_ticket"
    );
    await queryRunner.dropTable("subscriptions");
  }
}
