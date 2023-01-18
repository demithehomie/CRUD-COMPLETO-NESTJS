
import { DataSource } from 'typeorm';

// PROVIDER  = PROVEDOR DE CREDENCIAIS PARA QUE A CONEXÃO COM O BANCO DE DADOS SEJA PERFEITA
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',

//useFactory = FUNÇÃO PADRAO DO TYPEORM QUE "FABRICA" AS CONEXÕES DA NOSSA API COM BANCO DE DADOS
    useFactory: async () => {
      const dataSource = new DataSource({

        //TIPO DO BANCO DE DADOS
        type: 'mysql',

        //QUEM É O HOST
        host: 'localhost',
        
        //QUEM É A PORTA DO SERVIDOR MYSQL
        port: 3306,

        //NOME DE USUÁRIO REFERENTE À CONEXÃO DO BANCO DE DADOS
        username: 'root',
        
        //SENHA DO BANCO DE DADOS
        password: '',

        //NOME DO SCHEMA (BANCO DE DADOS)
        database: 'ionic_quarta',

        //ENTIDADES = PADRÃO DE ONDE NASCEM AS TABELAS DO BANCO DE DADOS
        entities: [

            //NA LINHA ABAIXO, O TYPEORM PROCURA ARQUIVOS COM AS SEGUINTES CARACTERÍSTICAS E EXTENSÕES, OU SEJA, ENTIDADES.
            __dirname + '/../**/*.entity{.ts,.js}',
        ],

        //NA LINHA ABAIXO A SINCRONIZAÇÃO SIMULTÂNEA COM O BANCO DE DADOS OCORRE
        synchronize: true,
      });

      //ESSA FUNÇÃO INICIALIZA TODO O PROCESSO
      return dataSource.initialize();
    },
  },
];
