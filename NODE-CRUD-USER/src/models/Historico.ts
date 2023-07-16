import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface HistoricoInstance extends Model {
    id: number;
    data: string;
    corEscolhida: string;
    corResultado: string;
    quantidadeErros: number;
}

export const Historico = sequelize.define<HistoricoInstance>("Historico", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.STRING
    },
    corEscolhida: {
        type: DataTypes.STRING
    },
    corResultado: {
        type: DataTypes.STRING
    },
    quantidadeErros: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'historicoblaze',
    timestamps: false
});