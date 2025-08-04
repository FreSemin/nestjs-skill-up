import { TypeORMConfig } from 'common/configs/typeorm.config';
import { DataSource } from 'typeorm';

export default new DataSource(new TypeORMConfig().createTypeORMOptions());
