import {Intervention, InterventionPermissionsFields, PlannedBudget} from './intervention.classes';
import {AnyObject} from '../global.types';
import {ManagementBudget} from '../intervention.types';

export class ModelsBase {
  setObjProperties(dataSource: Intervention | InterventionPermissionsFields | PlannedBudget | ManagementBudget) {
    Object.keys(this).forEach((key: string) => this[key] = dataSource[key]);
  }
  setObjProperty(propKey: string, propValue: AnyObject) {
    (<any>this)[propKey] = propValue;
  }
}
