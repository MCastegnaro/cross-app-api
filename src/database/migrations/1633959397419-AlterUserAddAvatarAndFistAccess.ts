import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class AlterUserAddAvatarAndFistAccess1633959397419
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "avatar",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "fistAccess",
        type: "boolean",
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "fistAccess");
    await queryRunner.dropColumn("users", "avatar");
  }
}
