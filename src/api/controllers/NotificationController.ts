import { JsonController, Post, Body} from 'routing-controllers';
import { ConfigurationService } from '../services/ConfigurationService';

@JsonController('/v1/notification')
export class AirportMatrixController {

    constructor(
        private configurationService: ConfigurationService
    ) { }


    @Post()
    public post(@Body() body: any): Promise<any> {
        return this.configurationService.create(body);
    }

}
