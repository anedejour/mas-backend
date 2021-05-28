import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourseUnity1619986107804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "coursesUnities",
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
                    name: "description",
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
        await queryRunner.dropTable("coursesUnities");

    }

}
