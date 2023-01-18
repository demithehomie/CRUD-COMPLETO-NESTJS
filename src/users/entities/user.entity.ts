
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// PADRÃO DE CARACTERÍSTICAS, QUE É DE ONDE NASCEM AS TABELAS DO BANCO DE DADOS

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    nome: string;
    
    @Column({length: 50})
    email: string;
    
    @Column({length: 50})
    senha: string;

}

