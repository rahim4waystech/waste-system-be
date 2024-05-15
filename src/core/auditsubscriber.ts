import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent, Column } from 'typeorm';
import { WSCache } from './cache.service';


/* file check for updates/inserts and audits automatically into audit tables */
@EventSubscriber()
export class AuditSubscriber implements EntitySubscriberInterface {

    /**
     * Called before entity insertion.
     */
    async afterInsert(event: InsertEvent<any>) {

        const tableName = "`" + event.metadata.tableName + "`";

        const entity = event.entity;

        const transId = this.uuid();

        // Don't care about order here meh let it do it's thingies
        Object.keys(entity).forEach(async (field) => {
            let value = entity[field];

            if(value === null) {
                value = '';
            }

            if( typeof value === 'object') {
                return;
            }

            // add audit record for each;
            const params = [transId,this.getUserId(),entity.id,tableName,field,value];


            // TODO: add audit log
            await event.manager.query(`INSERT INTO audit_log VALUES (null, ?, ?, ?, ?, ?, '', ?, 'insert', NOW(), NOW())`, params);
        });
    }

    /**
     * Called before entity insertion.
     */
    async beforeUpdate(event: UpdateEvent<any>) {
        const tableName = "`" + event.metadata.tableName + "`";
        const columns = [];

        event.metadata.columns.forEach((column) => {
            columns.push(column.databaseNameWithoutPrefixes);
        });

        const entity = event.entity;

        const transId = this.uuid();

        // Select * is bad let's not do that, this is not a fisher price bit of software ;)
        const oldEntity = await event.manager.query(`select ${columns.join(',')} from ${tableName} where id = ? limit 1`, [entity.id]);


        // Don't care about order here meh let it do it's thingies
        Object.keys(entity).forEach(async (field) => {

            const value = entity[field];

            let oldValue = oldEntity[0][field];

            if(oldValue === null) {
                oldValue = '';
            }

            if(oldValue == value || typeof value === 'object' || typeof oldValue === 'object') {
                return;
            }

            // add audit record for each;
            const params = [transId,this.getUserId(),entity.id,tableName,field,oldValue,value];
            // TODO: add audit log
            await event.manager.query(`INSERT INTO audit_log VALUES (null, ?, ?, ?, ?, ?, ?, ?, 'update', NOW(), NOW())`, params);
        });
    }

    /**
     * Called before entity insertion.
     */
    beforeRemove(event: RemoveEvent<any>) {
    }

    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
          const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

      getUserId() {
         return WSCache.default.get('currentUserId');
      }
}
