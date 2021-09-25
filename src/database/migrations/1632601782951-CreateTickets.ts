import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateTickets1632601782951 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tickets",
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
            name: "price",
            type: "decimal",
          },
          {
            name: "startDate",
            type: "timestamp",
          },
          {
            name: "endDate",
            type: "timestamp",
          },
          {
            name: "quantity",
            type: "integer",
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
            name: "categoryId",
            type: "uuid",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "tickets",
      new TableForeignKey({
        name: "FK_tickets_categories",
        columnNames: ["categoryId"],
        referencedTableName: "categories",
        referencedColumnNames: ["id"],
        onDelete: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("tickets", "FK_tickets_categories");
    await queryRunner.dropTable("tickets");
  }
}
