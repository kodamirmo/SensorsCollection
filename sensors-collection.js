import { Mongo } from 'meteor/mongo';

class SensorsCollection extends Mongo.Collection {

}

export const Sensors = new SensorsCollection('sensors');
Sensors.attachBehaviour('timestampable');
