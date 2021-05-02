import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1619985583423 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activities",
                columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "activity_data",
                    type: "Date"
                },
                {
                    name: "readonly course_unit_i",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },

                ]
            })
        )    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities");

    }

}
