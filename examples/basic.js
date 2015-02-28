#!/usr/bin/env node

'use strict;'

var rlt  = require( '../lib/rlt' )
	, util = require( 'util' )
	, list = rlt.spawn();

console.trace( util.inspect( list ) );

var data1 = {
	key1: 'value1',
	key2: 'value2',
	key3: 'value3'
}

list.push( data1 );
