
import { Sequelize } from 'sequelize-typescript';
import { models } from 'src/models';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
        try {

            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT),
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                models: [...models]
              });
            //   await sequelize.sync();
              console.log('Database connected');
              return sequelize;
            
        } catch (error) {
            
            console.log(error, "Connection Error "); 
            // throw new Error(error);

        }
      
    },
  },
];
