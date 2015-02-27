var assert = require( 'assert' )
	, chai   = require( 'chai' );

it( 'require/syntax check', function () {
	var rlt = require( '../lib/rlt' );
	assert( rlt, 'returned object is truthy' );
	assert( (typeof rlt) == 'object', 'returned object.' );
	assert( rlt.hasOwnProperty( 'spawn' ), 'can spawn.' );
} );
