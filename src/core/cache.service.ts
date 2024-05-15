const NodeCache = require( "node-cache" );

export class WSCache {

    // Memory cache service for holding values in memory between services
    public static default = new NodeCache();
}