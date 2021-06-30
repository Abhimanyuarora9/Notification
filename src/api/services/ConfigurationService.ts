import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { ConfigurationRepository } from '../repositories/ConfigurationRepository';
import { Configuration } from '../models/Configuration';

@Service()
export class ConfigurationService {

    constructor(
        @OrmRepository() private configurationRepository: ConfigurationRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async find(): Promise<Configuration[]> {
        this.log.info('ENTER : Find all Configurations');
        return this.configurationRepository.find();
    }


    public findById(id: string): Promise<Configuration> {
        this.log.info('ENTER : Find by Configurations ID');
        const where = {configId: id};
        return this.configurationRepository.findOne({where});
    }

    public delete(id: string): any {
        // COde to delete config
    }


    public async create(body: any): Promise<string> {
        // COde to store config into DB
        return Promise.resolve('configId');
    }

    public update(id: string, body: any): any {
                // COde to store config into DB
                return Promise.resolve('configId');
    }
}
