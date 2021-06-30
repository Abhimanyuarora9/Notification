import { EntityRepository, Repository } from 'typeorm';

import { Configuration } from '../models/Configuration';

@EntityRepository(Configuration)
export class ConfigurationRepository extends Repository<Configuration>  {

}
