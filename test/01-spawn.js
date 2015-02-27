var assert = require( 'assert' )
	, chai   = require( 'chai' )

it( 'require/syntax check', function () {
	var rlt  = require( '../lib/rlt' )
		, list = rlt.spawn();

	assert( list, 'returned thing is truthy' );
	assert( (typeof list) == 'object', 'returned thing appears to be an object' );

	assert( list.hasOwnProperty( 'push' ), 'rlt has a push' );
	assert( list.hasOwnProperty( 'pop' ), 'rlt has a shift' );
	assert( list.hasOwnProperty( 'length' ), 'rlt has a length' );
} );
