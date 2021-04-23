import { table } from "node:console";
import { networkInterfaces } from "node:os";
import {MigrationInterface, QueryRunner, Timestamp} from "typeorm";

export class CreateSettings1618947932684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new table({
                name: "settings",
                columns: [{
                    name: "id",
                    type: "uuid",
                    idPrimary: true
                },
                {
                    name: "username",
                    type: "varchar"
                },
                {
                    name: "chat",
                    type: "boolean",
                    default: true
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
