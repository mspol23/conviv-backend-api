import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',

    useFactory: async () => {
        const dataSource = new DataSource({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        });

        return dataSource.initialize();
    }
  },
];
