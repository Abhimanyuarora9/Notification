import { Service } from 'typedi';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { ConfigurationRepository } from '../repositories/ConfigurationRepository';

@Service()
export class ConfigurationService {

    constructor(
        @OrmRepository() private configurationRepository: ConfigurationRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): any {
    }

    public findById(): any {
    }

    public delete(): any {
    }


    public create(): any {
    }

    public update(): any {
    }
}
