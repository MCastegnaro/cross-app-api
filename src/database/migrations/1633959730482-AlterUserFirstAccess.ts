import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserFirstAccess1633959730482 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "fistAccess");

    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "firstAccess",
        type: "boolean",
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "firstAccess");

    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "fistAccess",
        type: "boolean",
        default: false,
      })
    );
  }
}
